import React, { Fragment, useState } from "react";
import logo from "../img/logo.png";

const CreateBeez = (props) => {
  const [link, setLink] = useState("");
  const [url_id, setUrl_id] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      // Assign random 8-character code if empty
      if (url_id === "") {
        setUrl_id(
          Array.from(Array(8), () =>
            Math.floor(Math.random() * 36).toString(36)
          )
            .join("")
            .toLocaleUpperCase()
        );
        alert(
          "No ID provided, a random 8-character code has been generated for you. Press submit again."
        );
        return;
      }
      const body = { link, url_id };

      const response = await fetch("http://localhost:3001/beez", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
      if (data.Error) {
        alert("Error creating a Beez: " + data.Error);
        return;
      }

      alert("Beez successfully created with URL ID " + url_id + "!");
      props.setBeezId(url_id);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="justify-center items-center block ">
        <form className="block m-5 p-5" onSubmit={onSubmitForm}>
          <div className="flex justify-center">
            <img className="h-48" src={logo} />
          </div>
          <div className="flex justify-center mb-10">
            <h1 className="text-5xl font-black">Beez It!</h1>
          </div>
          <label className="m-1">Enter URL here:</label>
          <input
            type="url"
            className="m-1 form-input w-full border rounded"
            value={link}
            placeholder="Paste URL here"
            onChange={(e) => setLink(e.target.value)}
          />
          <label className="m-1">Enter 8-character code here:</label>
          <input
            type="text"
            className="m-1 form-input w-full border rounded"
            value={url_id}
            placeholder="Leave blank to get a randomly generated code"
            onChange={(e) => setUrl_id(e.target.value)}
          />
          <div className="flex space-x-1 justify-center mt-3">
            <button className="px-5 py-2 bg-amber-400 hover:bg-amber-600 font-bold rounded-full shadow-lg">
              Shorten!
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateBeez;
