import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addArea } from "./area-api";

interface RegisterPayload {
  formData: Record<string, any>;
}

export const useAddAreaHook = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async ({ formData }: RegisterPayload): Promise<any> => {
      const response = await addArea(formData);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Area added successfully");
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
