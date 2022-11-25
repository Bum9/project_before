import axios from "axios";

export const getReq = async (props) => {
  return await axios
    .get(`http://localhost:8000/${props}`)
    .then((res) => console.log(res));
};

export const postReq = async (props) => {
  return await axios
    .post(`http://localhost:8000/${props}`)
    .then((res) => console.log(res));
};

export const updateReq = async (props) => {
  return await axios
    .update(`http://localhost:8000/${props}`)
    .then((res) => console.log(res));
};

export const putReq = async (props) => {
  return await axios
    .put(`http://localhost:8000/${props}`)
    .then((res) => console.log(res));
};

export const deleteReq = async (props) => {
  return await axios
    .delete(`http://localhost:8000/${props}`)
    .then((res) => console.log(res));
};

export const patchReq = async (props) => {
  return await axios
    .patch(`http://localhost:8000/${props}`)
    .then((res) => console.log(res));
};
