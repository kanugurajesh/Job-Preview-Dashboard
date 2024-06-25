import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="w-[409px] flex items-center pt-[30px]">
      <div className="w-[360px] h-[361px] flex flex-col gap-[24px]">
        <div className="flex gap-[16px]">
          <button className="w-[172px] h-[46px] px-[24px] py-[12px] bg-[#FEF4F2] border-[0.8px] flex gap-[10px] items-center justify-center border-[#DC4A2D] rounded-[8px]">
            <Image src="/delete.svg" alt="delete" width={20} height={20} />
            <p className="font-medium text-[16px] text-[#DC4A2D]">Delete job</p>
          </button>
          <button className="w-[172px] h-[46px] px-[24px] py-[12px] bg-[#DC4A2D] border-[2px] flex gap-[10px] items-center justify-center border-[#FED3CA] rounded-[8px]">
            <Image src="/edit.svg" alt="edit" width={16} height={16} />
            <p className="font-medium text-[16px] text-white">Edit job</p>
          </button>
        </div>
        <div className="p-[12px]">

        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
