/** @format */

import LoginFrom from "./LoginFrom";
import LoginSvg from "@/components/LoginSvg";
export const metadata = {
    title: "ES || LogIn",
    description: " Easy Shop Is an E-commerc Web App ",
};

const LoginPage = () => {
    return (
        <div className='hero bg-blue-200 w-full'>
            <div className='hero-content flex-col lg:flex-row justify-between w-full'>
                <div className='text-center lg:text-left first-letter:'>
                    <h1 className='text-5xl font-bold text-center'>
                        Login Now
                    </h1>
                    <p className='pt-6 text-center'>
                        Login Now TO connect With Us
                    </p>
                    <LoginSvg />
                </div>
                <div className='card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
                    <LoginFrom />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
