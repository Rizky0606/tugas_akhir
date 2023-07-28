import React from "react";
import { useState } from "react";

const MataKuliah = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://localhost:3001/mataKuliah";
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((json) => {
      setData(json);
      setLoading(false);
    });

  return (
    <>
      {loading ? (
        <h1>Loading ....</h1>
      ) : (
        <>
          {data.map((matkul) => {
            return <h1>{matkul}</h1>;
          })}
        </>
      )}
    </>
  );
};

export default MataKuliah;
