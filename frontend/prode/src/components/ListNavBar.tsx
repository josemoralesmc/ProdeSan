'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";

const ListNavBar = () => {
  const [activeTab, setActiveTab] = useState("Results");

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };
  return (
    <div className="flex justify-evenly w-56 rounded-full bg-white/75 overflow-hidden">
      <Tab
        tabName="Results"
        isActive={activeTab === "Results"}
        onClick={handleTabClick}
      />
      <Tab
        tabName="Groups"
        isActive={activeTab === "Groups"}
        onClick={handleTabClick}
      />
      <Tab
        tabName="Home"
        isActive={activeTab === "Home"}
        onClick={handleTabClick}
      />
      <div
        className="absolute bg-blue-500/75 rounded-full transition-transform duration-300"
        style={{
          width: "75px",
          height: "100%",
          transform: `translateX(${
            activeTab === "Results"
              ? "-95%"
              : activeTab === "Groups"
              ? "7%"
              : "97%"
          })`,
        }}
      ></div>
    </div>
  );
};

const Tab = ({ tabName, isActive, onClick }: any) => {
  return (
    <div
      className={`cursor-pointer p-2 z-10 ${
        isActive ? "text-white" : "text-black"
      }`}
      onClick={() => onClick(tabName)}
    >
      <Link href={`${tabName.toLowerCase()}`}>{tabName}</Link>
    </div>
  );
};

export default ListNavBar;
