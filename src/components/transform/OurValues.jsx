import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurValues = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, once: false, offset: 100 });
    }, []);

    const carditems = [
        {
            id: 1,
            image: "/assets/image/compassion.png",
            title: "Compassion and Empathy",
            description: "Animal shelters and charities advocate for responsible pet ownership within the community."
        },
        {
            id: 2,
            image: "/assets/image/rescue.png",
            title: "Rescue and Rehabilitation",
            description: "Animal shelters and charities advocate for responsible pet ownership within the community."
        },
        {
            id: 3,
            image: "/assets/image/responsibel.png",
            title: "Responsible Pet Ownership",
            description: "Animal shelters and charities advocate for responsible pet ownership within the community."
        },
        {
            id: 4,
            image: "/assets/image/community.png",
            title: "Community Engagement",
            description: "Animal shelters and charities advocate for responsible pet ownership within the community."
        },
    ];

    return (
        <div className="bg-[#072724] font-Lora w-full h-full px-5 p-10 overflow-hidden relative flex flex-col ">
            {/* Overlay */}
            <div className="absolute inset-0 grid place-items-center w-full h-full">
                <img
                    src="/assets/image/overlay.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Content */}
            <div className="relative md:py-20 pt-20 text-white w-full flex flex-col justify-center items-center text-center px-2">
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="leading-10 md:max-w-5xl space-y-4">
                    <h2 className="text-lg text-[#D89D55] md:text-2xl">Our Values</h2>
                    <h1 className="text-3xl md:text-[4rem] font-bold">Making a Difference in Animal Rescue</h1>
                    <p className="text-sm text-[#586B69] font-SourceSans md:text-lg">
                        At our shelter charity, we believe that compassion has the power to change lives.
                        Every animal deserves a loving home, and our shelter charity is committed to making that a reality.
                    </p>
                </div>
            </div>
            {/* Cards */}
            <div className='flex justify-center  flex-wrap w-full mt-10 px-20 items-center gap-5 f'>
                {carditems.map((item,index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100}`}
                        key={item.id} className='md:w-[40vw] w-full h-full  space-y-3 flex justify-center items-center flex-col rounded-lg'>
                        <img src={item.image} alt='' className='w-[10vw]  h-[10vw] object-cover' />
                        <h3 className='text-[2rem] text-center text-white font-semibold'>{item.title}</h3>
                        <p className='text-[#586B69] font-SourceSans md:text-[1rem] text-sm text-center'>{item.description}</p>
                    </div>
                ))}
            </div>
            {/* Video */}
            <div
                data-aos="fade-up"
                data-aos-delay="300"
                className='w-full flex justify-center mt-10'>
                <video
                    src="/assets/video/animal_rescue.mp4"
                    controls
                    className="md:w-[60vw] md:h-[30vw] rounded-2xl object-cover"
                />
            </div>
        </div>
    );
};

export default OurValues;