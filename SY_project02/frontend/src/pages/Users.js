import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../util/Axios";
import usePromise from "../lib/usePromise";

export const Users = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //   AxiosInstance.createInstance().get(`/users`);

  const [loading, response, error] = usePromise(() => {
    return AxiosInstance.createInstance().get(`/users`);
  }, []);

  if (loading) {
    <span>Loading...</span>;
  }

  //when it doesn't get response values
  if (!response) {
    return ""; //or null
  }
  // when it cause some error
  if (error || response.data === null) {
    return alert(
      "페이지를 찾을 수 없어요!",
      navigate("/", {
        state: { url: "/" },
      })
    );
  }

  const data = response.data;
  console.log(data);

  const handleChange = (e) => {
    setName(e.target.value);
  };

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
