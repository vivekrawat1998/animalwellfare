import React from 'react'
import Button from '../ui/Button'

const Joinmisson = () => {
    return (
        <div className='bg-[#072724] font-Lora w-full py-10 relative '
            style={{
                backgroundImage: 'url(/assets/image/overlay.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* overlay */}
            <div className="relative  grid place-items-center md:py-24 text-white text-center"
            >
                <div className='md:max-w-3xl  space-y-3'>
                    <h2 className='uppercase text-[#D89D55]'>Wagging Tails, Happy Hearts</h2>
                    <h1 className='md:text-[3rem] text-[2rem] font-bold'>Join Our Mission for Animal Rescue</h1>
                    <span className='text-[1rem] font-SourceSans'>At our shelter charity, we believe that compassion has the power to change lives. Every animal deserves a loving home, and our shelter charity is committed to making that a reality.</span>
                    <div className='w-full h-full mt-5 grid place-items-center'>
                        <Button item={"Join us Now"} />
                    </div>


                </div>
            </div>
            <img className='md:w-[20vw] md:h-[40vh] w-28 h-28 absolute bottom-0 right-0 object-cover' src='/assets/image/bgjoinus.png' alt='' />
        </div>
    )
}
export default Joinmisson