import axios from "axios";

class AxiosInstance {
  static props;
  static DEFAULT_URL = "http://localhost:8000";
  static TIME_OUT = 3000;

  static createInstance(baseUrl) {
    return axios.create({
      baseURL: baseUrl ? baseUrl : AxiosInstance.DEFAULT_URL,
      timeout: AxiosInstance.TIME_OUT,
    });
  }
}

export default AxiosInstance;
