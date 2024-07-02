import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";


const About = () => {
    return (
        <>

        

            <section className="w-full h-[70vh] Banner relative">
                <video
                    src="/Banner.mp4"
                    autoPlay="true"
                    playsinline="true"
                    loop="true"
                    muted="true"
                    class="w-full h-full object-cover"
                ></video>
                <div className="container">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[120px] text-white absolute bottom-10 xl:bottom-20 px-0 md:px-4 uppercase font-medium">
                        Our Story
                    </h1>
                </div>
            </section>

            {/* About Content Section */}

            <div className="py-[60px] xl:py-20 xl:pb-[100px]">
                <div className="container">
                    <p className="text-[20px] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium">
                        <span className="text-[#A89C6C]">Zoya Developments </span>began its journey driven by a vision of developing modern spaces that merge craftsmanship and liveability. In the last 14 years, we have set new standards in creating unparalleled living spaces and delivering exceptional value for our customers.
                    </p>
                    <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-light w-full lg:w-[82%] mt-5 lg:mt-10 xl:mt-14">
                        In 2024, we mark our entry into Dubai. We are excited to bring our legacy of excellence and innovation to this vibrant ecosystem of growth and prosperity. Dubai’s visionary leadership and forwardthinking initiatives have brought it into the global spotlight, making it an ideal destination for Zoya Developments to expand. With a customer-centric approach at our core, we look forward to crafting extraordinary experiences.
                    </p>
                </div>
            </div>

            {/* Our Philosophy Section */}

            <div className="bg-[#213A6F] py-[60px] lg:py-20 xl:py-[100px]">
                <div className="container">
                    <div className="flex items-center gap-4 xl:gap-[24px] mb-5 lg:mb-10 xl:mb-14">
                        <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                        <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C]">
                            OUR PHILOSOPHY
                        </h2>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-[20px] lg:gap-[50px] xl:gap-28 mb-5 lg:mb-10 xl:mb-14">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-[30px] xl:text-[40px] text-white leading-normal mb-5 lg:mb-10">
                                Vission
                            </h2>
                            <p className="text-[16px] lg:text-[20px] leading-normal font-light text-white">
                                To be a leading developer renowned for crafting transformative spaces that inspire creativity, cultivate well-being, and empower residents to thrive.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-[30px] xl:text-[40px] text-white leading-normal mb-5 lg:mb-10">
                                Mission
                            </h2>
                            <p className="text-[16px] lg:text-[20px] leading-normal font-light text-white">
                                Go beyond customer expectations by delivering high-quality, stylish, sustainable developments that foster a sense of community and prioritize resident satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center flex-col md:flex-row mb-0 gap-[20px] lg:gap-[50px] xl:gap-[90px]">
                        <div className="w-full md:w-1/2 flex items-center flex-col md:flex-row gap-[20px] lg:gap-[50px] xl:gap-16">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-[35px] lg:text-[40px] xl:text-[60px] text-[#A89C6C] leading-normal mb-0 lg:mb-[10px]">
                                    14 <span className="text-[16px] lg:text-[20px] xl:text-[28px] leading-normal">Years</span>
                                </h2>
                                <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-normal font-light text-white">
                                    Development Experience
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-[35px] lg:text-[40px] xl:text-[60px] text-[#A89C6C] leading-normal mb-0 lg:mb-[10px]">
                                    100,000+
                                </h2>
                                <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-normal font-light text-white">
                                    Units Delivered
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-[35px] lg:text-[40px] xl:text-[60px] text-[#A89C6C] leading-normal mb-0 lg:mb-[10px]">
                                100,000 <span className="text-[16px] lg:text-[20px] xl:text-[28px] leading-normal">Sq.ft</span>
                            </h2>
                            <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-normal font-light text-white">
                                Area Developed
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Farooq Khan Section */}

            <div className="py-[60px] lg:py-20 xl:py-[100px]">
                <div className="container">
                    <div className="flex items-center flex-col lg:flex-row gap-0 lg:gap-[10px] xl:gap-[50px]">
                        <div className="w-full lg:w-[70%]">
                            <div className="flex items-center gap-4 xl:gap-[24px] mb-5 lg:mb-10 xl:mb-[80px]">
                                <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                                <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C]">
                                    MESSAGE FROM THE CHAIRMAN
                                </h2>
                            </div>
                            <img src="/Comas-Icon.svg" className="w-[130px] xl:w-[200px] mb-5 xl:mb-10" />
                            <p className="text-[20px] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium mb-5 xl:mb-10">
                                We come to Dubai with a sense of purpose and passion. Our mission to redefine urban living drives us to push boundaries, innovate relentlessly, and exceed expectations.
                            </p>
                            <p className="text-[16px] lg:text-[20px] leading-normal font-light w-full lg:w-[85%] xl:w-[87%] mb-5 xl:mb-10">
                                Through thoughtful design, sustainable practices, and a deep understanding of our customers’ needs, we aim to not only build structures but to craft legacies that that will live on for generations.
                            </p>
                            <div className="flex items-center flex-col md:flex-row justify-between mb-5 lg:mb-0">
                                <div className="w-full lg:w-[85%]">
                                    <h3 className="text-[20px] text-[#213A6F] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium mb-[10px] lg:mb-[16px]">
                                        FAROOQ KHAN
                                    </h3>
                                    <p className="text-[16px] text-[#A89C6C] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-light w-full lg:w-[82%] mb-5 lg:mb-0">
                                        Chairman and Managing Director, Columbia Group
                                    </p>
                                </div>
                                <div className="w-full lg:w-[15%] flex justify-start md:justify-end">
                                    <Link href="#." className="bg-[#A89C6C] w-[30px] h-[30px] lg:w-[42px] lg:h-[42px] rounded-[50%] text-center px-2 py-[7px] lg:px-[12px] lg:py-[11px] block hover:bg-[#213A6F] transition-all">
                                        <img src="/Linkedin.svg" className="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[30%]">
                            <img src="/Farooq-Khan.jpg" className="w-full md:w-[60%] lg:w-full mx-auto my-0 h-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Approch Section */}

            <div className="bg-[#213A6F] py-[60px] lg:py-20 xl:py-[100px]">
                <div className="container">
                    <div className="flex items-center gap-4 xl:gap-[24px] mb-6 lg:mb-10 xl:mb-14">
                        <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                        <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C]">
                            OUR APPROCH
                        </h2>
                    </div>
                    <p className="text-[20px] text-white lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium mb-10 xl:mb-[80px]">
                        Think Different. Deliver Different.
                    </p>
                    <div className="flex items-start flex-wrap justify-between gap-[25px] xl:gap-[40px] mb-5 lg:mb-10 xl:mb-14">
                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-40px)]">
                            <img src="/Elevated-Design.svg" className="w-[50px] lg:w-[60px] mb-5 lg:mb-10" />
                            <h2 className="text-[30px] xl:text-[35px] text-white leading-[35px] xl:leading-[45px] mb-5 lg:mb-[30px]">
                                Elevated<br />
                                Design
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-[21px] lg:leading-[23px] font-light text-white">
                                We collaborate with leading architects and designers to craft spaces that are visually stunning as well as optimized for functionality. We go beyond trends to create designs that elevate livability for generations to come.
                            </p>
                        </div>
                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-40px)]">
                            <img src="/Bulb.svg" className="w-[50px] lg:w-[60px] mb-5 lg:mb-10" />
                            <h2 className="text-[30px] xl:text-[35px] text-white leading-[35px] xl:leading-[45px] mb-5 lg:mb-[30px]">
                                Effortlessly<br />
                                Smart
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-[21px] lg:leading-[23px] font-light text-white">
                                We believe technology should enhance your life. We seamlessly integrate cutting-edge technologies into our developments, creating smart homes that personalize your environment and prioritize convenience and security.
                            </p>
                        </div>
                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-40px)]">
                            <img src="/Exceptional-Investment.svg" className="w-[50px] lg:w-[60px] mb-5 lg:mb-10" />
                            <h2 className="text-[30px] xl:text-[35px] text-white leading-[35px] xl:leading-[45px] mb-5 lg:mb-[30px]">
                                Exceptional<br />
                                Investment
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-[21px] lg:leading-[23px] font-light text-white">
                                We create spaces that enrich your life today and become a valuable asset for your future. We prioritize prime locations and strong growth potential. Spacious layouts and integrated outdoor spaces are just some elements we consider to create environments that enhance your well-being.
                            </p>
                        </div>
                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-40px)]">
                            <img src="/Sustainable-Development.svg" className="w-[50px] lg:w-[60px] mb-5 lg:mb-10" />
                            <h2 className="text-[30px] xl:text-[35px] text-white leading-[35px] xl:leading-[45px] mb-5 lg:mb-[30px]">
                                Sustainable<br />
                                Development
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-[21px] lg:leading-[23px] font-light text-white">
                                From recycling construction waste to utilizing recycled construction materials, we are committed to leading by example in the movement towards sustainable development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet The Team Section */}

            <div className="bg-white py-[60px] lg:py-20 xl:py-[100px]">
                <div className="container">
                    <div className="flex items-center gap-4 xl:gap-[24px] mb-6 lg:mb-10 xl:mb-14">
                        <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                        <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C]">
                            OUR APPROCH
                        </h2>
                    </div>
                    <p className="text-[20px] text-black lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium mb-0">
                        Driven by Passion, United by Purpose
                    </p>
                    <p className="text-[16px] lg:text-[20px] leading-[20.18px] lg:leading-[24.19px] font-light w-full lg:w-[82%] mt-5 mb-10 xl:mb-[80px]">
                        At Zoya Developments, we believe our greatest asset is our people. We’ve assembled a team of passionate and dedicated professionals, each with a wealth of experience and a shared commitment to excellence and innovation.
                    </p>
                    <div className="flex items-end flex-wrap justify-between gap-[25px] xl:gap-[30px] mb-5 lg:mb-10 xl:mb-14">

                        <div className="w-full xl:w-[calc(25%-30px)] flex flex-col justify-end">
                            <h2 className="text-[30px] xl:text-[35px] text-black leading-[35px] xl:leading-[45px] font-medium mb-5 lg:mb-[30px]">
                                Our<br />
                                Leadership
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-[21px] lg:leading-[23px] font-light text-black">
                                At Zoya Developments, we have a visionary leadership team at the helm, guiding our direction and propelling us towards a future of innovation and excellence.
                            </p>
                        </div>

                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-30px)]">

                            <Link href="#." className="relative teamMember Fast_animate">
                                <div className="relative">
                                    <img src="/Farooq-Khan.jpg" className="w-full mb-5 bg-gradient-to" />
                                    <div className="teamGradient bg-gradient-to-b from-transparent to-blue-900 w-full h-[440px] lg:h-[600px] xl:h-[390px] absolute bottom-0 Fast_animate"></div>
                                </div>
                                <div className="absolute bottom-[25%] lg:bottom-[20%] xl:bottom-[30%] left-5 right-5 flex justify-between items-end">
                                    <div className="">
                                        <h3 className="text-[16px] xl:text-[18px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                            FAROOQ KHAN
                                        </h3>
                                        <p className="text-[14px] lg:text-[16px] leading-normal font-light text-[#A89C6C]">
                                            Chairman and Managing Director,
                                            Columbia Group
                                        </p>
                                    </div>
                                    <div className="">
                                        <div className="bg-[#A89C6C] w-[30px] h-[30px] rounded-[50%] text-center px-2 py-[7px] ">
                                            <img src="/Linkedin.svg" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[14px] lg:text-[16px] leading-normal font-light text-black mb-4">
                                    Mr. Farooq, respected for his industry insights and business acumen, has led the group for over 20 years..
                                </p>
                                <div className="flex items-center TeamButton">
                                    <div>
                                        <p className="text-[14px] lg:text-[16px] leading-normal text-[#A89C6C] font-medium">
                                            READ BIO
                                        </p>
                                    </div>
                                    <div>
                                        <FaArrowRight className="text-[#A89C6C] arrow ml-[12px] Fast_animate" />
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-30px)]">

                            <Link href="#." className="relative teamMember Fast_animate">
                                <div className="relative">
                                    <img src="/Imtiaz-Khan.jpg" className="w-full mb-5 bg-gradient-to" />
                                    <div className="teamGradient bg-gradient-to-b from-transparent to-blue-900 w-full h-[440px] lg:h-[600px] xl:h-[390px] absolute bottom-0 Fast_animate"></div>
                                </div>
                                <div className="absolute bottom-[25%] lg:bottom-[20%] xl:bottom-[30%] left-5 right-5 flex justify-between items-end">
                                    <div className="">
                                        <h3 className="text-[16px] xl:text-[18px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                            IMTIAZ KHAN
                                        </h3>
                                        <p className="text-[14px] lg:text-[16px] leading-normal font-light text-[#A89C6C]">
                                            Executive Director,
                                            Columbia Group
                                        </p>
                                    </div>
                                    <div className="">
                                        <div className="bg-[#A89C6C] w-[30px] h-[30px] rounded-[50%] text-center px-2 py-[7px] ">
                                            <img src="/Linkedin.svg" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[14px] lg:text-[16px] leading-normal font-light text-black mb-4">
                                    Mr. Farooq, respected for his industry insights and business acumen, has led the group for over 20 years..
                                </p>
                                <div className="flex items-center TeamButton">
                                    <div>
                                        <p className="text-[14px] lg:text-[16px] leading-normal text-[#A89C6C] font-medium">
                                            READ BIO
                                        </p>
                                    </div>
                                    <div>
                                        <FaArrowRight className="text-[#A89C6C] arrow ml-[12px] Fast_animate" />
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-30px)]">

                            <Link href="#." className="relative teamMember Fast_animate">
                                <div className="relative">
                                    <img src="/Shoaib-Khan.jpg" className="w-full mb-5 bg-gradient-to" />
                                    <div className="teamGradient bg-gradient-to-b from-transparent to-blue-900 w-full h-[440px] lg:h-[600px] xl:h-[390px] absolute bottom-0 Fast_animate"></div>
                                </div>
                                <div className="absolute bottom-[25%] lg:bottom-[20%] xl:bottom-[30%] left-5 right-5 flex justify-between items-end">
                                    <div className="">
                                        <h3 className="text-[16px] xl:text-[18px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                            SHOAIB KHAN
                                        </h3>
                                        <p className="text-[14px] lg:text-[16px] leading-normal font-light text-[#A89C6C]">
                                            Executive Director,
                                            Columbia Group
                                        </p>
                                    </div>
                                    <div className="">
                                        <div className="bg-[#A89C6C] w-[30px] h-[30px] rounded-[50%] text-center px-2 py-[7px] ">
                                            <img src="/Linkedin.svg" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[14px] lg:text-[16px] leading-normal font-light text-black mb-4">
                                    Mr. Farooq, respected for his industry insights and business acumen, has led the group for over 20 years..
                                </p>
                                <div className="flex items-center TeamButton">
                                    <div>
                                        <p className="text-[14px] lg:text-[16px] leading-normal text-[#A89C6C] font-medium">
                                            READ BIO
                                        </p>
                                    </div>
                                    <div>
                                        <FaArrowRight className="text-[#A89C6C] arrow ml-[12px] Fast_animate" />
                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>


            {/* Culture & Values Section */}

            <div className="bg-[#F3F0E7] py-[60px] lg:py-20 xl:py-[100px]">
                <div className="container">
                    <div className="flex items-center gap-4 xl:gap-[24px] mb-6 lg:mb-10 xl:mb-14">
                        <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                        <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C]">
                            CULTURE & VALUES
                        </h2>
                    </div>
                    <p className="text-black text-[30px] xl:text-[35px] leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium mb-5">
                        Guiding Principles that Drive Us
                    </p>
                    <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-light w-full lg:w-[82%] mb-10 xl:mb-[80px]">
                        Our company culture is built on a strong foundation of shared values. These values guide our decision- making, foster collaboration, and inspire us to push the boundaries of what’s possible.
                    </p>
                    <div className="flex items-start flex-wrap justify-between gap-[25px] xl:gap-[40px] mb-5 lg:mb-10 xl:mb-14">
                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-40px)]">
                            <h2 className="text-[30px] xl:text-[33px] font-medium text-black leading-[35px] xl:leading-[45px] mb-5 lg:mb-[30px]">
                                Innovation Beyond
                                Imagination
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-normal font-light text-black">
                                We embrace bold ideas and a forward-thinking approach, constantly seeking new ways to elevate the living experience beyond what’s currently imagined.
                            </p>
                        </div>
                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-40px)]">
                            <h2 className="text-[30px] xl:text-[33px] font-medium text-black leading-[35px] xl:leading-[45px] mb-5 lg:mb-[30px]">
                                Quality Beyond
                                Compare
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-normal font-light text-black">
                                We are committed to delivering exceptional quality in everything we do, from design and construction to resident service, ensuring a level of excellence that surpasses comparison.
                            </p>
                        </div>
                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-40px)]">
                            <h2 className="text-[30px] xl:text-[35px] font-medium text-black leading-[35px] xl:leading-[45px] mb-5 lg:mb-[30px]">
                                Collaboration Beyond Borders
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-normal font-light text-black">
                                We believe in the power of teamwork and foster a collaborative environment where diverse perspectives are valued and celebrated, fostering collaboration that transcends borders and limitations.
                            </p>
                        </div>
                        <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-40px)]">
                            <h2 className="text-[30px] xl:text-[35px] font-medium text-black leading-[35px] xl:leading-[45px] mb-5 lg:mb-[30px]">
                                Customer Focus Beyond Measure
                            </h2>
                            <p className="text-[16px] lg:text-[18px] leading-normal font-light text-black">
                                We put our residents at the heart of everything we do, prioritizing their needs and exceeding their expectations in ways that are beyond measure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Future OutLook */}

            <div className="bg-[url('/Future-OutLook.png')] bg-no-repeat bg-cover h-full xl:h-[866px] bg-center flex justify-center">
                <div className="bg-black bg-opacity-[20%] py-[60px] xl:py-20 xl:pb-[100px] w-full flex justify-center">
                    <div className="container">
                        <div className="flex items-center gap-4 xl:gap-[24px] mb-6 lg:mb-10 xl:mb-14">
                            <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-white"></div>
                            <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-white">
                                CULTURE & VALUES
                            </h2>
                        </div>
                        <p className="text-[20px] lg:text-[30px] xl:text-[35px] text-white leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[72%] font-medium">
                            At Zoya Developments, we’re not content with the status quo. We’re actively seeking new frontiers, bringing our visionary approach to a wider audience.
                            <br /><br />
                            This expansion will be guided by a deep understanding of local needs, ensuring we seamlessly integrate into the fabric of every new community we serve.
                        </p>
                        <p className="text-[16px] lg:text-[20px] text-white leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-light w-full lg:w-[82%] mt-5 lg:mt-10 xl:mt-14">
                            We believe the future of living is brimming with exciting possibilities. By working hand-in-hand with residents, investors, and partners who share our vision of innovation and excellence, we can create a future where exceptional living experiences are accessible to all.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;