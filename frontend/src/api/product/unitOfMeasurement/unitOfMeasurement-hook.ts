import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  addUnitOfMeasurement,
  deleteUnitOfMeasurement,
  getAllUnitOfMeasurement,
  getUnitOfMeasurementById,
  searchUnitOfMeasurement,
  updateUnitOfMeasurement,
} from "./unitOfMeasurement-api";

export const useAddUnitOfMeasurementHook = () => {
  return useMutation({
    mutationKey: ["unitofmeasurement"],
    mutationFn: async ({ formData }: any): Promise<any> => {
      const response = await addUnitOfMeasurement(formData);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Unit of measurement added successfully");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(message);
    },
  });
};

export const useGetAllUnitOfMeasurementHook = () => {
  return useQuery({
    queryKey: ["unitOfMeasurement"],
    queryFn: async () => {
      const response = await getAllUnitOfMeasurement();
      return response;
    },
  });
};

export const useSearchUnitOfMeasurementHook = () => {
  return useMutation({
    mutationKey: ["searchUnitOfMeasurement"],
    mutationFn: async ({ formData }: any): Promise<any> => {
      const response = await searchUnitOfMeasurement(formData);
      return response;
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(message);
    },
  });
};

export const useGetUnitOfMeasurementByIdHook = (id: string) => {
  return useQuery({
    queryKey: ["getUnitOfMeasurementById", id],
    queryFn: async () => {
      const response = await getUnitOfMeasurementById(id);
      return response;
    },
    enabled: !!id,
  });
};

export const useUpdateUnitOfMeasurementHook = () => {
  return useMutation({
    mutationKey: ["updateUnitOfMeasurement"],
    mutationFn: async ({
      id,
      formData,
    }: {
      id: string;
      formData: object;
    }): Promise<any> => {
      const response = await updateUnitOfMeasurement(id, formData);
      return response;
    },
    onSuccess: () => {
      toast.success("Unit of measurement updated successfully");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(message);
    },
  });
};

export const useDeleteUnitOfMeasurementHook = () => {
  return useMutation({
    mutationKey: ["deleteUnitOfMeasurement"],
    mutationFn: async (id: string): Promise<any> => {
      const response = await deleteUnitOfMeasurement(id);
      return response;
    },
    onSuccess: () => {
      toast.success("Unit of measurement deleted successfully");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(message);
    },
  });
};
