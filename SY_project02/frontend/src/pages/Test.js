import { useState } from "react";
import { Link } from "react-router-dom";
import { getReq } from "../util/axios-bearer";
import AxiosInstance from "../util/Axios";

export const Test = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  AxiosInstance.createInstance().get(`/test`);

  return (
    <div>
      <input onChange={handleChange} name="id" />
      <Link to="/">
        <button>to main</button>
      </Link>
      <h1>{name}</h1>
    </div>
  );
};
