import React from "react";
import { useHistory } from "react-router-dom";

import { fakeAuth } from "../helpers/fakeAuth";
<<<<<<< HEAD
// import Todo from "../components/Todo";
=======
<<<<<<< HEAD
=======
>>>>>>> d2d4f191073a1ed0f62615f47888f6e61a6b2863

>>>>>>> 4256839e6139500e25d56cce78e80aca412efab6


function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{""}
<<<<<<< HEAD
=======
      <Wrapper>
        <Header>React Todo</Header>
<<<<<<< HEAD
        {/* <Todo /> */}
=======
       
>>>>>>> d2d4f191073a1ed0f62615f47888f6e61a6b2863
      </Wrapper>
>>>>>>> 4256839e6139500e25d56cce78e80aca412efab6
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
