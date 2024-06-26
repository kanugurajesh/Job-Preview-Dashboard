import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="w-[409px] flex pt-[30px] px-[24.5px] border-l-[1px] border-[#E7E7E7] bg-[#FCFCFC]">
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
          <div className="w-[336px] h-[42px] flex items-center justify-between">
            <div className="w-[135px] h-[42px] flex p-[10px] gap-[10px] items-center">
              <Image src="/users.svg" alt="user" width={20} height={20} />
              <p className="font-medium text-[16px] text-[#4F4F4F]">Applicants</p>
            </div>
            <p className="text-[20px] font-semibold px-[10px] py-[6px] text-[#3D3D3D]">400</p>
          </div>
          <hr className="solid h-[1px] my-[16px]" />
          <div className="w-[336px] h-[42px] flex items-center justify-between">
            <div className="w-[135px] h-[42px] flex p-[10px] gap-[10px] items-center">
              <Image src="/user-check.svg" alt="user" width={20} height={20} />
              <p className="font-medium text-[16px] text-[#4F4F4F]">Matches</p>
            </div>
            <p className="text-[20px] font-semibold px-[10px] py-[6px] text-[#3D3D3D]">100</p>
          </div>
          <hr className="solid h-[1px] my-[16px]" />
          <div className="w-[336px] h-[42px] flex items-center justify-between">
            <div className="w-[135px] h-[42px] flex p-[10px] gap-[10px] items-center">
              <Image src="/message-square-01.svg" alt="user" width={20} height={20} />
              <p className="font-medium text-[16px] text-[#4F4F4F]">Messages</p>
            </div>
            <p className="text-[20px] font-semibold px-[10px] py-[6px] text-[#3D3D3D]">147</p>
          </div>
          <hr className="solid h-[1px] my-[16px]" />
          <div className="w-[336px] h-[42px] flex items-center justify-between">
            <div className="w-[135px] h-[42px] flex p-[10px] gap-[10px] items-center">
              <Image src="/eye.svg" alt="user" width={20} height={20} />
              <p className="font-medium text-[16px] text-[#4F4F4F]">Views</p>
            </div>
            <p className="text-[20px] font-semibold px-[10px] py-[6px] text-[#3D3D3D]">800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
