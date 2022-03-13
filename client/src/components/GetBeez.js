import React, { Fragment, useEffect, useState } from "react";

const GetBeez = ({ beez }) => {
  const [url_id, setUrl_id] = useState(beez.url_id);

  const listBeez = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch;
    } catch (err) {
      console.log(err.message);
    }
  };
};
