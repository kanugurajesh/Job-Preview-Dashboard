import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div>
      <div>
        <div className="w-[633px] h-[98px] ml-[100px] mt-[36px]">
          <div className="flex items-center gap-[12px]">
            <h1 className="font-semibold text-[35px] text-[#3D3D3D]">Senior Product Designer</h1>
            <div className="w-[4px] h-[4px] bg-[#D1D1D1] rounded-full"></div>
            <p className="text-[#888888] font-medium text-[14px]">posted 2 days ago</p>
            <div className="w-[57px] h-[22px] py-[2px] pl-[6px] pr-[8px] flex gap-[4px] items-center bg-[#ECFDF3] rounded-[9999px] border-[1px] border-[#ABEFC6]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#17B26A]"></div>
              <p className="text-[12px] font-medium text-[#067647]">Open</p>
            </div>
          </div>
          <div className="py-[12px]"></div>
          <div className="w-[390px] h-[27px] flex gap-[16px] text-[20px] font-medium text-[#5D5D5D] items-center">
            <div className="flex gap-[8px]">
              <Image src="/marker-pin.svg" alt="" width={24} height={24} />
              <p>Delware, USA</p>
            </div>
            <div className="w-[4px] h-[4px] bg-[#D1D1D1] rounded-full"></div>
            <div className="flex gap-[12px]">
              <Image src="/coins-stacked.svg" alt="" width={24} height={24} />
              <p>$300k-$400k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
