import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className="w-[calc(100%-409px)]">
      <div className="w-full">
        <div className="w-[633px] h-[98px] ml-[100px] my-[36px]">
          <div className="flex items-center gap-[12px]">
            <h1 className="font-semibold text-[35px] text-[#3D3D3D]">
              Senior Product Designer
            </h1>
            <div className="w-[4px] h-[4px] bg-[#D1D1D1] rounded-full"></div>
            <p className="text-[#888888] font-medium text-[14px]">
              posted 2 days ago
            </p>
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
      <hr className={`h-[1px] bg-[#E7E7E7]`} />
      <div>
        <div className="w-[872px] h-[115px] flex gap-[64px] ml-[100px] my-[29px]">
          <div className="w-[170px] h-[115px] flex gap-[8px] flex-col">
            <div>
              <p className="text-[#6E6D6D] font-medium text-[14px]">
                Skills Required
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="w-[66px] h-[24px] px-[6px] py-[4px] flex gap-[4px] border-[1px] border-[#D0D5DD] rounded-[6px] items-center justify-center">
                <Image src="/Figma.svg" alt="Figma" width={16} height={16} />
                <p className="text-[12px] font-medium text-[#344054]">Figma</p>
              </div>
              <div className="w-[130.41px] h-[24px] rounded-[6px] border-[1px] border-[#D0D5DD] px-[6px] py-[4px] flex gap-[4px] items-center justify-center">
                <Image
                  src="/Ai.svg"
                  alt="Adobe lllustrator"
                  width={16.41}
                  height={16}
                />
                <p className="text-[12px] font-medium text-[#344054]">
                  Adobe lllustrator
                </p>
              </div>
              <div className="w-[92.41px] h-[24px] flex gap-[4px] border-[1px] border-[#D0D5DD] px-[6px] py-[4px] rounded-[6px] items-center justify-center">
                <Image
                  src="/Adobe.svg"
                  alt="Adobe XD"
                  width={16.41}
                  height={16}
                />
                <p className="text-[12px] font-medium text-[#344054]">
                  Adobe XD
                </p>
              </div>
            </div>
          </div>
          <div className="w-[170px] h-[49px] flex flex-col gap-[8px]">
            <p className="text-[#6E6D6D] text-[14px] font-medium">Preferred Language</p>
            <p className="text-[#3D3D3D] font-semibold text-[16px]">English</p>
          </div>
          <div className="w-[170px] h-[49px] flex flex-col gap-[8px]">
            <p className="text-[#6E6D6D] text-[14px] font-medium">Type</p>
            <p className="text-[#3D3D3D] font-semibold text-[16px]">Full Time</p>
          </div>
          <div className="w-[183px] h-[49px] flex flex-col gap-[8px]">
            <p className="text-[#6E6D6D] text-[14px] font-medium">Years of Experience</p>
            <p className="text-[#3D3D3D] font-semibold text-[16px]">3+ Years of Experience</p>
          </div>
        </div>
      </div>
      <hr className={`h-[1px] bg-[#E7E7E7]`} />
      <div>
        <div className="ml-[100px] my-[29px] flex flex-col">
          <p className="text-[14px] font-medium  mb-[8px]">About the job</p>
          <ol className="list-decimal text-[16px] font-medium text-[#3D3D3D] leading-6 ml-4">
            <li>Handle the UI/UX research design</li>
            <li>Work on researching on latest web applications designs & trends</li>
            <li>Work on conceptualizing and visualizing</li>
            <li>Work on creating graphics content and other graphic related works</li>
          </ol>
          <p>Benefits</p>
          <ul className="list-disc ml-4">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
          <p>Schedule:</p>
          <ul className="list-disc ml-4">
            <li>Day Shift</li>
          </ul>
          <p>Supplemental pay types</p>
          <ul className="list-disc ml-4">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <p>Work Location: In person</p>
        </div>
      </div>
      <hr className={`h-[1px] bg-[#E7E7E7]`} />
      <div>
        <div className="w-[736px] h-[271px] ml-[100px] my-[29px] flex flex-col gap-[16px]">
          <div className="flex gap-[12px] p-[10px] pl-0">
            <Image src="/Atlassian2.svg" alt="Atlassian" width={40} height={40} />
            <p className="text-medium text-[20px] text-[#4F4F4F]">Atlassian</p>
          </div>
          <div className="w-full flex gap-[24px] flex-col">
            <div className="flex gap-[48px]">
              <div className="w-[344px] h-[49px]">
                <p className="text-[#6E6D6D] text-[14px] text-medium">Company size</p>
                <p className="text-[#3D3D3D] text-[16px] text-medium">1k-2k Employees</p>
              </div>
              <div className="w-[344px] h-[49px]">
                <p className="text-[#6E6D6D] text-[14px] text-medium">Type</p>
                <p className="text-[#3D3D3D] text-[16px] text-medium">Private</p>
              </div>
            </div>
            <div className="flex gap-[48px]">
              <div className="w-[344px] h-[49px]">
                <p className="text-[#6E6D6D] text-[14px] text-medium">Sector</p>
                <p className="text-[#3D3D3D] text-[16px] text-medium">Information Technolgy, Infrastructure</p>
              </div>
              <div className="w-[344px] h-[49px]">
                <p className="text-[#6E6D6D] text-[14px] text-medium">Funding</p>
                <p className="text-[#3D3D3D] text-[16px] text-medium">Bootstraped</p>
              </div>
            </div>
            <div className="flex gap-[48px]">
              <div className="w-[344px] h-[49px]">
                <p className="text-[#6E6D6D] text-[14px] text-medium">Founded in</p>
                <p className="text-[#3D3D3D] text-[16px] text-medium">2019</p>
              </div>
              <div className="w-[344px] h-[49px]">
                <p className="text-[#6E6D6D] text-[14px] text-medium">Founded By</p>
                <p className="text-[#3D3D3D] text-[16px] text-medium">Scott Farquhar, Mike Cannon-Brookes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
