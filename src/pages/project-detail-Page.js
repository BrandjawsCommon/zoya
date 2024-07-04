import React from "react";
import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";



const ProjectDetailPage = () => {
    return (
        <>

            {/* Banner Section */}

            <section className="w-full h-[100vh] Banner relative">
                <video
                    src="/Banner.mp4"
                    autoPlay="true"
                    playsinline="true"
                    loop="true"
                    muted="true"
                    class="w-full h-full object-cover"
                ></video>
                <div className="container">

                    <div className="absolute bottom-0 top-0 w-full h-full flex gap-10 lg:gap-20 flex-col py-[60%] md:py-[40%] justify-between lg:py-[30%] xl:py-[20%] items-center left-0">
                        <img src="/pristine-logo.png" className="w-full max-w-[300px] md:max-w-[500px] mx-auto object-cover" />

                        <div className="px-5 sm:px-0">
                            <p className="text-[14px] lg:text-[16px] text-white leading-normal font-light">
                                A collection of apartment residences with maid’s room based in Al Furjan, Dubai.
                            </p>
                            <div className="flex justify-between flex-wrap w-full mt-5 lg:mt-10 gap-5 sm:gap-0">
                                <div className="w-[calc(50%-20px)] sm:w-auto">
                                    <h4 className="text-white text-[16px] lg:text-[20px] uppercase">
                                        Apartments
                                    </h4>
                                    <h5 className="text-[13px] lg:text-[15px] uppercase text-white mt-2">
                                        Project Type
                                    </h5>
                                </div>
                                <div className="w-[calc(50%-20px)] sm:w-auto">
                                    <h4 className="text-white text-[16px] lg:text-[20px] uppercase">
                                        67
                                    </h4>
                                    <h5 className="text-[13px] lg:text-[15px] uppercase text-white mt-2">
                                        Units
                                    </h5>
                                </div>
                                <div className="w-[calc(50%-20px)] sm:w-auto">
                                    <h4 className="text-white text-[16px] lg:text-[20px] uppercase">
                                        Al Furjan, Dubai
                                    </h4>
                                    <h5 className="text-[13px] lg:text-[15px] uppercase text-white mt-2">
                                        Location
                                    </h5>
                                </div>
                                <div className="w-[calc(50%-20px)] sm:w-auto">
                                    <h4 className="text-white text-[16px] lg:text-[20px] uppercase">
                                        Q4, 2024
                                    </h4>
                                    <h5 className="text-[13px] lg:text-[15px] uppercase text-white mt-2">
                                        Completion
                                    </h5>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Description Section */}

            <div className="descriptionSection py-[60px] lg:py-20 xl:py-[100px] overflow-hidden relative h-auto lg:h-screen flex">
                <div className="container">
                    <div className="flex items-center lg:flex-row flex-col gap-5 lg:gap-0">

                        <div className="w-full lg:w-1/2 flex-col flex">
                            <div className="flex items-center gap-4 xl:gap-[24px] mb-5 lg:mb-10 xl:mb-14">
                                <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                                <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C] uppercase">
                                    Description
                                </h2>
                            </div>
                            <p className="text-[20px] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium">
                                IMAGINE A HOME<br />
                                AS ORIGINAL AS YOU ARE.
                            </p>
                            <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-light w-full lg:w-[90%] mt-5 lg:mt-10">
                                Imagine a home where serenity meets space; where every day feels like a fresh start. A place within a flourishing greenscape. A life away from city’s chaos, and yet close to everything you want. A nest for those who crave a blank canvas for their dreams.<br />
                                This could be yours.<br />
                                Welcome to a place designed for effortless living
                                and endless possibilities.
                            </p>
                            <div className="flex gap-1 lg:gap-5 justify-between flex-wrap lg:justify-start xl:gap-10 mt-5 lg:mt-10">
                                <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px]">
                                    1-BEDROOM APARTMENTS
                                </h3>
                                <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px]">
                                    xxx sq.ft - xxx sq.ft
                                </p>
                            </div>
                            <div className="flex gap-1 lg:gap-5 justify-between flex-wrap lg:justify-start xl:gap-10 mt-3 lg:mt-5">
                                <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px]">
                                    2-BEDROOM APARTMENTS
                                </h3>
                                <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px]">
                                    xxx sq.ft - xxx sq.ft
                                </p>
                            </div>
                            <div className="flex gap-1 lg:gap-5 justify-between flex-wrap lg:justify-start xl:gap-10 mt-3 lg:mt-5">
                                <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px]">
                                    3-BEDROOM APARTMENTS<br />
                                    <span className="text-[16px] xl:text-[20px] font-normal">(+ Private Garden & Plunge Pool)</span>
                                </h3>
                                <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px]">
                                    xxx sq.ft - xxx sq.ft
                                </p>
                            </div>
                            <div className="mt-5 lg:mt-10 xl:mt-14 w-full max-w-[300px]">
                                <Link className="Btn !flex gap-5 items-center" href="/connect_with_us">
                                    Download Brochure
                                    <span><CgNotes /></span>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img src="/Description.jpg" className="block lg:hidden w-full" />
                        </div>

                    </div>
                </div>
            </div>

            {/* Gallery Slider Section */}

            <div className="bg-[url('/Gallery-Image.jpg')] py-[60px] lg:py-20 h-screen relative">
                <div className="bg-black opacity-30 h-screen w-full absolute top-0"></div>
                <div className="container flex flex-col justify-between h-full">

                    <div className="relative z-10 flex items-center flex-wrap justify-between">

                        <div className="flex items-center gap-4 xl:gap-[24px] mb-5 w-full  lg:mb-0 lg:w-[30%] xl:w-[40%]">
                            <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-white"></div>
                            <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-white uppercase">
                                Description
                            </h2>
                        </div>

                        <div className="w-full lg:w-[70%] xl:w-[60%] text-right hidden md:block">
                            <div className="w-full  mr-0 ml-auto border border-white rounded-[100px] px-3 py-3 bg-[rgba(255,255,255,0.08)] text-center">
                                <Link href="#." className="text-white uppercase px-6 py-2 text-[14px] xl:text-[16px] leading-normal hover:bg-[#213A6F] transition-all ease-in-out hover:rounded-[100px]">
                                    3 Bedroom
                                </Link>
                                <Link href="#." className="text-white uppercase px-6 py-2 text-[14px] xl:text-[16px] leading-normal hover:bg-[#213A6F] transition-all ease-in-out hover:rounded-[100px]">
                                    2 Bedroom
                                </Link>
                                <Link href="#." className="text-white uppercase px-6 py-2 text-[14px] xl:text-[16px] leading-normal hover:bg-[#213A6F] transition-all ease-in-out hover:rounded-[100px]">
                                    1 Bedroom
                                </Link>
                                <Link href="#." className="text-white uppercase px-6 py-2 text-[14px] xl:text-[16px] leading-normal hover:bg-[#213A6F] transition-all ease-in-out hover:rounded-[100px]">
                                    INTERIORS
                                </Link>
                                <Link href="#." className="text-white uppercase px-6 py-2 text-[14px] xl:text-[16px] leading-normal hover:bg-[#213A6F] transition-all ease-in-out hover:rounded-[100px]">
                                    EXTERIORS
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="relative z-10 bottom-0">

                        <div className="flex items-center justify-between flex-wrap">

                            <div className="w-full md:w-[70%]">
                                <Link href="#" className="pointer-events-none text-[16px] lg:text-[20px] leading-normal text-white bg-[#A89C6C] px-[16px] py-[4px] rounded-[100px]">
                                    Interior
                                </Link>
                                <p className="text-white mt-5 !w-full text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px]">
                                    An exclusive collection of podium residences with a private pool and garden.
                                </p>
                            </div>

                            <div className="w-full md:w-[30%]">

                                <div className="flex justify-end items-center text-white gap-5 lg:gap-10">

                                    <div className="border border-white rounded-[50%] px-3 lg:px-5 py-3 lg:py-5 cursor-pointer hover:bg-[#A89C6C] Fast_animate">
                                        <LiaAngleLeftSolid className="text-[18px] lg:text-[22px]" />
                                    </div>

                                    <div className="border border-white rounded-[50%] px-3 lg:px-5 py-3 lg:py-5 cursor-pointer hover:bg-[#A89C6C] Fast_animate">
                                        <LiaAngleRightSolid className="text-[18px] lg:text-[22px]" />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Neighbourhood Section */}

            <div className="NeighbourhoodSection py-[60px] lg:py-20 xl:py-[100px] overflow-hidden relative h-auto lg:h-screen flex">
                <div className="container">
                    <div className="flex items-center lg:flex-row flex-col gap-5 lg:gap-10">

                        <div className="w-full lg:w-1/2 flex-col flex">
                            <div className="flex items-center gap-4 xl:gap-[24px] mb-5 lg:mb-10 xl:mb-14">
                                <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                                <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C] uppercase">
                                    Neighbourhood
                                </h2>
                            </div>
                            <p className="text-[20px] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium">
                                The place to be.
                            </p>
                            <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-light w-full lg:w-[90%] mt-5 lg:mt-8 mb-5 lg:mb-10">
                                Pristine is woven in Al Furjan’s fabric and is minutes away from major landmarks of Dubai.
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)]">
                                    <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-medium text-[#A89C6C]">
                                        03 mins.
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] leading-[18.18px] lg:leading-[20.19px] uppercase font-semibold mt-2">
                                        Al Furjan metro station
                                    </p>
                                </div>
                                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)]">
                                    <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-medium text-[#A89C6C]">
                                        04 mins.
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] leading-[18.18px] lg:leading-[20.19px] uppercase font-semibold mt-2">
                                        lbn battuta mall
                                    </p>
                                </div>
                                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)]">
                                    <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-medium text-[#A89C6C]">
                                        15 mins.
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] leading-[18.18px] lg:leading-[20.19px] uppercase font-semibold mt-2">
                                        The beach JBr
                                    </p>
                                </div>
                                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] mt-0">
                                    <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-medium text-[#A89C6C]">
                                        18 mins.
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] leading-[18.18px] lg:leading-[20.19px] uppercase font-semibold mt-2">
                                        Palm jumeirah
                                    </p>
                                </div>
                                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] mt-0">
                                    <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-medium text-[#A89C6C]">
                                        28 mins.
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] leading-[18.18px] lg:leading-[20.19px] uppercase font-semibold mt-2">
                                        downtown dubai
                                    </p>
                                </div>
                                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] mt-0">
                                    <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-medium text-[#A89C6C]">
                                        30 mins.
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] leading-[18.18px] lg:leading-[20.19px] uppercase font-semibold mt-2">
                                        al maktoum airport
                                    </p>
                                </div>
                                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] mt-0">
                                    <h3 className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-medium text-[#A89C6C]">
                                        30 mins.
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] leading-[18.18px] lg:leading-[20.19px] uppercase font-semibold mt-2">
                                        Dubai international airport
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img src="/Project-Detail-Page-Map.png" className="block lg:hidden w-full" />
                        </div>

                    </div>
                </div>
            </div>

            {/* RoofTop Setion */}

            <div className="bg-white py-[60px] lg:py-20 xl:py-[100px] overflow-hidden">
                <div className="container">
                    <div className="flex items-center gap-4 xl:gap-[24px] mb-5 lg:mb-10 xl:mb-14">
                        <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                        <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C] uppercase">
                            ROOFTOP AMENITIES
                        </h2>
                    </div>
                    <p className="text-[20px] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium">
                        Time to unwind
                    </p>
                    <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-light w-full lg:w-[55%] mt-5 lg:mt-8 mb-5 lg:mb-10">
                        Find your fix from a bouquet of rooftop amenities at Pristine, where there’s something for everyone.
                    </p>

                    <div className="flex flex-wrap gap-5 items-center w-full justify-start lg:justify-between">
                        <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(12%-20px)]">
                            <img src="/health-club.svg" className="w-full max-w-[50px]" />
                            <p className="text-[14px] leading-[18.18px] uppercase font-semibold mt-5">
                                health club
                            </p>
                        </div>
                        <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(12%-20px)]">
                            <img src="/Sauna.svg" className="w-full max-w-[50px]" />
                            <p className="text-[14px] leading-[18.18px] uppercase font-semibold mt-5">
                                Sauna for Him & Her
                            </p>
                        </div>
                        <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(12%-20px)]">
                            <img src="/Swimming.svg" className="w-full max-w-[50px]" />
                            <p className="text-[14px] leading-[18.18px] uppercase font-semibold mt-5">
                                Swimming Pool
                            </p>
                        </div>
                        <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(12%-20px)]">
                            <img src="/Outdoor.svg" className="w-full max-w-[50px]" />
                            <p className="text-[14px] leading-[18.18px] uppercase font-semibold mt-5">
                                Outdoor Poolside Cinema
                            </p>
                        </div>
                        <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(12%-20px)]">
                            <img src="/Play-Area.svg" className="w-full max-w-[50px]" />
                            <p className="text-[14px] leading-[18.18px] uppercase font-semibold mt-5">
                                Kids Play Area
                            </p>
                        </div>
                        <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(12%-20px)]">
                            <img src="/Yoga.svg" className="w-full max-w-[50px]" />
                            <p className="text-[14px] leading-[18.18px] uppercase font-semibold mt-5">
                                Outdoor Yoga
                            </p>
                        </div>
                        <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(12%-20px)]">
                            <img src="/BBQ.svg" className="w-full max-w-[50px]" />
                            <p className="text-[14px] leading-[18.18px] uppercase font-semibold mt-5">
                                Barbeque Area
                            </p>
                        </div>
                        <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(12%-20px)]">
                            <img src="/Room.svg" className="w-full max-w-[50px]" />
                            <p className="text-[14px] leading-[18.18px] uppercase font-semibold mt-5">
                                Recreation Room
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Single Image */}

            <img src="/Single-Image.jpg" className="w-full h-[400px] lg:h-full object-cover object-[-100px] md:object-[-50px] lg:object-left" />

            {/* Developer Section */}

            <div className="py-[60px] xl:py-20 bg-[#213A6F] text-white">
                <div className="container">
                    <div className="flex items-center gap-4 xl:gap-[24px] mb-5 lg:mb-10 xl:mb-14">
                        <div className="w-[40px] lg:w-[60px] xl:w-20 h-[1px] bg-[#A89C6C]"></div>
                        <h2 className="text-[20px] xl:text-[24px] font-normal leading-normal text-[#A89C6C] uppercase">
                            THE DEVELOPER
                        </h2>
                    </div>
                    <h2 className="text-[30px] md:text-[35px] lg:text-[40px] xl:text-[60px] mb-5 lg:mb-10 xl:mb-14">
                        EXPERIENCE | LEGACY.
                    </h2>
                    <p className="text-[20px] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] w-full xl:w-[95%] font-medium">
                        <span className="text-[#A89C6C]">Zoya Developments </span>began its journey driven by a vision of developing modern spaces that merge craftsmanship and liveability. In the last 14 years, we have set new standards in creating unparalleled living spaces and delivering exceptional value for our customers.
                    </p>
                    <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-light w-full lg:w-[82%] mt-5 lg:mt-10 xl:mt-14">
                        Dubai’s visionary leadership and forward-thinking initiatives have brought it into the global spotlight, making it an ideal destination for Zoya Developments to expand. With a customer-centric approach at our core, we look forward to crafting extraordinary experiences and exceeding expectations in this vibrant city.
                    </p>
                </div>
            </div>

            {/* Form Section */}

            <div className="py-[60px] xl:py-20">
                <div className="container">

                    <div className="flex flex-wrap justify-between">

                        <div className="w-full md:w-[40%] lg:w-[50%]">
                            <h2 className="text-[30px] md:text-[35px] lg:text-[40px] xl:text-[60px]">
                                <span className="text-[#A89C6C]">Register</span><br />
                                Your Interest
                            </h2>
                            <p className="text-[16px] xl:text-[20px] font-normal w-full md:w-[90%]  lg:w-[60%] mt-5 mb-5">
                                For more general enquiries
                                or to simply say hello, reach out to us.
                            </p>
                        </div>

                        <div className="Inner_Section w-full md:w-[60%] lg:w-[50%]">
                            <form>
                                <div className="flex justify-between flex-wrap">
                                    <input type="text" name="" placeholder="First Name" />
                                    <input type="text" name="" placeholder="Last Name" />
                                </div>
                                <div className="flex justify-between flex-wrap my-8">
                                    <input type="email" name="" placeholder="Email Address" />
                                    <input type="text" name="" placeholder="Company name" />
                                </div>
                                <textarea
                                    className="w-full min-h-44 mb-8"
                                    placeholder="Type you enquiries here.."
                                />
                                <button className="transparentBtn">Send</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ProjectDetailPage;