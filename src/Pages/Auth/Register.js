import React from 'react';
import { Link } from 'react-router-dom';
import UiInput from '../../components/common/ui/UiInput';
import UiLargeArrowButton from '../../components/common/ui/UiLargeArrowButton';

const Register = () => {
    return (
        <div className="w-[550px] mx-auto py-4 shadow-lg shadow-slate-300 m-4 p-3">
        <div className="pb-6 text-center">
          <h3 className="text-5xl text-primary-8">Sign Up</h3>
          {/* <p>{t("personal_details")}</p> */}
        </div>
        <form onSubmit={" "} className="p-4 w-full">
          <UiInput
            label="name"
            type="text"
            name="name"
            // placeholder={t("enter_name_place")}
            // onChange={handleChange}
          ></UiInput>
          <div className="flex flex-wrap gap-8">
            <UiInput
              label="Phone Number"
              type="text"
              name="phone"
              // placeholder={t("enter_email_place")}
            //   onChange={handleChange}
            ></UiInput>
            <UiInput
              label="Email (must be a business email)"
              type="email"
              name="email"
              // placeholder={t("enter_phone_place")}
            //   onChange={handleChange}
            ></UiInput>
          </div>
          <div className="flex flex-wrap gap-8">
            <UiInput
              label="Strong password"
              type="password"
              name="password"
              // placeholder={t("register_password_place")}
            //   onChange={handleChange}
            ></UiInput>


            <UiInput
              label="Re-type your password"
              type="password"
              name="confirm_password"
              // placeholder={t("password_place")}
            //   onChange={handleChange}
            ></UiInput>
          </div>

          <div className="text-center my-8">
            <Link to="/verification">
              <UiLargeArrowButton label="next" />
            </Link>
          </div>
        </form>
        <div className="text-center">
          <p className="py-2 text-gray-500 font-semibold">
            Already Have an account?
            <Link to="/login">
              <span className="underline"> login</span>
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;