"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [num, setNum] = useState(2);
  return (
    <div className="h-[109px] px-[32px] py-[24px] flex">
      <div className="w-[100px] h-[61px] bg-[#E7E7E7] px-[28px] py-[9px] text-[#DC4A2D] font-bold flex items-center justify-center text-[20px]">
        Logo
      </div>
      <div className="w-[1430px] flex items-center justify-center">
        <div className="w-[538px] h-[74px] border-2 border-[#D1D1D1] rounded-[36px] flex items-center justify-between p-[8px] font-medium">
          <div className={`h-[58px] flex items-center justify-center border-4 rounded-[49px] cursor-pointer transition-all ease-in-out duration-300 ${num == 0 ? "bg-[#DC4A2D] border-[#FCB4A5] ":"border-white"}`} onClick={() => setNum(0)}>
            <div className={`h-[27px] flex gap-[8px] items-center justify-center p-[15px] py-[15.5px] ${num == 0 ? "text-white": "text-[#B0B0B0]"}`}>
              <Image src={num == 0 ? "/briefcase-white.svg" : "/briefcase.svg"} alt="" width={24} height={24} />
              <p className="text-[20px]">Jobs</p>
            </div>
          </div>
          <div className={`h-[58px] flex items-center justify-center border-4 rounded-[49px] transition-all ease-in-out duration-300 ${num == 1 ? "bg-[#DC4A2D] border-[#FCB4A5]":"border-white"}`} onClick={() => setNum(1)}>
            <div className={`h-[27px] flex gap-[8px] items-center justify-center cursor-pointer p-[15px] py-[15.5px] relative ${num == 1 ? "text-white": "text-[#B0B0B0] "}`}>
              <Image src={num == 1 ? "/message-square-white.svg" : "/message-square.svg"} alt="" width={24} height={24} />
              <div className={`absolute w-[6px] h-[6px] bg-[#DC4A2D] rounded-full top-[3px] left-[34px] ${num == 1 && "hidden"}`}></div>
              <p className="text-[20px]">Messages</p>
            </div>
          </div>
          <div className={`h-[58px] flex items-center justify-center border-4 rounded-[49px] transition-all ease-in-out duration-300 ${num == 2 ? "bg-[#DC4A2D] border-[#FCB4A5]":"border-white"}`} onClick={() => setNum(2)}>
          <div className={`h-[27px] flex gap-[8px] items-center justify-center cursor-pointer p-[15px] py-[15.5px] relative ${num == 2 ? "text-white": "text-[#B0B0B0] "}`}>
              <Image src={num == 2 ? "/coins-hand-white.svg" : "/coins-hand.svg"} alt="" width={28} height={28} />
              <p className="text-[20px]">Payments</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[134px] h-[60px] flex items-center gap-[16px] p-[10px] relative">
        <Image src="/bell.svg" width={32} height={32} alt="" />
        <div className="absolute w-[6px] h-[6px] rounded-full bg-[#DC4A2D] top-3 left-7"></div>
        <div className="flex items-center justify-center gap-[6px]">
          <Image src="/Atlassian.svg" width={40} height={40} alt="" />
          <Image src="/chevron.svg" width={20} height={20} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
