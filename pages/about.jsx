import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { studiesswiper ,brandswiper} from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa6'
import { MdPrecisionManufacturing } from "react-icons/md";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
const About = () => {
  return (
    <Layout noHeaderBg pageName={"About"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
              <h2>
                عن المؤسسة
                <br />
              </h2>
            </div>
          </div>
        </section>
        <section className="things-differently gap">
          <div className="container">
            <div className="row about_found" style={{ justifyContent:'center' }}>
              <div className="col-xl-4 col-md-12 aboimg">
                <div className="heading abo">
                  <h6> عن المؤسسة </h6>
                  <img style={{maxWidth:'100%',borderRadius:'10px'}} src="/assets/siteimage/logo3.png"/>
                  {/* <h2>
                    We do
                    <br />
                    things differently
                  </h2> */}
                  {/* <img
                    alt="line"
                    src={
                      "https://media.istockphoto.com/id/1322517295/photo/cyber-security-it-engineer-working-on-protecting-network-against-cyberattack-from-hackers-on.jpg?s=612x612&w=0&k=20&c=htR0b1KO2UFS_R1FWiJOsPfIwf3xBtKXd7FXb4KS0Ls="
                    }
                  /> */}
                  {/* <img alt="dots" className="dots" src="assets/img/dots.png" /> */}
                </div>
              </div>
              <div className="col-xl-5 col-md-12 abo">
                <div className="signature">
                  <p>
                    نمتلك طاقما مميزا من المحللين والمبرمجين الذين تم اختيارهم
                    وفق أعلى مقاييس الجوده والكفائه للعمل على
                  </p>
                  <p>تصميم المواقع الإلكترونيه</p>
                  <p>تنفيذ البرامج الحكوميه الإداريه المختلفه</p>
                  <p>
                    تنفيذ برامج نقاط البيع والمخزون الخاص بالمتاجر والمطاعم
                    والصيدليات
                  </p>
                  <p>تنفيذ الأنظمه المحاسبيه المختلفه</p>
                  <p>
                    توريد وتركيب وصيانه اجهزه الحاسب الالى العالميه وبالاخص del
                    , hp , lenovo , toshipa
                  </p>
                  <p>
                    تنفيذ وتوريد وصيانه جميع انواع شبكات الحاسب الالى السلكيه
                    واللاسلكيه
                  </p>
                  <div className="ceo">
                    <div>
                      {/* <img
                        alt="img"
                        src={require("../public/assets/img/signature.png")}
                      /> */}
                      {/* <span>CEO, John Doe</span> */}
                    </div>
                    {/* <a href="team.html" className="themebtu">
                      Meet The Team
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="we-deliver-results gap"
          style={{ backgroundColor: "#f2edf5" }}
        >
          <div className="container">
            <div className="heading two">
              <h2>نضمن لك</h2>
              {/* <img alt="line" src="assets/img/headingline.png" /> */}
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shield-check-filled"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <h4>حمايه ممتلكاتك</h4>
                  <p style={{fontSize:'13px'}}>
                    يمكنك حمايه كل ممكتلكاتك من البيوت أو المصانع أو العقارات أو
                    المحلات
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail-fast"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7h3"></path>
                    <path d="M3 11h2"></path>
                    <path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z"></path>
                    <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982"></path>
                  </svg>
                  <h4>سرعه الرد على الاسئله</h4>
                  <p style={{fontSize:'13px'}}>
                    لدينا فريق دعم كامل وسريع فى الرد على الأشخاص بكل ود واحترام
                    وتلبية إحتياجاتهم
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-cashapp"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17.1 8.648a.568 .568 0 0 1 -.761 .011a5.682 5.682 0 0 0 -3.659 -1.34c-1.102 0 -2.205 .363 -2.205 1.374c0 1.023 1.182 1.364 2.546 1.875c2.386 .796 4.363 1.796 4.363 4.137c0 2.545 -1.977 4.295 -5.204 4.488l-.295 1.364a.557 .557 0 0 1 -.546 .443h-2.034l-.102 -.011a.568 .568 0 0 1 -.432 -.67l.318 -1.444a7.432 7.432 0 0 1 -3.273 -1.784v-.011a.545 .545 0 0 1 0 -.773l1.137 -1.102c.214 -.2 .547 -.2 .761 0a5.495 5.495 0 0 0 3.852 1.5c1.478 0 2.466 -.625 2.466 -1.614c0 -.989 -1 -1.25 -2.886 -1.954c-2 -.716 -3.898 -1.728 -3.898 -4.091c0 -2.75 2.284 -4.091 4.989 -4.216l.284 -1.398a.545 .545 0 0 1 .545 -.432h2.023l.114 .012a.544 .544 0 0 1 .42 .647l-.307 1.557a8.528 8.528 0 0 1 2.818 1.58l.023 .022c.216 .228 .216 .569 0 .773l-1.057 1.057z"></path>
                  </svg>
                  <h4>أفضل سعر</h4>
                  <p style={{fontSize:'13px'}}>
                    لدينا أفضل سعر للمنتجات بكفاءه عاليه الجوده فلا يوجد منافس
                    لنا فى الاسعار
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text">
                  <MdPrecisionManufacturing />
                  <h4>الكفائه</h4>
                  <p style={{fontSize:'13px'}}>كفائه المنتجات ودقة عملها</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="counter-style gap">
          <div className="container">
            <TerioCounter />
          </div>
        </div>
        <section className="offices gap" style={{ backgroundColor: "#f3f8fb" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="heading">
                  <h2>أراء العملاء</h2>
                  <p>يمكنك مشاهده ما قاله عملائنا من هنا</p>
                </div>
              </div>
              <div className="col-xl-8 aboswip">
                <div className="branddd aboswip">
                <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  {...studiesswiper}
                  className="swiper-container studiesswiper brandswiper"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="client-review">
                        <i className="fa-solid fa-quote-left" />
                        <h4>أحمد إبراهيم</h4>
                        <p>" لقد أمنت بيتى بمنتجاتهم الرائعه“</p>
                        {/* <span>Milly Carson (Designer)</span> */}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="client-review">
                        <i className="fa-solid fa-quote-left" />
                        <h4>محمود السعيد</h4>
                        <p>"لقد سررت بالتعامل مع هذا المكان الرائع”</p>
                        {/* <span>Caspar Galloway (Product Manager)</span> */}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="client-review">
                        <i className="fa-solid fa-quote-left" />
                        <h4>يوسف محمد</h4>
                        <p>"تواصلهم جيد جدا ويردون بسرعه“</p>
                        {/* <span>Quentin (Content Specialist)</span> */}
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="swiper-pagination" />
                  <div class="swiper-button-next aboswip-next">
                    <FaArrowRight style={{fontSize:'30px'}}/>
                  </div>
                  <div class="swiper-button-prev aboswip-prev">
                    <FaArrowRight style={{fontSize:'30px'}}/>
                  </div>
                </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-hero__shapes">
            <div className="style-shapes-5">
              <img alt="dots1" src="assets/img/shap-2.png" />
            </div>
            <div className="style-shapes-6">
              <img alt="dots1" src="assets/img/shap-2.png" />
            </div>
            <div className="style-shapes-7">
              <img alt="dots1" src="assets/img/shap-5.png" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default About;
