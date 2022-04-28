import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import { signIn } from "next-auth/client";

const Container = styled.section``;

const Login = () => {
  return (
    <Container>
      <Input />
      <Input />
      <button>Login</button>
    </Container>
  );
};

export default Login;
