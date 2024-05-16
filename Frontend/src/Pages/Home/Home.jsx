import React from "react";
import Card from "../../Components/Cards/Card";

const Home = () => {
  const tabs = [
    {
      heading: "Total Feedbacks",
      count: 100,
    },
    {
      heading: "Course Feedbacks",
      count: 43,
    },
    {
      heading: "Teacher Feedbacks",
      count: 32,
    },
    {
      heading: "Department Feedbacks",
      count: 18,
    },
    {
      heading: "Placement Feedbacks",
      count: 7,
    },
  ];
  return (
    <div className="w-full px-4 py-4 flex flex-col">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex w-full justify-between items-center mt-5">
        {tabs.map((tab, index) => {
          return (
            <Card heading={tab.heading} count={tab.count} width={"w-[195px]"} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
