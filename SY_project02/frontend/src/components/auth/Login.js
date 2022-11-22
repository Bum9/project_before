import { Link } from "react-router-dom";
import AxiosInstance from "../../util/Axios";

export const Login = (props) => {
  AxiosInstance.createInstance().get(`/login`);
  console.log(AxiosInstance.createInstance().get(`/login`));
  return (
    <>
      <div>this is login component</div>
      <Link to="/">
        <button>to main</button>
      </Link>
    </>
  );
};
