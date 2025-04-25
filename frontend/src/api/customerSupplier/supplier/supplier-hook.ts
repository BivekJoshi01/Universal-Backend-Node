import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addSupplier, searchSupplier } from "./supplier-api";

export const useAddSupplierHook = () => {
//   const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["supplier"],
    mutationFn: async ({ formData }: any): Promise<any> => {
      const response = await addSupplier(formData);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Supplier added successfully");
    //   queryClient.invalidateQueries({ queryKey: ["getAgentPaginated"] });
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


export const useSearchSupplierHook = () => {
  return useMutation({
    mutationKey: ["supplier"],
    mutationFn: async ({ formData }: any): Promise<any> => {
      const response = await searchSupplier(formData);
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
