import React from "react";
import { useAuth } from "./FirebaseAuthContext";
import { Button } from "react-bootstrap";

function LogoutButton() {
  const { logout } = useAuth();

  return (
    <Button
      onClick={logout}
      style={{ width: "205px" }}
      variant="outline-primary"
      align="start"
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
