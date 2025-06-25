import { axiosInstance } from "../../../utils/axiosInterceptor";

export const addUnitOfMeasurement = async (formData: object) => {
  const { data } = await axiosInstance.post(
    "api/inventory/unitOfMeasurement/create",
    formData
  );
  return data;
};

export const getAllUnitOfMeasurement = async () => {
  const { data } = await axiosInstance.get(
    "api/inventory/unitOfMeasurement/getAll"
  );
  return data;
};

export const searchUnitOfMeasurement = async (formData: object) => {
  const { data } = await axiosInstance.post(
    "api/inventory/unitOfMeasurement/search",
    formData
  );
  return data;
};

export const getUnitOfMeasurementById = async (id: string) => {
  const { data } = await axiosInstance.get(
    `api/inventory/unitOfMeasurement/${id}`
  );
  return data;
};

export const updateUnitOfMeasurement = async (id: string, formData: object) => {
  const { data } = await axiosInstance.put(
    `api/inventory/unitOfMeasurement/${id}`,
    formData
  );
  return data;
};

export const deleteUnitOfMeasurement = async (id: string) => {
  const { data } = await axiosInstance.delete(
    `api/inventory/unitOfMeasurement/${id}`
  );
  return data;
};
