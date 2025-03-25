import React from "react";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <div className="bg-[#072724] w-full h-full overflow-hidden p-5 relative flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 grid place-items-center w-full h-full">
                <img
                    src="/assets/image/overlay.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Content */}
            <div className="relative  py-24 text-white text-center">
                <div className="max-w-4xl space-y-3">
                    <h1 className="text-xl text-[#D89D55] font-bold">Rescue, Rehabilitate, Rehome</h1>
                    <h2 className="text-7xl font-bold mt-2">Making a Difference in Animal Lives</h2>
                    <span className="mt-4 text-lg">
                        At our shelter charity, we believe that compassion has the power to
                        change lives. Every animal deserves a loving home, and our shelter
                        charity is committed to making that a reality.
                    </span>
                    <div className="mt-6 w-full grid place-items-center">
                        <Button item={"Donate Now"} />
                    </div>
                </div>
                <div className="w-full pt-12 h-full">
                    <img src="/assets/image/heroimage-removebg-preview.png" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
