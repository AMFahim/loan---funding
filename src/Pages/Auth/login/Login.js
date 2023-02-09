import React from 'react';
import { Link } from 'react-router-dom';
import UiInput from '../../../components/common/ui/UiInput';
import UiLargeArrowButton from '../../../components/common/ui/UiLargeArrowButton';

const Login = () => {
    return (
        <div>
            <div className="w-[377px] py-12 mx-auto">
                <div className="shadow-xl p-6 rounded-md shadow-gray-400">
                    <h3 className="text-5xl text-primary-8 pb-8 text-center font-poppins">
                        LogIn
                    </h3>
                    <form onSubmit=" ">
                        <UiInput
                            label="Login Email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            // onChange=" "
                        ></UiInput>
                        <UiInput
                            label="password"
                            type="password"
                            name="password"
                            placeholder="Enter your 8 digit password"
                            // onChange=" "
                        ></UiInput>
                        <div className="text-center my-8">
                            {/* <UiButton label={t("next")}></UiButton> */}
                            {/* <UiArrowButton label={t("next")}></UiArrowButton> */}
                            <Link to="/verification">
                                <UiLargeArrowButton label="next"></UiLargeArrowButton>
                            </Link>
                        </div>
                    </form>
                    <div className="text-center">
                        <Link to="/forget-password">
                            <p className="py-2 text-blue-normal font-medium inline font-poppins text-gray-500 hover:text-primary">
                                Forget password or Email?
                            </p>
                        </Link>
                        <br />
                        <p className="py-2 text-gray-500 font-medium inline font-poppins">
                            Don't have account?
                            <Link to="/register">
                                <span className=' hover:text-primary'> Register now</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;