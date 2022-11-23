import { Link } from "react-router-dom";
import AxiosInstance from "../util/Axios";

export const Main = (props) => {
  AxiosInstance.createInstance().get(`/`);
  return (
    <>
      <div>this is main</div>

      <Link to="/test">
        <button>test</button>
      </Link>
      <Link to="/users">
        <button>users</button>
      </Link>
      <Link to="/login">
        <button>login</button>
      </Link>
    </>
  );
};
