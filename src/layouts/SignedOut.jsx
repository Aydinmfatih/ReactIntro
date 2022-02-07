import React from "react";
import { Button } from "reactstrap";
export default function SignedOut(props) {
  return (
    <div>
      <Button onClick={props.SignIn} color="primary">Giriş yap</Button>
      <Button  style={{marginLeft:"0.5em"}} color="primary">Kayıt ol</Button>



      
    </div>
  );
}
