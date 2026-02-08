import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logo from '../assets/logo.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg border-b border-gray-800">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="KhushaTech" className="h-10 w-auto mr-2 invert brightness-0 invert-100" />
                        <span className="hidden md:inline font-bold text-2xl text-gold">KhushaTech</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center text-sm font-medium tracking-wide">
                    <Link to="/" className="text-gold hover:text-white transition-colors">Home</Link>
                    <Link to="/about" className="text-white hover:text-gold transition-colors">About Us</Link>
                    <Link to="/services" className="text-white hover:text-gold transition-colors">Services</Link>
                    <Link to="/work" className="text-white hover:text-gold transition-colors">Our Work</Link>
                    <Link to="/gallery" className="text-white hover:text-gold transition-colors">Gallery</Link>
                    <Link to="/contact" className="text-white hover:text-gold transition-colors">Contact Us</Link>
                    <Link to="/career" className="text-white hover:text-gold transition-colors">Career</Link>
                    <Link to="/training" className="bg-gold text-black px-5 py-2 rounded shadow hover:bg-gold-light transition-all font-semibold uppercase text-xs tracking-wider">Training & Internship</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-gray-800 py-4 px-6 shadow-xl absolute w-full left-0 animate-fadeIn z-50">
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="text-gold hover:text-white font-medium block" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about" className="text-white hover:text-gold font-medium block" onClick={() => setIsOpen(false)}>About Us</Link>
                        <Link to="/services" className="text-white hover:text-gold font-medium block" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link to="/work" className="text-white hover:text-gold font-medium block" onClick={() => setIsOpen(false)}>Our Work</Link>
                        <Link to="/gallery" className="text-white hover:text-gold font-medium block" onClick={() => setIsOpen(false)}>Gallery</Link>
                        <Link to="/contact" className="text-white hover:text-gold font-medium block" onClick={() => setIsOpen(false)}>Contact Us</Link>
                        <Link to="/career" className="text-white hover:text-gold font-medium block" onClick={() => setIsOpen(false)}>Career</Link>
                        <Link to="/training" className="bg-gold text-black px-4 py-3 rounded hover:bg-gold-dark transition-colors font-bold text-center block" onClick={() => setIsOpen(false)}>Training & Internship</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
