import React from 'react'

const Header = ({ title, subheading, description, height ="full" }) => {
    return (
        <div className={`bg-[#072724] w-full font-Lora  ${height} overflow-hidden p-5 relative md:px-48
        `}>
            {/* Overlay */}
            <div className="absolute inset-0 grid place-items-center w-full h-full">
                <img
                    src="/assets/image/overlay.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Content */}
            <div className='relative  py-20 text-white flex  items-center justify-center text-center'>
                <div className="max-w-4xl">
                    <div className="max-w-4xl space-y-3">
                        <h1 className="md:text-xl text-sm text-[#D89D55] font-bold">{title}</h1>
                        <h2 className="md:text-7xl text-5xl font-bold mt-2">{subheading}</h2>
                        <span className="mt-4 font-SourceSans  text-sm text-center md:text-xl">
                            {description}
                        </span>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Header