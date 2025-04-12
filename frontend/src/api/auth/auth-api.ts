import { axiosInstance } from "../../utils/axiosInterceptor";

export const authenticate = async (formData:object) => {
  const { data } = await axiosInstance.post("http://localhost:3005/auth/login", formData);
  return data;
};
