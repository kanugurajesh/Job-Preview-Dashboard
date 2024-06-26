"use client";

import { useState } from "react";

const List = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="h-[67px] border-[1px] border-[#E7E7E7] border-b-[2px] flex items-center pl-[100px] text-[20px]">
      <ul className="w-[590px] h-[27px] flex justify-between text-[#888888] relative">
        <li
          onClick={() => setActiveTab(0)}
          className={`cursor-pointer transition-all ease-in-out duration-300 ${
            activeTab == 0 ? "font-semibold text-[#DC4A2D]" : "font-medium"
          }`}
        >
          Job Preview
        </li>
        <li
          onClick={() => setActiveTab(1)}
          className={`cursor-pointer transition-all ease-in-out duration-300 ${
            activeTab == 1 ? "font-semibold text-[#DC4A2D]" : "font-medium"
          }`}
        >
          Applicants
        </li>
        <li
          onClick={() => setActiveTab(2)}
          className={`cursor-pointer transition-all ease-in-out duration-300 ${
            activeTab == 2 ? "font-semibold text-[#DC4A2D]" : "font-medium"
          }`}
        >
          Match
        </li>
        <li
          onClick={() => setActiveTab(3)}
          className={`cursor-pointer transition-all ease-in-out duration-300 ${
            activeTab == 3 ? "font-semibold text-[#DC4A2D]" : "font-medium"
          }`}
        >
          Messages
        </li>
        <div className={`w-[65px] h-[2px] bg-[#DC4A2D] absolute top-[44px] transition-all ease-in-out duration-300 ${activeTab == 0 && "left-6" || activeTab == 1 && "left-[207px]" || activeTab == 2 && "left-[358px]" || activeTab == 3 && "left-[510px]"}`}></div>
      </ul>
    </div>
  );
};

export default List;