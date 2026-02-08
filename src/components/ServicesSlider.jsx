import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Layout, Search, Code, Smartphone, PenTool, Share2, ChevronLeft, ChevronRight } from 'lucide-react';


const ServicesSlider = () => {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const [paginationEl, setPaginationEl] = useState(null);

    const services = [
        {
            id: 1,
            icon: <PenTool size={32} />,
            title: "Graphic Design",
            description: "Good design builds trust and makes your brand stand out. We design digital graphics that you can use on your website, social media, or share directly.",
        },
        {
            id: 2,
            icon: <Search size={32} />,
            title: "Search Engine Optimization",
            description: "SEO (Search Engine Optimization) is the practice of improving a website's visibility on search engines like Google. It focuses on increasing organic traffic.",
        },
        {
            id: 3,
            icon: <Code size={32} />,
            title: "Content Writing",
            description: "Content writing is the process of creating, editing, and publishing written content for digital and print media. It plays a crucial role in marketing, branding, and communication.",
        },
        {
            id: 4,
            icon: <Share2 size={32} />,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to boost your online presence and drive growth through various channels.",
        },
        {
            id: 5,
            icon: <Smartphone size={32} />,
            title: "App Development",
            description: "Building powerful mobile and web applications for iOS, Android, and cross-platform solutions.",
        },
        {
            id: 6,
            icon: <Layout size={32} />,
            title: "Website Development",
            description: "Creating responsive and dynamic websites tailored to your business needs with modern technologies and best practices.",
        },
    ];

    return (
        <section className="py-20 bg-beige">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="text-left w-full text-center md:text-left">
                        <span className="text-gold font-bold text-sm uppercase mb-2 block tracking-wider">OUR SERVICES</span>
                        <h2 className="text-4xl font-bold text-black leading-tight">Smart Solutions for a <br className="hidden md:block" />Digital World</h2>
                    </div>
                    {/* Navigation buttons back to top */}
                    <div className="flex gap-2 mt-4 md:mt-0 justify-center md:justify-end w-full md:w-auto">
                        <button ref={(node) => setPrevEl(node)} className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all bg-white shadow-sm cursor-pointer z-10 swiper-button-prev-custom-services">
                            <ChevronLeft size={24} />
                        </button>
                        <button ref={(node) => setNextEl(node)} className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all bg-white shadow-sm cursor-pointer z-10 swiper-button-next-custom-services">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        navigation={{ prevEl, nextEl }}
                        pagination={{
                            clickable: true,
                            el: paginationEl,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="services-swiper pb-4 px-4"
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id} className="h-auto">
                                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/20 group h-full flex flex-col items-center text-center">
                                    <div className="text-white mb-6 bg-gold w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        {/* Use React.cloneElement to make sure icon renders properly if needed, but direct render is fine */}
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                        {service.description}
                                    </p>
                                    <button className="bg-gold text-black font-bold hover:bg-gold-dark py-2 px-6 rounded-full transition-all mt-auto shadow-md hover:shadow-lg">
                                        View More
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center mt-8 z-10" ref={setPaginationEl}></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSlider;
