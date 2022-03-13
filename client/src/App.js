import React, { Fragment } from "react";
import "./App.css";

//Components
import CreateBeez from "./components/CreateBeez";

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-beez bg-cover">
        <Fragment>
          <div className="container mx-auto content-center justify-center">
            <CreateBeez />
          </div>
        </Fragment>
      </div>
    </>
  );
}

export default App;
