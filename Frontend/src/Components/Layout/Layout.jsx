import React, { useState, useEffect } from "react";
import Logo from "../../assests/logo.svg";
import Dashboard from "../../assests/dashboard.svg";
import Feedback from "../../assests/feedback.svg";
import Register from "../../assests/register.svg";
import All from "../../assests/icons/all.svg";
import Tutor from "../../assests/icons/tutor.svg";
import notificationicon from "../../assests/icons/notification.svg";

const Layout = (props) => {
  const notification = [
    {
      type: "feedback",
      comment: "You need to fix that bug asap!",
      time: "Just now",
    },
    {
      type: "register",
      comment: "New user registered",
      time: "2 hours ago",
    },
    {
      type: "feedback",
      comment: "You need to fix that bug asap!",
      time: "5 hours ago",
    },
    {
      type: "feedback",
      comment: "You need to fix that bug asap!",
      time: "Today, 11:59 AM",
    },
  ];
  const [path, setpath] = useState(window.location.pathname);
  const [active, setActive] = useState(0);
  useEffect(() => {
    setpath(window.location.pathname);
  }, [window.location.pathname]);
  const navigationOptionsStudent = [
    {
      id: 1,
      name: "Overview",
      img: All,
    },
    {
      id: 2,
      name: "Teacher Interaction",
      img: Tutor,
    },
    {
      id: 3,
      name: "Subject Feedback",
      img: All,
      link: "/feedback/course"
    },
    {
      id: 4,
      name: "Department Feedback",
      img: All,
    },
  ];

  return (
    <div className="flex w-full h-full bg-white">
      <div
        className={`group ${
          path === "/"
            ? "w-[14%]"
            : "w-[5%] hover:w-[14%] absolute z-10 bg-white"
        } border border-r-2 h-[100vh] flex flex-col items-center py-[24px] px-5 transition-all ease-in-out duration-300 group-hover:duration-800`}
      >
        <div className="flex gap-4 items-center w-full cursor-pointer" onClick={() => {
          window.location.href = '/'
        }}>
          <img
            src={Logo}
            alt="Logo"
            className="h-[50px] transition-all duration-300 ease-in-out"
          />
          <h2
            className={`text-textColor font-medium text-[14px] whitespace-nowrap ${
              path === "/"
                ? "block "
                : "hidden opacity-0 group-hover:block group-hover:opacity-100"
            } `}
          >
            Feedback System
          </h2>
        </div>
        <ul className="flex flex-col w-[95%] gap-3 mt-[28px]">
          <h1
            className={`text-base opacity-40 text-textColor ${
              path === "/"
                ? "block"
                : "hidden group-hover:block duration-300 ease-in-out delay-100"
            } `}
          >
            Dashboard
          </h1>
          {navigationOptionsStudent.map((ele, key) => {
            return (
              <li
                className={`flex relative h-[40px] justify-start cursor-pointer`}
                onClick={() => {
                  setActive(key);
                  window.location.href = ele.link
                }}
                key={key}
              >
                <div
                  className={`w-[5px] h-[80%] top-[4px] left-[2.5px] absolute bg-black rounded-full ${
                    active !== key ? "hidden" : "block"
                  } transition-all duration-300 ease-in-out delay-100`}
                ></div>
                <div
                  className={`opacity-5 bg-black  h-full absolute rounded-xl ${
                    active !== key ? "hidden" : "block"
                  }  
                  ${
                    path === "/"
                      ? "w-[140px]"
                      : "w-[40px] group-hover:w-[140px]"
                  }`}
                ></div>
                <div
                  className={`flex gap-2 items-center w-full ${
                    path === "/"
                      ? "px-3"
                      : "px-0 ml-3 group-hover:px-3 group-hover:ml-0"
                  } `}
                >
                  <img src={ele.img} alt="" className="w-[20px]" />
                  <span
                    className={`text-xs tracking-widest font-medium  ${
                      path === "/"
                        ? "block"
                        : "hidden group-hover:block duration-300 ease-in-out delay-100"
                    } `}
                  >
                    {ele.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`flex flex-col h-[100vh] relative overflow-y-scroll no-scrollbar ${
          path === "/" ? "w-[70%]" : "w-[91%] ml-[5%]"
        }`}
      >
        <div className="flex justify-between px-8 w-[100%] border border-b-2 h-[60px] sticky top-0 left-0 bg-white">
          <div className="flex gap-4 items-center">
            <img src={Dashboard} alt="" />
            <h2 className="text-textColor opacity-40 text-sm font-normal">
              {path === "/"
                ? "Dashboard"
                : path
                    .split("/")
                    .map(
                      (segment) =>
                        segment.charAt(0).toUpperCase() + segment.slice(1)
                    )
                    .join(" / ")
                    .slice(3)}
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-thirdColor text-textColor w-[130px] h-10 rounded-lg">
              Logout
            </button>
          </div>
        </div>
        <div className="h-[90%]">{props.children}</div>
      </div>
      <div
        className={`flex ${
          path === "/" ? "w-[16%]" : "w-[4%] overflow-hidden"
        } border border-l-2 h-[100vh] flex-col items-center py-[24px]`}
      >
        <div className="flex flex-col w-[80%]">
          <div className="flex gap-4 items-center w-full">
            <img
              src={notificationicon}
              alt="Logo"
              className="h-[40px] transition-all duration-300 ease-in-out"
            />
            <h2
              className={`text-textColor font-medium text-[14px] whitespace-nowrap ${
                path === "/"
                  ? "block "
                  : "hidden opacity-0 group-hover:block group-hover:opacity-100"
              } `}
            >
              Notification
            </h2>
          </div>
          {notification.map((item, key) => {
            return (
              <div className="flex flex-col py-[8px]" key={key}>
                <div className="flex gap-3">
                  <div
                    className={`p-[10px] ${
                      key % 2 === 0 ? "bg-primaryColor" : "bg-secondaryColor"
                    } rounded-3xl`}
                  >
                    <img
                      src={item.type === "register" ? Register : Feedback}
                      alt="icon"
                      className={`${path == '/' ? '`w-[24px] h-[24px]' : 'w-[20px] h-[20px]'}`}
                    />
                  </div>
                  <div className={`${path == '/' ? 'block' : 'hidden opacity-0 group-hover:block group-hover:opacity-100'}`}>
                    <p className="text-xs font-normal text-textColor">
                      {item.comment}
                    </p>
                    <p className="text-xs font-normal text-textColor opacity-40">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;
