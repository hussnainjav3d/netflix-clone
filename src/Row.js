import React, { useState, useEffect } from "react";
import axios from "axios";
const Row = ({ title, fetchURL }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
