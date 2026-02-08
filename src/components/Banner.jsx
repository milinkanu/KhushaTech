import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80",
            title: "Learn, Code, and Grow with Us",
            subtitle: "Empowering Future Developers at KhushaTech Academy",
            cta: "Contact Us"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
            title: "Your Journey to Tech Excellence Begins Here",
            subtitle: "Training • Internship • Career Guidance",
            cta: "Contact Us"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
            title: "Join the Digital Revolution",
            subtitle: "Hands-on Learning with Real Projects",
            cta: "Contact Us"
        }
    ];

    return (
        <div className="relative w-full h-[600px] mt-16 group">
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                                <div className="max-w-4xl animate-fadeInUp">
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-lg">{slide.title}</h2>
                                    <p className="text-xl md:text-2xl text-beige mb-8 font-light tracking-wide">{slide.subtitle}</p>
                                    <button className="bg-gold hover:bg-gold-dark text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl border border-gold-light">
                                        {slide.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full cursor-pointer text-white transition-all transform -translate-y-1/2 opacity-0 group-hover:opacity-100 hidden md:block">
                <ChevronLeft size={32} />
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full cursor-pointer text-white transition-all transform -translate-y-1/2 opacity-0 group-hover:opacity-100 hidden md:block">
                <ChevronRight size={32} />
            </div>
        </div>
    );
};

export default Banner;
