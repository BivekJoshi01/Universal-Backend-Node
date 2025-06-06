import React from 'react'
import LogoSVG from "../../../assets/Office/GlobeImage.svg";
import { useResetPasswordHook } from '../../../api/auth/auth-hook';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const ResetPassword: React.FC = () => {
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();

    const { mutate } = useResetPasswordHook();

    const onSubmit = (data: FormData) => {

        mutate({
            formData: {
                ...data,
                id,
            }
        });
    };
    return (
        <div className="bg-[#d7e2f7] shadow-2xl rounded-xl w-full max-w-md px-8 py-10" style={{
            backgroundImage: `url(${LogoSVG})`,
            backgroundRepeat: "no-repeat",
        }}>
            <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
                Universal Stationery Suppliers
            </h1>      <h2 className="text-xl font-semibold text-center text-gray-700 mb-8">
                Welcome Back
            </h2>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        password <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        id="password"
                        // name="login_password"
                        autoComplete="off"
                        {...register("password", { required: "Please enter password" })}
                        className={`w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${errors.password ? "border-red-500" : "border-gray-300"
                            } text-black`}
                        placeholder="Enter your password"
                    />
                    {/* {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )} */}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-semibold py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ResetPassword