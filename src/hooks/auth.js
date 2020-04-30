import React, { createContext, useCallback, useState, useContext } from "react";

import api from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@medeirossouza:token");
    const user = localStorage.getItem("@medeirossouza:user");

    if (token && user) {
      return { token, user: JSON.parse(user), signed: true };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { user, token } = response.data;

      localStorage.setItem("@medeirossouza:token", token);
      localStorage.setItem("@medeirossouza:user", JSON.stringify(user));

      api.interceptors.request.use((config) => {
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      });

      api.interceptors.response.use(
        (response) => {
          return response;
        },
        async function (error) {
          const originalRequest = error.config;
          if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return api.get("/auth/refresh").then((response) => {
              if (response.status === 201) {
                // 1) put token to LocalStorage
                localStorage.setItem(response.data.token);

                // 2) Change Authorization header
                api.defaults.headers.common[
                  "Authorization"
                ] = `Bearer ${response.data.token}`;

                // 3) return originalRequest object with Axios.
                return api(originalRequest);
              }
            });
          }
        }
      );

      setData({ user, token, signed: true });
    } catch (err) {
      toast.error("Something went wrong, please try again");
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@medeirossouza:token");
    localStorage.removeItem("@medeirossouza:user");

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signed: data.signed, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within Auth.Provider");
  }

  return context;
}
