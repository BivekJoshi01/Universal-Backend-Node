import { useMutation } from "@tanstack/react-query";
import { authenticate } from "./auth-api";

interface LoginFormData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const useAuthHook = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ formData }: { formData: LoginFormData }): Promise<AuthResponse> => {
      try {
        const response = await authenticate(formData);
        return response.data;
      } catch (error: any) {
        throw new Error(
          error?.response?.data?.message || "An error occurred during login"
        );
      }
    },
  });
};
