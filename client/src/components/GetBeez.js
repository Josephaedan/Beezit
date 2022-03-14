import React, { Fragment, useEffect, useState } from "react";

const GetBeez = ({ beezId }) => {
  function copyToClipboard() {
    var beezUrl = "http://localhost:5000/" + beezId;
    navigator.clipboard.writeText(beezUrl);
  }

  return (
    <Fragment>
      <div className="flex mx-5 px-5 justify-center">
        <h1 className="w-full">Your Beez is:</h1>
      </div>
      <div className="flex mx-5 mb-9 px-5 justify-center">
        <input
          type="url"
          className="w-full border rounded"
          value={"http://localhost:5000/" + beezId}
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
