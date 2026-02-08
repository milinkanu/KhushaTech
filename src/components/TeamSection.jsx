import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Linkedin, Twitter, Github, ChevronLeft, ChevronRight } from 'lucide-react';



const TeamSection = () => {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const [paginationEl, setPaginationEl] = useState(null);

    const team = [
        { name: "Niraj Tiwari", role: "Technical Head", initials: "NT" },
        { name: "Kashyap Koyani", role: "MERN Stack Developer", initials: "KK" },
        { name: "Mohammad Farazudin", role: "UI/UX Designing Head", initials: "MF" },
        { name: "Prashant Sheth", role: "Business Development Associate", initials: "PS" },
        { name: "Jyoti Jadhav", role: "UI/UX Designer", initials: "JJ" },
        { name: "Mohammad Aaves", role: "MERN Stack Developer", initials: "MA" },
        { name: "Mukesh Kushwaha", role: "MERN Stack Developer", initials: "MK" },
        { name: "Dilip Ghongade", role: "Marketing Executive", initials: "DG" },
        { name: "Shaikh Hamid", role: "Project Executive", initials: "SH" },
    ];

    return (
        <section className="py-20 bg-beige">
            <div className="container mx-auto px-4">
                <div className="text-left mb-16 pl-4 border-l-4 border-gold">
                    <span className="text-gold font-bold uppercase tracking-wider text-sm mb-2 block">TEAM</span>
                    <h2 className="text-4xl font-bold text-black leading-tight">Meet Our Team</h2>
                </div>

                {/* Founder Section */}
                <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-xl overflow-hidden mb-20 max-w-6xl mx-auto border border-gold/20">
                    <div className="md:w-1/3 relative min-h-[400px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                            alt="Khushboo Bharati"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                            {/* Keep image clean or add overlay text here if desired, currently content is on the right */}
                        </div>
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-black mb-1">Khushboo Bharati</h3>
                            <span className="bg-gold/20 text-gold-dark font-bold px-3 py-1 rounded text-sm inline-block mb-4">Founder & CEO</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg mb-8 font-light">
                            Khushboo Bharati completed her B.E in IT from Theem College of Engineering in 2019. She began her IT career the same year and gained extensive experience in UI/UX and React development. Starting as a Junior UI Developer at Zrow Solution (2019–2020), she was promoted to Senior UI Developer (2020–2023) for her dedication and excellence. In July 2023, she joined Growth Metaverse Pvt. Ltd. as a Senior UI Developer, successfully managing numerous client projects. Later, she worked with Motilal Oswal as a React Developer before founding KhushaTech. With over six years of experience, she now leads KhushaTech, collaborating with past clients and driving her company's growth.
                        </p>
                    </div>
                </div>

                {/* Team Slider */}
                <div className="relative">
                    <div className="flex justify-between items-center mb-8 px-4">
                        <h3 className="text-2xl font-bold text-gray-800">Our Team Members</h3>
                        {/* Navigation custom buttons back to top */}
                        <div className="flex gap-2">
                            <button ref={(node) => setPrevEl(node)} className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all bg-white shadow-sm cursor-pointer z-10 swiper-button-prev-custom-team">
                                <ChevronLeft size={24} />
                            </button>
                            <button ref={(node) => setNextEl(node)} className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all bg-white shadow-sm cursor-pointer z-10 swiper-button-next-custom-team">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        navigation={{ prevEl, nextEl }}
                        pagination={{ clickable: true, el: paginationEl }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className="px-4 pb-4"
                    >
                        {team.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-gold/30 flex flex-col items-center text-center group h-full">
                                    <div className="w-24 h-24 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-inner">
                                        {member.initials}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium mb-4">{member.role}</p>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center mt-6 z-10" ref={setPaginationEl}></div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
