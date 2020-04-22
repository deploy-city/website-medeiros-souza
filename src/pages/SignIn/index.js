import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MdMail, MdLock } from "react-icons/md";

import { signInRequest } from "../../store/modules/auth/actions";

import { Container } from "./styles";

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const { register, handleSubmit, errors } = useForm();

  const handleLogin = async ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

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
