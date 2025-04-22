import { axiosInstance } from "../../../utils/axiosInterceptor";

export const addArea = async (formData: object) => {
  const { data } = await axiosInstance.post("api/user/area", formData);
  return data;
};
