import React from 'react';

const FixedUi = () => {
  return (
    <div
      className="relative py-20 w-full font-Lora flex flex-col md:flex-row items-center justify-center md:gap-20 px-4"
      style={{
        backgroundImage: "url('/assets/image/dog bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content Wrapper */}

      <div className='absolute z-10 w-full h-full bg-black/60'>

      </div>
      <div className="relative md:px-10 z-10 w-full ">
        <div className="flex items-center w-full  ">
          <div>
            <h1 className="md:text-[6rem] text-[3.5rem] leading-none">
              <span className="text-[#BEFD95] underline decoration-[#BEFD95] underline-offset-4">
                Every animal deserves a loving home,
              </span>
              <span className="text-white"> and our shelter charity is making that a reality.</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedUi;
