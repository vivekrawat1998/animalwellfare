import React from 'react';
import Button from '../ui/Button';

const Navbar = () => {
    return (
        <div className="w-full bg-transparent fixed z-45 text-white ">
            <div className="container mx-auto flex justify-between items-center h-[10vh] px-5">
                {/* Logo */}
                <div>
                    <img className="w-20 h-20 object-cover" src="" alt="Logo" />
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-10">
                    <ul className="flex gap-10 text-lg md:text-xl">
                        <li className="cursor-pointer hover:text-[#EF4B24]">Home</li>
                        <li className="cursor-pointer hover:text-[#EF4B24]">About</li>
                        <li className="cursor-pointer hover:text-[#EF4B24]">Donation</li>
                        <li className="cursor-pointer hover:text-[#EF4B24]">Programs</li>
                        <li className="cursor-pointer hover:text-[#EF4B24]">Gallery</li>
                        <li className="cursor-pointer hover:text-[#EF4B24]">Contact</li>
                    </ul>
                    {/* Donate Button */}
                    <Button item="Donate Now" color="#82B95F" textColor="black" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
