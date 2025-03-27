import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    const carditems = [
        {
            id: 1,
            image: "assets/image/compassion.png",
            title: "Compassion and Empathy",
            description: "Animal shelters and charities advocate for responsible pet ownership within the community."
        },
        {
            id: 2,
            image: "assets/image/rescue.png",
            title: "Rescue and Rehabilitation",
            description: "Animal shelters and charities advocate for responsible pet ownership within the community."
        },
        {
            id: 3,
            image: "assets/image/responsibel.png",
            title: "Responsible Pet Ownership",
            description: "Animal shelters and charities advocate for responsible pet ownership within the community."
        },
        {
            id: 4,
            image: "assets/image/community.png",
            title: "Community Engagement",
            description: "Animal shelters and charities advocate for responsible pet ownership within the community."
        },
    ];

    return (
        <div className="bg-[#F7F1EA] font-Lora w-full h-full p-32 px-5 overflow-hidden relative">
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
                <div className="leading-10 md:max-w-5xl space-y-4">
                    <h2 className="text-lg text-[#D89D55] md:text-2xl uppercase">Testimonials</h2>
                    <h1 className="text-3xl md:text-[4rem] text-[#072724] font-bold">Happy Families, Happy Stories</h1>
                    <p className="text-sm text-[#404E4D] md:text-lg">
                        At our shelter charity, we believe that compassion has the power to change lives.
                        Every animal deserves a loving home, and our shelter charity is committed to making that a reality.
                    </p>
                </div>
            </div>
            {/* Swiper */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                speed={2000}
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true, el: ".custom-pagination" }}
                modules={[Pagination, Autoplay]}
                className="mt-10 w-[90%]"
            >
                {carditems.map((item) => (
                    <SwiperSlide key={item.id} className="flex p-5 overflow-hidden w-full h-auto bg-[#FCFBF8] rounded-md justify-center items-center">
                        <div className='space-y-3 flex justify-start w-full items-start flex-col rounded-lg'>
                            <img src={item.image} alt='' className='w-20 h-20 object-cover rounded-full' />
                            <h3 className='text-[1rem] text-center text-[#9AA48A] font-semibold'>{item.title}</h3>
                            <p className='text-black md:text-[1rem] text-sm'>{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Custom Pagination */}
            <div className="custom-pagination flex justify-center mt-5 space-x-2"></div>
        </div>
    );
};

export default Testimonials;
