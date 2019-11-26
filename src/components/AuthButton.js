import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { fakeAuth } from "../helpers/fakeAuth";

const Header = styled.h1`
  text-align: center;
  background: #000;
  color: #fff;
`;

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{""}
      {/* <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button> */}
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;
