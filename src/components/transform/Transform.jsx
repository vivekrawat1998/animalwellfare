import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../ui/Button'

const Transform = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, once: false, offset: 100 });
    }, []);

    return (
        <div className='w-full min-h-screen py-20 font-Lora relative bg-gray-100'>
            <div className='absolute inset-0 w-full h-full pointer-events-none'>
                <img

                    className='absolute top-0 right-0 object-cover w-52 h-52'
                    src='/assets/image/secondoverlay.png'
                    alt=''
                />
            </div>
            {/* Content */}
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                className='relative grid md:grid-cols-2 gap-10 px-5 md:px-20'>
                <div className='w-full space-y-5'>
                    <h3 className='text-lg font-semibold text-[#D89D55]'>Pawsitive Impact</h3>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#072724]'>Transforming Lives with Shelter Charity</h1>
                    <p className='text-lg md:text-xl leading-8 text-gray-700'>
                        With your support, we can rescue animals from overcrowded shelters, provide them with medical care and rehabilitation, and match them with loving forever families. Together, we can rewrite the narrative for these animals, giving them a second chance at happiness and security.
                    </p>
                    <img
                        className='w-full h-auto object-cover rounded-lg shadow-lg'
                        src='/assets/image/namanphoto.PNG'
                        alt='Animal Rescue'
                    />
                </div>
                {/* Right Section */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className='w-full space-y-5'>
                    <img
                        className='w-full h-auto object-cover rounded-lg shadow-lg'
                        src='/assets/image/namanpics.webp'
                        alt='Animal Rescue'
                    />
                    <h3 className='text-lg font-semibold text-[#D89D55]'>Pawsitive Impact</h3>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#072724]'>Transforming Lives with Shelter Charity</h1>
                    <p className='text-lg md:text-xl leading-8 text-gray-700'>
                        With your support, we can rescue animals from overcrowded shelters, provide them with medical care and rehabilitation, and match them with loving forever families. Together, we can rewrite the narrative for these animals, giving them a second chance at happiness and security.
                    </p>
                    <div className='w-full flex justify-start'>
                        <Button item={"Donate Now"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transform
