import React from 'react';
import { Users, Settings, Timer, Headphones, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <Users size={32} className="text-white" />,
            title: "Expert Team",
            description: "Our team of experts ensures top-notch service and innovative solutions."
        },
        {
            icon: <Settings size={32} className="text-white" />,
            title: "Customized Solutions",
            description: "We provide tailored solutions to meet your specific needs."
        },
        {
            icon: <ShieldCheck size={32} className="text-white" />,
            title: "Affordable Pricing",
            description: "We offer high-quality services at competitive and affordable prices."
        },
        {
            icon: <Timer size={32} className="text-white" />,
            title: "Timely Delivery",
            description: "We ensure your project is delivered on time, every time."
        },
        {
            icon: <Headphones size={32} className="text-white" />,
            title: "End-to-End Support",
            description: "We provide comprehensive support throughout the project lifecycle."
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-left mb-16 pl-6">
                    <span className="text-gold font-bold text-sm uppercase tracking-wider inline-block mb-2 border-b-2 border-gold pb-1">WHY CHOOSE US</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black">Empowering Digital Success</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gold/30 hover:border-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gold transition-colors">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
