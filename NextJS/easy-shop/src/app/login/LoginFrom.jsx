/** @format */
"use client";
import GoogleLogin from "@/components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import createjwt from "@/utils/createJWT";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
export const metadata = {
    title: "ES || LogIn",
    description: " Easy Shop Is an E-commerc Web App ",
};

const LoginFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signIn, googleLogin } = useAuth();
    const search = useSearchParams();
    const from = search.get("redirect") || "/";
    const { replace, refresh } = useRouter();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const toastId = toast.loading("Loading...");
        try {
            await signIn(email, password);
            await createjwt({ email });
            startTransition(() => {
                refresh();
                replace(from);
                toast.dismiss(toastId);
                toast.success("User signed in successfully");
            });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");
        }
    };

    const handleGoogleLogin = async ({ from }) => {
        const toastId = toast.loading("loading...");
        try {
            const { user } = await googleLogin();
            await createjwt({ email: user.email });
            toast.dismiss(toastId);
            toast.success("user successfully Sign In");
            replace(from);
        } catch (error) {
            toast.dismiss(toastId);
            toast.success("user successfully Sign In");
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='card-body'>
            <div className='form-control'>
                <label
                    htmlFor='email'
                    className='label label-text'>
                    Email
                </label>
                <input
                    type='email'
                    placeholder='email'
                    id='email'
                    name='email'
                    className='input input-bordered'
                    autoComplete='email'
                    {...register("email", {
                        required: true,
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                    })}
                />
                {errors.email && (
                    <span className='text-red-500 text-base mt-1'>
                        Please enter a valid email address.
                    </span>
                )}
            </div>
            <div className='form-control'>
                <label
                    htmlFor='password'
                    className='label label-text'>
                    Password
                </label>
                <input
                    type='password'
                    placeholder='password'
                    id='password'
                    name='password'
                    className='input input-bordered'
                    autoComplete='new-password'
                    {...register("password", {
                        required: true,
                        minLength: 6,
                    })}
                />
                {errors.password && (
                    <span className='text-red-500 text-base mt-1'>
                        Please enter a password.
                    </span>
                )}
                <label className='label'>
                    <a
                        href='#'
                        className='label-text-alt link link-hover'>
                        Forgot password?
                    </a>
                </label>
            </div>
            <div className='form-control mt-6'>
                <button
                    className='btn btn-primary'
                    type='submit'>
                    Login
                </button>
            </div>
            <p className='mt-3'>
                Don&apos;t have an account?
                <Link
                    className='text-blue-500 underline ml-1'
                    href='/signup'>
                    Signup
                </Link>
            </p>
            <div className='divider mt-5'>OR</div>
            <button
                className='btn btn-primary mt-5 mx-auto'
                onClick={handleGoogleLogin}
                type='button'>
                <FcGoogle className='text-3xl mr-3' /> Continue With Google
            </button>
        </form>
    );
};

export default LoginFrom;
