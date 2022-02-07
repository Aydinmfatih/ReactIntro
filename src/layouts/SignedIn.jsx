import React from "react";
import { Button } from "reactstrap";

export default function SignedIn(props) {
  return (
    <div>Fatih Aydın
      <img  src="https://secure.gravatar.com/avatar/d6fd6bff19d7f0ad4024f3811474fe92?s=180&d=mm&r=g"  className="avatar" alt="Avatar" ></img>
      <Button onClick={props.signOut}  style={{ marginTop: "0.5em" }} color="primary">
        Çıkış
      </Button>
      

      
    </div>
  );
}
