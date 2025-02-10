import React from "react";
import { useAuth } from "./FirebaseAuthContext";
import { Button } from "react-bootstrap";

function LogoutButton() {
  const { logout } = useAuth();

  return (
    <Button
      onClick={logout}
      style={{ maxWidth: "250px"}}
      variant="outline-danger"

    >
      Logout
    </Button>
  );
}

export default LogoutButton;
