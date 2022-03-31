import React, { useState } from "react";

const CreateBeez = (props) => {
  const [link, setLink] = useState("");
  const [url_id, setUrl_id] = useState("");

  const generateUrl = () => {
    // Assign random 8-character code if empty
    setUrl_id(
      Array.from(Array(8), () => Math.floor(Math.random() * 36).toString(36))
        .join("")
        .toLocaleUpperCase()
    );
    alert(
      "No ID provided, a random 8-character code has been generated for you. Press submit again."
    );
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      if (url_id === "") {
        generateUrl(e);
        return;
      }
      const body = { link, url_id };

      const response = await fetch("http://localhost:3001/beez", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      // Error Handling - Failed to create
      if (data.message) {
        throw new Error(data.message);
      }

      alert("Beez successfully created with URL ID " + data.url_id + "!");
      props.setBeezId(data.url_id);
    } catch (err) {
      alert("Error creating Beez: " + err.message);
      console.error(err.message);
    }
  };

  return (
    <>
      <form
        className="m-5 p-5 justify-center items-center"
        onSubmit={handlePost}
      >
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
        <div className="flex justify-center mt-3">
          <button className=" px-5 py-2 bg-amber-400 hover:bg-amber-600 font-bold rounded-full shadow-lg">
            Shorten!
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateBeez;
