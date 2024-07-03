import React from "react";

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
                                    3-BEDROOM APARTMENTS<br/>
                                    <span className="text-[16px] xl:text-[20px] font-normal">(+ Private Garden & Plunge Pool)</span>
                                </h3>
                                <p className="text-[16px] lg:text-[20px] xl:text-[24px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px]">
                                    xxx sq.ft - xxx sq.ft
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img src="/Description.jpg" className="block lg:hidden w-full" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectDetailPage;