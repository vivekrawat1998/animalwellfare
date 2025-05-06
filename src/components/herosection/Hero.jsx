import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../ui/Button";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="bg-[#072724] w-full font-Lora h-full overflow-hidden p-5 relative lg:px-48 md:px-20 mx-auto">
            {/* Overlay */}
            <div className="absolute inset-0 grid place-items-center w-full h-full">
                <img
                    src="/assets/image/overlay.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative py-18 text-white flex items-center justify-center text-center">
                <div className="max-w-4xl space-y-3" data-aos="fade-up">
                    <h1 className="md:text-xl text-sm text-[#D89D55] font-bold" data-aos="fade-down">
                        Rescue, Rehabilitate, Rehome
                    </h1>
                    <h2
                        className="md:text-7xl text-5xl font-bold mt-2"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        Making a Difference in Animal Lives
                    </h2>
                    <span
                        className="mt-4 font-SourceSans text-sm text-center md:text-lg block"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        At our shelter charity, we believe that compassion has the power to
                        change lives. Every animal deserves a loving home, and our shelter
                        charity is committed to making that a reality.
                    </span>
                    <div className="mt-6 w-full grid place-items-center" data-aos="fade-up" data-aos-delay="600">
                        <Button item={"Donate Now"} />
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full -mt-20 h-full" data-aos="zoom-in-up" data-aos-delay="700">
                <img
                    src="/assets/image/Home (2) (2).webp"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
