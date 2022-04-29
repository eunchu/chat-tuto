import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { signIn } from "next-auth/client";

const Container = styled.section``;

const Login = () => {
  return (
    <Container>
      <Button colorScheme="twitter" size="md" rightIcon={<ArrowForwardIcon />}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
