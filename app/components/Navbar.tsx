import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[109px] px-[32px] py-[24px] flex">
      <div className="w-[100px] h-[61px] bg-[#E7E7E7] px-[28px] py-[9px] text-[#DC4A2D] font-bold flex items-center justify-center">
        Logo
      </div>
      <div className="w-[1430px] flex items-center justify-center">
        <div className="w-[538px] h-[74px] border-2 border-[#D1D1D1] rounded-[36px] ">
          <div className="px-[109px] py-[58px]">
            <div className="w-[79px] h-[27px]">
              <Image src="" alt="" />
              <p>Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
