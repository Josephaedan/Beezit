import React, { Fragment, useState } from "react";
import "./App.css";

//Components
import CreateBeez from "./components/CreateBeez";
import GetBeez from "./components/GetBeez";
import Logo from "./components/Logo";

function App() {
  const [beezId, setBeezId] = useState("");

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-beez bg-cover">
        <div className=" bg-white shadow-lg rounded-2xl">
          <Logo />
          <CreateBeez setBeezId={setBeezId} />
          {beezId && <GetBeez beezId={beezId} />}
        </div>
      </div>
    </>
  );
}

export default App;
