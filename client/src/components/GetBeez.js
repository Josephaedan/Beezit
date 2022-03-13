/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";

const GetBeez = (props) => {
  const [BeezURL, setBeezURL] = useState(
    "http://localhost:5000/" + props.beezId
  );

  function copyToClipboard() {
    navigator.clipboard.writeText(BeezURL);
  }

  return (
    <Fragment>
      <div className="flex mx-5 px-5 justify-center">
        <h1 className="w-full">Your Beez is:</h1>
      </div>
      <div className="flex mx-5 mb-5 px-5 justify-center">
        <input
          type="url"
          className=" w-full border rounded"
          value={BeezURL}
        ></input>
        <button
          onClick={copyToClipboard()}
          className="h-full flex ml-2 p-3 bg-amber-400 hover:bg-amber-600 font-bold rounded shadow-lg focus:outline-none focus:ring focus:ring-amber-500"
        >
          Copy!
        </button>
      </div>
    </Fragment>
  );
};

export default GetBeez;
