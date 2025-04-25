import { axiosInstance } from "../../../utils/axiosInterceptor";

export const addSupplier = async (formData: object) => {
  const { data } = await axiosInstance.post("api/core/supplier/create", formData);
  return data;
};


export const searchSupplier = async (formData: object) => {
  const { data } = await axiosInstance.post("api/core/supplier/search", formData);
  return data;
};

