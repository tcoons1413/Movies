import React from "react";
import { useAuth } from "./FirebaseAuthContext";
import { Button } from "react-bootstrap";

function LoginButton() {
  const { loginWithGoogle } = useAuth();

  return (
    <Button
      onClick={loginWithGoogle}
      style={{ width: "150px" }}
      variant="outline-primary"
      align="start"
    >
      Login
    </Button>
  );
}

export default LoginButton;
