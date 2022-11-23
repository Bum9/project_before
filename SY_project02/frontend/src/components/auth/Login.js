import { Link } from "react-router-dom";
import AxiosInstance from "../../util/Axios";

export const Login = (props) => {
  console.log(AxiosInstance.createInstance().get(`/login`));

  return (
    <>
      <div>this is login component</div>
      <p></p>
      <Link to="/">
        <button>to main</button>
      </Link>
    </>
  );
};
