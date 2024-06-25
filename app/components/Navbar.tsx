import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[109px] px-[32px] py-[24px] flex">
      <div className="w-[100px] h-[61px] bg-[#E7E7E7] px-[28px] py-[9px] text-[#DC4A2D] font-bold flex items-center justify-center">
        Logo
      </div>
      <div className="w-[1430px] flex items-center justify-center">
        <div className="w-[538px] h-[74px] border-2 border-[#D1D1D1] rounded-[36px] flex items-center justify-around">
          <div className="h-[27px] text-[#B0B0B0] flex gap-[8px] items-center justify-center py-[1.5px]">
            <Image src="/briefcase.svg" alt="" width={24} height={24} />
            <p className="text-lg">Jobs</p>
          </div>
          <div className="h-[27px] text-[#B0B0B0] flex gap-[8px] items-center justify-center py-[1.5px] relative">
            <Image src="/message-square.svg" alt="" width={24} height={24} />
            <div className="absolute w-[6px] h-[6px] bg-[#DC4A2D] rounded-full top-[1px] left-[18px]"></div>
            <p className="text-lg">Messages</p>
          </div>
          <div className="h-[27px] text-[#B0B0B0] flex gap-[8px] items-center justify-center py-[1.5px]">
            <Image src="/coins-hand.svg" alt="" width={28} height={28} />
            <p className="text-lg">Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
