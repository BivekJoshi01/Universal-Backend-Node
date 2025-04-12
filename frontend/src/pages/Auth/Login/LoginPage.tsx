import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useAuthHook } from '../../../api/auth/auth-hook';

type FormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

    const { mutate, isError, error } = useAuthHook();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    navigate("Menu/Home")

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

    // Simulated login logic
    // if (data.email === 'admin' && data.password === '1234') {
    //   navigate('Menu/Home');
    // } else {
    //   alert('Invalid credentials');
    // }
  };

  return (
    <div className="">
      <div className="p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              email
            </label>
            <input
              type="text"
              id="email"
              {...register('email', { required: 'email is required' })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
