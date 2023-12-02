/** @format */

import LoginSvg from "@/components/LoginSvg";
import SignupForm from "./SignupForm";
export const metadata = {
    title: "ES || SignUp",
    description: " Easy Shop Is an E-commerc Web App ",
};

const SignupPage = () => {
    return (
        <div>
            <div className='hero bg-blue-200 w-full'>
                <div className='hero-content flex-col lg:flex-row justify-between w-full'>
                    <div className='text-center lg:text-left first-letter:'>
                        <h1 className='text-5xl font-bold text-center'>
                            Sign Up
                        </h1>
                        <p className='pt-6 text-center'>
                            Regestration Now TO connect With Us
                        </p>
                        <LoginSvg />
                    </div>
                    <div className='card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
                        <SignupForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
