import React from "react";
import Logo from "../../assests/logo.svg";
import Dashboard from "../../assests/dashboard.svg";
import Feedback from "../../assests/feedback.svg";
import Register from "../../assests/register.svg";
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
  return (
    <div className="flex w-full h-full">
      <div className="w-[14%] border border-r-2 h-[100vh] flex flex-col items-center py-[24px]">
        <div className="flex gap-4 items-center">
          <img src={Logo} alt="Logo" />
          <h2 className="text-textColor font-medium text-[14px]">
            Feedback System
          </h2>
        </div>
      </div>
      <div className="flex w-[68%] flex-col">
        <div className="flex justify-between px-8 w-[100%] border border-b-2 h-[70px]">
          <div className="flex gap-4 items-center">
            <img src={Dashboard} alt="" />
            <h2 className="text-textColor opacity-40 text-sm font-normal">
              Dashboards
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-thirdColor text-textColor w-[130px] h-10 rounded-lg">
              Logout
            </button>
          </div>
        </div>
        {props.children}
      </div>
      <div className="flex w-[18%] border border-l-2 h-[100vh] flex-col items-center py-[24px]">
        <div className="flex flex-col w-[80%]">
          <h2 className="text-sm font-medium text-textColor mb-[24px]">
            Notifications
          </h2>
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
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <div>
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
