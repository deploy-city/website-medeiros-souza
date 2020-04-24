import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MdMail, MdLock } from "react-icons/md";

import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();

  const handleLogin = useCallback(
    async ({ email, password }) => {
      setLoading(true);
      await signIn({ email, password });
      window.location.href = "/admin";
    },
    [signIn]
  );

  return (
    <Container>
      <div>
        <h2>LOGIN</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <MdMail size={30} color="rgba(0, 0, 0, 0.3)" />
            <input
              name="email"
              required
              ref={register({ required: true })}
              type="email"
              placeholder="E-mail"
            />
          </div>

          <div>
            <MdLock size={30} color="rgba(0, 0, 0, 0.3)" />
            <input
              name="password"
              required
              ref={register({ required: true })}
              type="password"
              placeholder="Password"
            />
          </div>

          <button type="submit">{loading ? "LOADING..." : "LOGIN"}</button>
        </form>
      </div>
    </Container>
  );
}
