import React, { Fragment, useState } from "react";
import "./App.css";

//Components
import CreateBeez from "./components/CreateBeez";
import GetBeez from "./components/GetBeez";

function App() {
  const [beezId, setBeezId] = useState("");

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-beez bg-cover">
        <Fragment>
          <div className="container bg-white shadow-lg rounded-2xl w-auto mx-auto content-center justify-center">
            <CreateBeez setBeezId={setBeezId} />
            {beezId && <GetBeez beezId={beezId} />}
          </div>
        </Fragment>
      </div>
    </>
  );
}

export default App;
