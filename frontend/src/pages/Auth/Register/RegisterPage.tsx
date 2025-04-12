import React from "react";
import { FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RenderInput from "../../../components/RenderInput/RenderInput";
import { useAuthHook } from "../../../api/auth/auth-hook";

// Define form data type
interface LoginFormData {
  email: string;
  password: string;
}

// Define validation schema
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Define input fields configuration
const inputFields = [
  {
    name: "email",
    type: "email" as const,
    placeholder: "Enter your email",
    label: "User Name",
    required: true,
    gridClass: "col-span-2 md:col-span-1",
  },
  {
    name: "password",
    type: "password" as const,
    placeholder: "Enter password",
    label: "Password",
    required: true,
    gridClass: "col-span-2 md:col-span-1",
  },
];

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(validationSchema),
  });

  const { mutate, isError, error } = useAuthHook();

  const onSubmit = (data: LoginFormData) => {
    console.log("Form Data:", data);

    mutate(
      { formData: data },
      {
        onSuccess: (response) => {
          console.log("Login Successful", response);
        },
        onError: (err) => {
          console.error("Login Failed:", err);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 md:grid-cols-3"
    >
      {inputFields.map((field, index) => (
        <div key={index} className={`w-full ${field.gridClass} py-1 px-3`}>
          <RenderInput
            name={field.name}
            fieldType={field.type}
            placeholder={field.placeholder}
            label={field.label}
            required={field.required}
            register={register}
            error={
              errors[field.name as keyof LoginFormData] as
                | FieldError
                | undefined
            }
          />
        </div>
      ))}
      <div className="col-span-2 md:col-span-3">
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-lg"
          // disabled={isLoading}
        >
          {/* {isLoading ? "Submitting..." : "Submit"} */}
          Submit
        </button>
      </div>

      {/* ✅ Safe error handling using type guard */}
      {isError && error instanceof Error && (
        <p className="text-red-500 mt-2">{error.message}</p>
      )}
    </form>
  );
};

export default RegisterPage;
