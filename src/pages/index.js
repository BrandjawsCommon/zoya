import React from "react";
import Head from "next/head";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ContactForm from "../components/ContactForm/ContactForm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const newsData = [
  {
    picture:
      "https://www.arabianbusiness.com/cloud/2024/07/08/zoya-developments-Dubai-real-estate.jpg",
    title:
      "Dubai real estate: India’s Zoya Developments announces $545m UAE investment plan",
    date: "09th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.arabianbusiness.com/industries/real-estate/dubai-real-estate-indias-zoya-developments-announces-545m-uae-investment-plan",
  },
  {
    picture:
      "https://image.khaleejtimes.com/?uuid=e4f03625-e3e3-5e18-a131-1fccca3d5b54&function=fit&type=preview&source=false&q=75&maxsize=1500&scaleup=0",
    title: "Indian realtor plans Dh2 billion investments in Dubai",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.khaleejtimes.com/business/realty/indian-realtor-plans-dh2-billion-investments-in-dubai",
  },
  {
    picture:
      "https://gulftoday.ae/-/media/gulf-today/images/articles/news/2024/7/5/zoya-developments.ashx?h=450&iar=0&w=750&hash=5C4B62F9AA2FE4F95DE282611DBB0B12",
    title:
      "Indian developer enters into Dubai market, plans over Dhs2b investment",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://gulftoday.ae/business/2024/07/05/indian-developer-enters-into-dubai-market-plans-over-dhs2b-investment",
  },
  {
    picture:
      "https://cdn.gccbusinessnews.com/wp-content/uploads/2024/07/05185033/Zoya-Developments-enters-UAE.jpg",
    title: "Indian real estate firm Zoya Developments enters UAE",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.gccbusinessnews.com/india-based-zoya-developments-in-uae/",
  },
  {
    picture:
      "https://cdn.gccbusinessnews.com/wp-content/uploads/2024/07/05185033/Zoya-Developments-enters-UAE.jpg",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED2 billion allocated for the next 3 years",
    date: "07th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.gccbusinessnews.com/india-based-zoya-developments-in-uae/",
  },
  {
    picture:
      "https://www.constructionweekonline.com/cloud/2024/07/08/Soon-to-be-unveiled.jpg",
    title: "Indian developer enters Dubai market, plans AED2bn investment",
    date: "08th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.constructionweekonline.com/projects-tenders/indian-developer-enters-dubai-market-plans-aed2bn-investment",
  },
  {
    picture:
      "https://wp-constructionweekproperty.s3-accelerate.amazonaws.com/cloud/2024/07/05/Soon-to-be-unveiled.jpg",
    title:
      "Indian developer Zoya Developments makes its Dubai debut with $544 million investment",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://property.constructionweekonline.com/indian-developer-zoya-developments-makes-its-dubai-debut-with-544-million-investment/",
  },
  {
    picture:
      "https://www.alkhaleej.ae/sites/default/files/styles/d10_standard/public/2024-07/6155057.jpeg.webp?h=d1ee6398&itok=PXr9XeEJ",
    title:
      "Sustainability and technology are the most important pillars of modern homes",
    date: "",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.alkhaleej.ae/2024-07-10/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA-%D8%A3%D9%87%D9%85-%D8%A3%D8%B1%D9%83%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B2%D9%84-%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA",
  },
  {
    picture:
      "https://globaltrendmonitor.com/wp-content/uploads/2024/07/Soon-to-be-unveiled1-696x596.jpg",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED 2 Billion allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://globaltrendmonitor.com/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://asianewstrends.com/wp-content/uploads/2024/07/soon-to-be-unveiled1.jpg?w=723",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED 2 Billion allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://asianewstrends.com/2024/07/05/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://www.bizpreneurme.com/wp-content/uploads/2024/07/L-R-Shoiab-Zoya-Imtiaz1.jpg",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED 2 Billion allocated for the next 3 years",
    date: "",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.bizpreneurme.com/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://arabdaily.ae/wp-content/uploads/2024/07/L-R-Imtiaz-Zoya-Shoiab-Khan.jpg",
    title:
      "Zoya developments makes landmark entry into dubai with investment of over AED 2 billion allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://arabdaily.ae/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://thebrewnews.com/wp-content/uploads/2024/07/L-R-Shoiab-Zoya-Imtiaz-Zoya-Developments-Real-Estate-Dubai.webp",
    title: "Indian developer announces landmark entry into Dubai real estate",
    date: "07th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://thebrewnews.com/brew-circle/indian-developer-announces-landmark-entry-into-dubai-real-estate/",
  },
  {
    picture: "https://menafn.com/updates/pr/2024-07/05/KT_b43f8image_story.jpg",
    title: "Indian Realtor Plans Dh2 Billion Investments In Dubai",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.propertynews.ae/uae/an-indian-realtor-plans-to-invest-dh2-billion-in-dubai/",
  },
  {
    picture:
      "https://static.zawya.com/view/acePublic/alias/contentid/ZmRiOWE3N2EtM2M0ZS00/0/l-rimtiaz-zoya-shoiabkhan-jpg.webp?f=3%3A2&q=0.75&w=640",
    title:
      "Zoya Developments makes landmark entry into Dubai with investment of over AED 2bln allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.zawya.com/en/press-release/companies-news/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2bln-allocated-for-the-next-3-years-jur7u4w0",
  },
  {
    picture:
      "https://i0.wp.com/mid-east.info/wp-content/uploads/2024/07/Soon-to-be-unveiled.jpg?fit=1000%2C857&ssl=1",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED 2 Billion allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://mid-east.info/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://www.tradearabia.com/source/2024/07/05/zoya3.jpg?07:04:30pm",
    title: "Zoya Developments enters UAE, to invest $540m over 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.tradearabia.com/news/CONS_423866.html",
  },
  {
    picture:
      "https://dubainewsweek.com/wp-content/uploads/2024/07/Zoya-Developments.webp",
    title:
      "Indian developer enters UAE real estate market with over Dhs2 billion investment",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://dubainewsweek.com/indian-developer-enters-uae-real-estate-market-with-over-dhs2-billion-investment/",
  },
  {
    picture:
      "https://i0.wp.com/mid-east.info/wp-content/uploads/2024/07/Soon-to-be-unveiled.jpg?fit=1000%2C857&ssl=1",
    title:
      "Indian Developer Sets Sights on Dubai with Multi-Billion Dirham Investment",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://menews247.com/zoya-developments-makes-landmark-entry-into-dubai/",
  },
  {
    picture:
      "https://uaenews247.com/wp-content/uploads/2024/07/soon-to-be-unveiled1.jpg?w=1000",
    title: "Zoya developments makes landmark entry into dubai",
    date: "06th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.1arabia.com/2024/07/indian-developer-sets-sights-on-dubai.html?m=1",
  },
  {
    picture:
      "https://uaenews247.com/wp-content/uploads/2024/07/soon-to-be-unveiled1.jpg?w=1000",
    title: "India’s Zoya Developments to invest AED 2bn in Dubai",
    date: "08th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://english.mubasher.info/news/4310879/India-s-Zoya-Developments-to-invest-AED-2bn-in-Dubai",
  },
];

const Index = () => {
  return (
    <>
      <Head>
        <title>Home - Zoya</title>
        <link rel="icon" href="/Fav_Icon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16635261680"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16635261680');
            `,
          }}
        />
      </Head>
      <Header />

      {/* Banner Section */}
      <section className="w-full h-[80vh] lg:h-screen Banner relative">
        <video
          src="/Banner.mp4"
          autoPlay="true"
          playsinline="true"
          loop="true"
          muted="true"
          class="w-full h-full object-cover"
        ></video>
      </section>

      {/* About Section */}
      <section className="py-[60px] pb-[200px] lg:py-28 lg:!pb-56 relative">
        <div className="container">
          <h6 className="text-themeDarkBeige subHeading uppercase mb-14">
            About
          </h6>
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-[60%]">
              <p className="paragraph font-light text-black">
                We believe real estate is all about people. From cozy homes to
                mega communities, its founded on human needs, aspirations and
                dreams. Our journey in development is deeply rooted in these
                connections, where each project becomes a medium for human
                expression, inspiration and creativity.
              </p>
              <h4 className="text-[20px] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] my-5 lg:my-10 xl:mt-12 xl:mb-9">
                Welcome to
                <span className="text-themeDarkBeige">
                  {" "}
                  Zoya Developments,{" "}
                </span>
                Where people always come first and Where every experience
                contributes to a lasting legacy.
              </h4>
              <div className="flex justify-between mb-9 flex-wrap md:flex-nowrap">
                <div className="flex flex-wrap justify-between py-4 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                    14 <span className="text-[24px] leading-[1.2]">Years</span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    Development Experience
                  </p>
                </div>
                <div className="flex flex-wrap justify-between py-4 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                    100,000 <span className="text-[24px] leading-[1.2]">+</span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    Units Delivered
                  </p>
                </div>
                <div className="flex flex-wrap justify-between py-4 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                  2,000,000{" "}
                    <span className="text-[24px] leading-[1.2]">Sq.ft</span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    Area Developed
                  </p>
                </div>
              </div>

              <Link className="Btn" href="#.">
                Explore
              </Link>
            </div>
            <div className="w-full lg:w-[40%] pt-14 md:pt-14 pl-0 lg:pl-10 xl::pl-24">
              <video
                src="/Zoya-About.mp4"
                autoPlay="true"
                playsinline="true"
                loop="true"
                muted="true"
                class="w-full h-[500px] object-cover"
              ></video>
            </div>
          </div>
        </div>
        <div className="absolute about_img w-[380px] md:w-[450px] lg:w-[800px] left-0 mx-auto right-0 lg:left-auto lg:right-10 bottom-0">
          <img
            className="w-full max-w-[100%] md:max-w-[90%] lg:max-w-[65%] xl:max-w-[520px] mx-auto"
            src="/White_logo.png"
          />
        </div>
      </section>

      {/* Portfolio Section Start */}
      <section className="h-[100vh] md:h-screen relative flex items-center justify-center overlay">
        <img class="w-full h-full object-cover" src="/Portfolio-updated.png" />
        <div className="absolute z-10 w-full bottom-[100px]">
          <div className="container">
            {/* <div className="flex flex-wrap md:flex-nowrap gap-7 md:gap-0 justify-between items-end">
              <div className="w-full">
                <p className="text-white text-xl">
                  A collection of apartment residences with maid’s room based in
                  Al Furjan, Dubai.
                </p>
                <div className="flex flex-wrap gap-6 md:gap-10 !mt-10 my-6">
                  <div>
                    <p className="uppercase text-2xl font-medium text-white mb-2">
                      Apartments
                    </p>
                    <p className="text-base text-themeDarkBeige uppercase">
                      Project Type
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-2xl font-medium text-white mb-2">
                      67
                    </p>
                    <p className="text-base text-themeDarkBeige uppercase">
                      Unit
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-2xl font-medium text-white mb-2">
                      Al Furjan, Dubai
                    </p>
                    <p className="text-base text-themeDarkBeige uppercase">
                      Location
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-2xl font-medium text-white mb-2">
                      Q4, 2024
                    </p>
                    <p className="text-base text-themeDarkBeige uppercase">
                      Completion
                    </p>
                  </div>
                </div>
                <h2 className="text-themeSoftPeach font-normal uppercase">
                  PRISTINE
                </h2>
                <p className="text-themeSoftPeach font-semibold uppercase my-6 !mb-0">
                  BY ZOYA developments
                </p>
              </div>
              <a
                href="#."
                className="Arrow_Icon flex h-[70px] w-[70px] items-center justify-center rounded-[50px] border-2 border-white text-[30px] text-white"
              >
                <FaChevronRight />
              </a>
            </div> */}

            <div>
              <h4 className="text-themeSoftPeach text-[24px] mb-5 md:text-[32px] lg:text-[40px] leading-[1.5] font-normal uppercase">
                Pristine by Zoya <br /> Al Furjan | Dubai
              </h4>
              <h2 className="text-[35px] lg:text-[40px] xl:text-[70px] text-white uppercase">
                Coming Soon
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section Start */}
      <section className="py-20 spotlightSection bg-white">
        <div className="container">
          <div className="w-full flex flex-wrap gap-6 md:gap-0 justify-between items-center mb-20 md:mb-20 z-10 relative">
            <h4 className=" text-black font-medium">
              <span className="text-themeDarkBeige">ZOYA</span> in The Spotlight
            </h4>
            <a className="Btn" href="#.">
              Explore
            </a>
          </div>
          <div className="w-full">
            <Swiper
              slidesPerView={4}
              loop={false}
              spaceBetween={30}
              breakpoints={{
                290: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                980: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              {newsData.map((item, news) => {
                return (
                  <SwiperSlide>
                    <Link href={item.link} target="_blank">
                      <img
                        className="w-full h-[200px] object-cover"
                        src={item.picture}
                      />
                      <div className="flex justify-between mt-3">
                        <p className="font-light text-sm">{item.date}</p>
                        <p className="font-medium text-sm">{item.category}</p>
                      </div>
                      <p className="paragraph font-medium text-black my-4 mb-3">
                        {item.title}
                      </p>
                      <Link
                        className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                        href={item.link} target="_blank"
                      >
                        {item.button}
                        <FaArrowRight />
                      </Link>
                    </Link>
                  </SwiperSlide>
                );
              })}

              {/* <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide2.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide3.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide4.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide1.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide2.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Regirster Section Start */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap gap-9 md:gap-0 justify-between">
            <div className="w-full md:w-[45%] hide_Br">
              <div className="max-w-full md:max-w-[400px]">
                <h2 className="font-medium mb-3 md:mb-6">
                  <span className="text-themeDarkBeige">Register</span>
                  <br></br> Your Interest
                </h2>
                <p className="paragraph font-medium">
                  For more general enquiries or to simply say hello, reach out
                  to us.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[55%]">
              {/* <form>
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
              </form> */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
