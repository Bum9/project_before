import { useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../util/Axios";

export const Test = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const a = AxiosInstance.createInstance().get(`/test`);
  const getData = async () => {
    const { data } = await a;
    console.log(data);
    return data;
  };
  getData();

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
