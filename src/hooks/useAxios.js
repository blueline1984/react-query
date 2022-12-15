import axios from "axios";

const useAxios = () => {
  const instance = axios.create({
    baseURL: "http://localhost:4000",
  });

  return {
    instance,
  };
};

export default useAxios;
