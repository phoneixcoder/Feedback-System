import React, { useState, useEffect } from "react";
import InputField from "../../Components/InputField/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Gradiant from "../../assests/Signup/gradiant.png";
import Fun from "../../assests/Signup/fun.png";
import Blob from "../../assests/Signup/blob.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/Actions/Auth/authAction";
import axios from "axios";
const Signup = () => {
  const [active, setActive] = useState(1);
  const [time, setTime] = useState(120);
  const navigate = useNavigate();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        // Timer has reached 0, you can add your logic here
        clearInterval(timer);
      }
    }, 1000); // Update the timer every second

    return () => {
      clearInterval(timer); // Cleanup when the component unmounts
    };
  }, [time]);

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
      confirmPassword: "",
      name: "",
      role: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      password: Yup.string()
        .min(10, "Password must be at least 10 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
      name: Yup.string().required("Name is required"),
      role: Yup.string().required("Role is required"),
      // phoneNumber: Yup.number()
      //   .typeError("That doesn't look like a Mobile number")
      //   .positive("A Mobile number can't start with a minus")
      //   .integer("A Mobile number can't include a decimal point")
      //   .min(10)
      //   .required("A Mobile number is required"),
      // registrationNumber: Yup.number()
      //   .typeError("That doesn't look like a Registration number")
      //   .positive("A Registration number can't start with a minus")
      //   .integer("A Registration number can't include a decimal point")
      //   .required("A Registration number is required"),
    }),
    onSubmit: async () => {
      try {
        const apiUrl = `http://localhost:4000/auth/register`;
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "tilak",
          // mode: 'no-cors
        };

        const response = await fetch(apiUrl, requestOptions);

        if (!response.ok) {
          const errorMessage = await response.json();
          return rejectWithValue(errorMessage.message);
        }
        return response.json();
        // setActive(2);
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
        setActive(3);
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  const formikUserDetails2 = useFormik({
    initialValues: {
      phoneNumber: "",
      registrationNumber: "",
      collegeEmail: "",
      campus: "",
      branch: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.number()
        .typeError("That doesn't look like a Mobile number.")
        .positive("A Mobile number can't start with a minus.")
        .integer("A Mobile number can't include a decimal point.")
        .required("A Mobile number is required.")
        .min(10),
      registrationNumber: Yup.string()
        .matches(
          /^[A-Za-z]{3}\d{2}[A-Za-z]{2}\d{3}$/,
          "Registration number must be in the format PCE20IT057"
        )
        .required("A Registration number is required.")
        .min(8),
      collegeEmail: Yup.string()
        .required("College Email is required")
        .matches(
          /@poornima\.org$/,
          "Email must be in the format example@poornima.org."
        ),
      campus: Yup.string().required("Campus is required."),
      branch: Yup.string().required("Branch is required."),
    }),
    onSubmit: async () => {
      try {
        console.log(formikUserDetails2.values);
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return (
    <>
      <div className="flex w-full flex-row h-[100vh]">
        <div className="flex w-1/2 h-full items-end flex-col justify-center relative">
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage: `url(${Blob}`,
              backgroundSize: "105% 105%",
              backgroundRepeat: "no-repeat",
              transform: "scaleX(-1)",
            }}
          ></div>
          {active === 1 ? (
            <form
              className="flex flex-col w-[70%] h-[85%] bg-[#F6F4FF] items-center rounded-tl-3xl rounded-bl-3xl relative py-[24px]"
              onSubmit={formikUserDetails.handleSubmit}
            >
              <h1 className="text-black text-[32px] font-medium">
                Create An Account
              </h1>
              <div className="w-[65%] mt-6 flex justify-between">
                <div className="flex flex-col w-1/2">
                  <h2 className="text-[16px] font-medium">Full Name</h2>
                  <InputField
                    type="text"
                    {...formikUserDetails.getFieldProps("name")}
                    error={formikUserDetails.errors.name}
                    cls={"w-full"}
                  />
                </div>
                <div className="flex flex-col w-[45%]">
                  <h2 className="text-[16px] font-medium">You're</h2>
                  <select
                    id="campus"
                    name="campus"
                    className="py-[8px] px-[20px] rounded-xl h-10 focus:outline-none w-full text-sm"
                    {...formikUserDetails.getFieldProps("role")}
                  >
                    <option value="student" label="Student" />
                    <option value="faculty" label="Faculty" />
                    <option value="parent" label="Parent" />
                  </select>
                  {
                    <p className="text-red-500 text-sm">
                      {formikUserDetails.errors.role}
                    </p>
                  }
                </div>
              </div>
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
              <div className="w-[65%] mt-6">
                <h2 className="text-[16px] font-medium">Confirm Password</h2>
                <InputField
                  type="text"
                  {...formikUserDetails.getFieldProps("confirmPassword")}
                  error={formikUserDetails.errors.confirmPassword}
                  cls={"w-full"}
                />
              </div>
              <button
                className="w-[50%] bg-[#CB4C96]  text-white font-medium text-base rounded-[12px] py-3 mt-6"
                type="submit"
              >
                Sign Up Here
              </button>
              <p className="my-4">or</p>
              <p className="text-base font-medium">
                Already Have An Account?{" "}
                <span className="text-[#CB4C96]">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
          ) : active === 2 ? (
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
          ) : (
            <form
              className="flex flex-col w-[70%] h-[85%] bg-[#F6F4FF] items-center rounded-tl-3xl rounded-bl-3xl relative py-[24px]"
              onSubmit={formikUserDetails2.handleSubmit}
            >
              <h1 className="text-black text-[32px] font-medium">
                Please fill these details!
              </h1>
              <div className="w-[65%] mt-6">
                <h2 className="text-[16px] font-medium">Phone Number</h2>
                <InputField
                  type="number"
                  {...formikUserDetails2.getFieldProps("phoneNumber")}
                  error={formikUserDetails2.errors.phoneNumber}
                  cls={"w-full"}
                />
              </div>
              <div className="w-[65%] mt-6">
                <h2 className="text-[16px] font-medium">Registration Number</h2>
                <InputField
                  type="text"
                  {...formikUserDetails2.getFieldProps("registrationNumber")}
                  error={formikUserDetails2.errors.registrationNumber}
                  cls={"w-full"}
                />
              </div>
              <div className="w-[65%] mt-6">
                <h2 className="text-[16px] font-medium">College Email</h2>
                <InputField
                  type="text"
                  {...formikUserDetails2.getFieldProps("collegeEmail")}
                  error={formikUserDetails2.errors.collegeEmail}
                  cls={"w-full"}
                />
              </div>
              <div className="w-[65%] mt-6">
                <div className="flex w-full justify-between">
                  <div className="w-[50%]">
                    <h2 className="text-[16px] font-medium">Campus</h2>
                    <select
                      id="campus"
                      name="campus"
                      className="py-[8px] px-[20px] focus:outline-none w-full text-sm"
                      {...formikUserDetails2.getFieldProps("campus")}
                    >
                      <option value="" label="Select Campus" />
                      <option
                        value="pce"
                        label="Poornima College Of Engineering"
                      />
                      <option
                        value="piet"
                        label="Poornima Institute of Engineering and Technology"
                      />
                      <option value="pu" label="Poornima University" />
                    </select>
                    {
                      <p className="text-red-500 text-sm">
                        {formikUserDetails2.errors.campus}
                      </p>
                    }
                  </div>
                  <div className="w-[45%]">
                    <h2 className="text-[16px] font-medium">Branch</h2>
                    <select
                      id="campus"
                      name="campus"
                      className="py-[8px] px-[20px] focus:outline-none w-full text-sm"
                      {...formikUserDetails2.getFieldProps("branch")}
                    >
                      <option value="" label="Select Campus" />
                      <option value="it" label="Information Technology" />
                      <option value="cs" label="Computer Science" />
                      <option value="me" label="Machenical Engineering" />
                      <option value="eee" label="Electrical Engineering" />
                      <option value="ece" label="Electronics Engineering" />
                      <option value="ce" label="Civil Engineering" />
                    </select>
                    {
                      <p className="text-red-500 text-sm">
                        {formikUserDetails2.errors.branch}
                      </p>
                    }
                  </div>
                </div>
              </div>
              <button
                className="w-[50%] bg-[#CB4C96]  text-white font-medium text-base rounded-[12px] py-3 mt-6"
                type="submit"
              >
                {"Continue Here --->"}
              </button>
            </form>
          )}
        </div>
        <div
          className="flex w-1/2 h-full items-start flex-col justify-center"
          style={{ backgroundImage: `url(${Gradiant})` }}
        >
          <div className="flex w-[70%] h-[85%] bg-white bg-opacity-30 rounded-tr-3xl rounded-br-3xl relative">
            <div className="flex flex-col ml-8">
              <h1 className="text-white text-[70px] font-bold">Join Us</h1>
              <h2 className="text-white text-2xl">
                Let’s make your dream in reality
              </h2>
            </div>
            <img
              src={Fun}
              alt=""
              className="absolute bottom-0 -left-[24%] z-10"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
