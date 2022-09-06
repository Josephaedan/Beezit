import React from "react";

const GetBeez = ({ beezId }) => {
  const copyToClipboard = () => {
    var beezUrl = "http://localhost:3001/" + beezId;

    navigator.clipboard.writeText(beezUrl);
  };

  return (
    <>
      <h1 className="mx-5 px-5"> Your Beez is: </h1>
      <div className="flex mx-5 mb-9 px-5">
        <input
          type="url"
          className="w-full border rounded"
          value={"beezit-dnaqre2ux-josephaedan.vercel.app" + beezId}
        ></input>
        <button
          onClick={copyToClipboard()}
          className="p-3 ml-2 bg-amber-400 hover:bg-amber-600 font-bold rounded shadow-lg focus:outline-none focus:ring focus:ring-amber-500"
        >
          Copy!
        </button>
      </div>
    </>
  );
};

export default GetBeez;
