import React from "react";
import { Button } from "reactstrap";
export default function SignedIn() {
  return (
    <div>
      <Button  color="primary">Giriş yap</Button>
      <Button style={{marginLeft:"0.5em"}} color="primary">Kayıt ol</Button>
    </div>
  );
}
