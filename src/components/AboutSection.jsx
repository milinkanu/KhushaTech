import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Images */}
                    <div className="md:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                                alt="Team Discussion"
                                className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                                alt="Coding"
                                className="rounded-lg shadow-lg w-full h-64 object-cover transform -translate-y-8"
                            />
                        </div>
                        {/* Gold accent blur */}
                        <div className="absolute -z-10 bg-gold/20 rounded-full w-64 h-64 blur-3xl opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:w-1/2">
                        <span className="text-gold font-bold tracking-widest text-sm uppercase mb-2 block">ABOUT US</span>
                        <h2 className="text-4xl font-bold text-black mb-6 leading-tight">Empowering Your Digital Journey</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            Welcome to <strong className="text-black">KhushaTech</strong> – Your one-stop solution for all things digital. We are passionate about helping businesses thrive in the digital world. From stunning websites to mobile apps, impactful marketing strategies to engaging content, we craft solutions that leave a lasting impression.
                        </p>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Our mission is to empower brands to grow, connect, and succeed in a competitive landscape. With innovation at our core and a commitment to excellence, we aim to turn your vision into reality.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Website Development",
                                "App Development",
                                "Graphic Design",
                                "Digital Marketing",
                                "SEO (Search Engine Optimization)",
                                "Content Writing"
                            ].map((service, index) => (
                                <div key={index} className="flex items-center space-x-3 text-gray-700">
                                    <div className="text-gold">
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
