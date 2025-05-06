import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "text-[#BEFD95] font-semibold" : "text-white";

    return (
        <div className="w-full md:bg-black/10 bg-black/10 border-b border-black/18  md:backdrop-blur-lg fixed z-50 ">
            <div className="container mx-auto flex justify-between items-center  px-5">
                {/* Logo */}
                <div>
                    <img className="w-20 h-20 rounded-full  object-cover" src="/assets/image/logo.png" alt="Logo" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8 text-lg md:text-xl">
                        <Link to="/" className={`${isActive("/")} cursor-pointer hover:text-[#BEFD95]`}>Home</Link>
                        <Link
                            to="/service"
                            className={`${isActive("/service")} cursor-pointer hover:text-[#BEFD95] `}>Service</Link>
                        <Link to="/team" className={`${isActive("/team")} cursor-pointer hover:text-[#BEFD95] `}>Our Team</Link>
                        <Link
                            to="/gallery"
                            className={`${isActive("/gallery")} hover:text-[#BEFD95] curosr-pointer `}>Gallery</Link>
                        <Link
                            to="/contactus"
                            className={`${isActive("/contactus")} cursor-pointer hover:text-[#BEFD95]`}>Contact</Link>
                    </ul>
                    <Button item="Donate Now" color="#82B95F" textColor="black" />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden  text-white z-50">
                    <button className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} className='text-black' /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white text-black transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-start gap-6 p-6 pt-20 text-lg font-medium">

                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#BEFD95]">Home</Link>
                    <Link to="/team" onClick={() => setIsOpen(false)} className="hover:text-[#BEFD95]">Our Team</Link>
                    <Link to="/service" onClick={() => setIsOpen(false)} className="hover:text-[#BEFD95]">Service</Link>
                    <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-[#BEFD95]">Gallery</Link>
                    <Link to="/contactus" onClick={() => setIsOpen(false)} className="hover:text-[#BEFD95]">Contact</Link>
                    <Button item="DonateNow" color="#82B95F" textColor="black" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
