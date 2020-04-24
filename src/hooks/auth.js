import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

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
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    console.log(response.data);

    const { user, token } = response.data;

    localStorage.setItem("@medeirossouza:token", token);
    localStorage.setItem("@medeirossouza:user", JSON.stringify(user));

    setData({ user, token, signed: true });
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
