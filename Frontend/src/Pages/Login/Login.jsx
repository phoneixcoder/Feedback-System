import React, { useState, useEffect } from "react";
import InputField from "../../Components/InputField/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Gradiant from "../../assests/Signup/gradiant.png";
import Fun from "../../assests/Signup/fun.png";
import Blob from "../../assests/Signup/blob.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [time, setTime] = useState(120);
  const [active, setActive] = useState(1);

  const navigate = useNavigate();
  useEffect(() => {
    if (active === 2) {
      const timer = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          clearInterval(timer);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [time, active]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const formikUserDetails = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email address.")
        .required("Email is required."),
      password: Yup.string()
        .min(10, "Password must be at least 10 characters.")
        .required("Password is required."),
    }),
    onSubmit: async () => {
      try {
        console.log("Now Enter OTP");
        setActive(2);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const formikOtp = useFormik({
    initialValues: {
      OTP: "",
    },
    validationSchema: Yup.object({
      OTP: Yup.number()
        .typeError("That doesn't look like an OTP!")
        .positive("OTP can't start have a minus.")
        .integer("OTP can't include a decimal point.")
        .min(6)
        .required("An OTP varification is required."),
    }),
    onSubmit: async () => {
      try {
        console.log(formikOtp.values);
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return (
    <div className="flex w-full flex-row h-[100vh]">
      <div
        className="flex w-1/2 h-full items-end flex-col justify-center"
        style={{ backgroundImage: `url(${Gradiant})` }}
      >
        <div className="flex w-[70%] h-[85%] bg-white bg-opacity-30 rounded-tl-3xl rounded-bl-3xl relative">
          <div className="flex flex-col ml-8">
            <h1 className="text-white text-[70px] font-bold">Missing You</h1>
            <h2 className="text-white text-2xl z-20">
              Your feedbacks are truly valueable for us.
            </h2>
          </div>
          <img
            src={Fun}
            alt=""
            className="absolute bottom-0 -right-[24%] z-10"
          />
        </div>
      </div>
      <div className="flex w-1/2 h-full items-start flex-col justify-center relative">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(${Blob}`,
            backgroundSize: "105% 105%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {active === 1 ? (
          <form
            className="flex flex-col w-[70%] h-[85%] bg-[#F6F4FF] items-center rounded-tr-3xl rounded-br-3xl relative py-[24px]"
            onSubmit={formikUserDetails.handleSubmit}
          >
            <h1 className="text-black text-[32px] font-medium">
              Welcome Back Captain
            </h1>
            <div className="w-[65%] mt-6">
              <h2 className="text-[16px] font-medium">Email</h2>
              <InputField
                type="text"
                {...formikUserDetails.getFieldProps("email")}
                error={formikUserDetails.errors.email}
                cls={"w-full"}
              />
            </div>
            <div className="w-[65%] mt-6">
              <h2 className="text-[16px] font-medium">Password</h2>
              <InputField
                type="text"
                {...formikUserDetails.getFieldProps("password")}
                error={formikUserDetails.errors.password}
                cls={"w-full"}
              />
            </div>
            <button
              className="w-[50%] bg-[#CB4C96]  text-white font-medium text-base rounded-[12px] py-3 mt-6"
              type="submit"
            >
              Login
            </button>
            <p className="my-4">or</p>
            <p className="text-base font-medium">
              Don't Have An Account?{" "}
              <span className="text-[#CB4C96]">
                <Link to="/register">Sign Up</Link>
              </span>
            </p>
          </form>
        ) : (
          <form
            className="flex flex-col w-[70%] h-[85%] bg-[#F6F4FF] items-center rounded-tl-3xl rounded-bl-3xl relative py-[24px]"
            onSubmit={formikOtp.handleSubmit}
          >
            <h1 className="text-black text-[32px] font-medium">
              Create An Account
            </h1>
            <div className="w-[65%] mt-6">
              <h2 className="text-[16px] font-medium">Enter OTP</h2>
              <InputField
                type="text"
                {...formikOtp.getFieldProps("OTP")}
                error={formikOtp.errors.OTP}
                cls={"w-full"}
              />
            </div>
            <button
              className="w-[50%] bg-[#CB4C96]  text-white font-medium text-base rounded-[12px] py-3 mt-6"
              type="submit"
            >
              Submit OTP
            </button>
            <p className="font-semibold italic text-red-500 mt-4">
              {time !== 0 ? (
                `Resend In ${formatTime(time)}`
              ) : (
                <button
                  className=" font-semibold italic text-green-500"
                  onClick={() => {
                    setTime(120);
                    alert("The OTP has been sent again.");
                  }}
                >
                  Resent OTP
                </button>
              )}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
