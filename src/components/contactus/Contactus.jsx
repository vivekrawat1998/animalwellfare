import React from 'react';
import Header from '../ui/Header';
import { IoCall } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
const Contactus = () => {
    const conatctdetails = [
        { icons: <IoCall className='text-[#95CF7B] text-3xl' />, title: '+91 1234567890' },
        { icons: <AiOutlineMessage className='text-[#95CF7B] text-3xl' />, title: "atria@info.com" },
        { icons: <FaWhatsapp className='text-[#95CF7B] text-3xl' />, title: "Whatsapp Support" },
        { icons: <MdAccessTime className='text-[#95CF7B] text-3xl' />, title: "Mon - Fri 9:00 AM - 5:00 PM" },
    ]

    return (
        <div className='relative overflow-hidden'>
            {/* Header Section */}
            <Header
                title="Contact Us"
                subheading="Join Our Mission for Animal Rescue"
                description="At our shelter charity, we believe that compassion has the power to change lives. Every animal deserves a loving home, and our shelter charity is committed to making that a reality."
                height="h-[100vh]"
            />

            {/* Contact Section */}
            <div className='-mt-32 px-6  md:px-2 relative z-10'>
                <div className='bg-white grid grid-cols-1 md:grid-cols-2 overflow-hidden w-full h-full'>
                    {/* Left Image */}
                    <div className=''>
                        <img
                            src='/assets/image/dog bg.jpeg'
                            alt='Animal shelter'
                            className='w-full h-full object-cover'
                        />
                    </div>

                    {/* Right Form */}
                    <div className='p-8 flex flex-col justify-start items-start font-Lora'>
                        <h1 className='text-xl font-semibold text-[#D89D55] mb-2'>Write Us</h1>
                        <p className='text-[#404E4D] text-4xl text-center mb-6'>
                            We are here to assist you
                        </p>
                        <form className='w-full font-SourceSans flex flex-col gap-2'>
                            <label htmlFor='name' className='text-[#072724] font-semibold'>
                                Your name
                            </label>
                            <input
                                type='text'
                                className='border rounded-xl hover:outline-[#D89D55] border-[#072724] py-3 px-1 focus:outline-[#D89D55]'
                            />
                            <label htmlFor='name' className='text-[#072724] font-semibold'>
                                Your email
                            </label>
                            <input
                                type='email'
                                className='border rounded-xl focus:outline-[#D89D55]  border-[#072724] py-3 px-1 '
                            />
                            <label htmlFor='name' className='text-[#072724] font-semibold'>
                                Your message
                            </label>
                            <textarea
                                rows={5}
                                className='border  border-[#072724] py-2 px-1  rounded-xl focus:outline-[#D89D55]'
                            />
                            <button className='bg-[#072724] text-white px-6 py-2 mt-2 rounded hover:bg-[#0b3a33] transition'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* conatctdetails */}
            <div className='bg-[#F1E7DB] w-full flex items-center  justify-center font-Lora  px-3 md:px-10 py-20'>
                <div className='grid md:grid-cols-4 grid-cols-2  gap-20'>
                    {
                        conatctdetails.map((item) => (
                            <div className='flex items-center gap-5 mb-2'>
                                <div className='bg-[#0B4B43] p-3 rounded-full'>
                                    {item.icons}
                                </div>
                                <div>
                                    <p className='text-[#404E4D] md:text-xl'>{item.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* find us shelter  */}

            <div className='w-full h-full p-10 relative grid place-items-center ' >
                <div className='absolute inset-0 '>
                    <img src='assets/image/overlay.png' alt='' />
                </div>
                <div className=' relative  font-Lora w-full grid place-items-center'>
                    <div className='max-w-4xl text-white text-center'>
                        <h1 className='text-2xl font-semibold text-[#D89D55]'>Find Us</h1>
                        <p className='text-[3.5rem] text-[#23403D]'>Find Our Shelter</p>
                        <p className='text-[#404E4D] text-[1rem] font-SourceSans'>With your support, we can rescue animals from overcrowded shelters, provide them with medical care and rehabilitation, and match them with loving forever families.</p>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Contactus;
