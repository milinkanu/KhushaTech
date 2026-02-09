import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-white to-gold"></div>
            <div className="container mx-auto px-4">
                {/* Newsletter Section */}
                <div className="bg-beige rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between mb-16 relative overflow-hidden border border-gold/20 shadow-xl">
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
                    <div className="md:w-1/2 mb-6 md:mb-0 z-10">
                        <h3 className="text-3xl font-bold mb-2 text-black">Stay Ahead in Tech</h3>
                        <p className="text-gray-600 text-lg">Join our community of innovators and get the latest insights.</p>
                    </div>
                    <div className="md:w-1/2 w-full max-w-md z-10">
                        <div className="flex bg-white rounded-full p-1 shadow-lg border border-gold/30">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-grow px-4 md:px-6 py-3 rounded-l-full text-gray-700 outline-none placeholder-gray-400 min-w-0"
                            />
                            <button className="bg-gold text-black px-5 md:px-8 py-3 rounded-full font-bold hover:bg-gold-dark transition-colors flex items-center shadow-md text-sm md:text-base">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
                    {/* Brand Info */}
                    <div>
                        <div className="mb-6">
                            <img src={logo} alt="KhushaTech" className="h-24 w-auto filter invert brightness-0 invert-100" />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6 font-light">
                            Your one-stop solution for all things digital. We are passionate about helping businesses thrive in the digital world with innovative technology solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-gold inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Our Work', 'Gallery', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <Link to="/" className="text-gray-400 hover:text-gold transition-colors flex items-center group">
                                        <span className="mr-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                                        <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-gold inline-block pb-1">Our Services</h4>
                        <ul className="space-y-3">
                            {['Website Development', 'App Development', 'Content Writing', 'Graphic Design', 'SEO Services', 'Digital Marketing'].map((link) => (
                                <li key={link}>
                                    <Link to="/" className="text-gray-400 hover:text-gold transition-colors flex items-center group">
                                        <span className="mr-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                                        <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-gold inline-block pb-1">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400 group">
                                <MapPin size={24} className="text-gold mr-3 mt-1 flex-shrink-0 group-hover:text-white transition-colors" />
                                <span>Chanakya Chowk, C5 Wing Vinay Palace, Padman Sarkar Nagar, Virat Nagar, Virar, Maharashtra 401303</span>
                            </li>
                            <li className="flex items-center text-gray-400 group">
                                <Phone size={20} className="text-gold mr-3 flex-shrink-0 group-hover:text-white transition-colors" />
                                <a href="tel:+918806234772" className="hover:text-gold transition-colors">+91 88062 34772</a>
                            </li>
                            <li className="flex items-center text-gray-400 group">
                                <Mail size={20} className="text-gold mr-3 flex-shrink-0 group-hover:text-white transition-colors" />
                                <a href="mailto:khushboo@khushatech.com" className="hover:text-gold transition-colors">khushboo@khushatech.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-800 pt-8">
                    <p>© 2026 Khushatech IT Academy. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                        <span className="text-gray-700">|</span>
                        <Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
