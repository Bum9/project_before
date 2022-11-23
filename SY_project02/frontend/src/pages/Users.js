import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../util/Axios";
import usePromise from "../lib/usePromise";

export const Users = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [loading, response, error] = usePromise(() => {
    return AxiosInstance.createInstance().get(`/users`);
  }, []);
  if (loading) {
    <span>Loading...</span>;
  }
  if (!response) {
    return ""; //or null
  }
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
      <p>
        {data.map((x) => (
          <>
            <div key={x.id}>
              {x.id}:{x.username}
            </div>
          </>
        ))}
      </p>
      <input onChange={handleChange} name="id" />
      <Link to="/">
        <button>to main</button>
      </Link>
      <h1>{name}</h1>
    </div>
  );
};
