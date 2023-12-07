import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrServices } from "react-icons/gr";
import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import WhichWeProv from "./WhichWeProv";
import {products} from "./products"
// import './product.css'
const Index = () => {

  const getProducts = () => {
    axios
      .get("")
      .then((res) => {
        if (Array.isArray(res.data.message)) {
          setProducts(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout noHeaderBg pageName={"Home"}>
      <section
        className="hero-section-one"
        style={{
          background:
            "linear-gradient(45deg, #000000a8, #00000059), url(https://media.istockphoto.com/id/1344810365/photo/fingerprint-scan-for-secure-access-to-protected-data-network-with-biometrics-person-using.jpg?s=612x612&w=0&k=20&c=0cmxijWBkp_40kJeK4XkkDuuHZlLSEwJKxYA_Uds8vU=)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="heading-boder">
            <h2>
              <span>أمان</span>
              راقب أماكنك وحافظ عليها
            </h2>
            {/* <p>Creative concepting and visual design</p> */}
            <Link href={"/services"} className="themebtu">
              المزيد من الخدمات
            </Link>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="small-services-color">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <div className="small-services">
                  <MdProductionQuantityLimits />
                  <div>
                    <p href="services.html">جوده المنتجات</p>
                    <span>نتميز بمتجاتنا الأمنه</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <div className="small-services">
                  <GrServices style={{ color: "#c9992b" }} />
                  <div>
                    <p>خدمه طوال اليوم</p>
                    <span>لدينا دعم فنى على أعلى المستوى</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <div className="small-services lest mb-0">
                  <AiOutlineTeam />
                  <div>
                    <p>فريق مميز</p>
                    <span>نمتلك كوادر فنيه</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brands-we-work one gap">
        <div className="container">
          <BrandSlider />
        </div>
      </div>
      <section className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6  col-md-12">
              <div className="welcome">
                <img alt="img" src="assets/siteimage/service1.jpg" />
                <img
                  style={{ width: "400px", height: "400px" }}
                  alt="img"
                  className="img-welcome"
                  src="assets/siteimage/serv3.webp"
                />
                <img alt="dots" className="dots" src="assets/img/dots.png" />
              </div>
            </div>
            <div className="col-xl-6 col-md-12 pl-75">
              <div className="heading design-enjoy">
                <h6>إحمى ممتلكاتك.</h6>
                <h2>
                  إستمتع بمنتجاتنا فى حمايه ممتلكاتك بمراقبتها والحفاظ عليها
                </h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
              <div className="welcome-text">
                <h6 className="pt-4 pb-5">
                  كل منتجاتنا تعمل بكفاءه عاليه لا مثيل لها لان لدينا أفضل
                  الماركات فى المراقبه
                </h6>
                <h5>تجربة المستخدم</h5>
                <p>
                  لا داعى للقلق فى الحفاظ على ما تملك لأن منتجاتنا ستساعدك فى
                  مراقبتها
                </p>
                <h5>فريق العمل</h5>
                <p>نمتلك فريق عمل رائع على اعلى المستوى.</p>
                <Link href={"/services"} className="themebtu">
                  المزيد من الخدمات
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img className="w-100" alt="line" src="assets/img/line.jpg" />
      </section>
      <section style={{ padding: "40px 0px" }} className="gap reaview-section">
        <div className="container">
          <div className="heading">
            <h6>البعض من المنتجات</h6>
            {/* <h2>ماذا يقولون عنا</h2> */}
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <Swiper {...partnerswiper} className="swiper-container partnerswiper">
            <div className="swiper-wrapper products">
              {products.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="swiper-slide">
                    <Link href={`product/${item.id}`}>
                      <div className="product">
                        <div className="product_image">
                          <img src={item.product_image} alt="" />
                        </div>
                        <div className="product_details">
                          <h4>{item.product_name}</h4>
                          <p>{item.product_description}</p>
                          {/* <h3>
                            <span>{item.price}</span>
                            <span></span>
                          </h3> */}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </div>
            <div className="swiper-button-next">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
      <section className="reaview-section whic_cont ">
        <WhichWeProv />
      </section>
      <section className="gap reaview-section">
        <div className="container">
          <div className="heading">
            <h6>أراء العملاء</h6>
            {/* <h2>ماذا يقولون عنا</h2> */}
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <Swiper {...partnerswiper} className="swiper-container partnerswiper">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    style={{ width: "120px", height: "120px" }}
                    alt="man"
                    src="assets/siteimage/person1.jpeg"
                  />
                  <p> جودة المنتجات ممتازة </p>
                  <div className="boder" />
                  <span>
                    محمود إبراهيم
                    <br />
                    {/* Manager of Terio */}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    style={{ width: "120px", height: "120px" }}
                    alt="man"
                    src="assets/siteimage/person2.jpeg"
                  />
                  <p> </p>
                  <div className="boder" />
                  <span>
                    أحمد حسين
                    <br />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    style={{ width: "120px", height: "120px" }}
                    alt="man"
                    src="assets/siteimage/person3.jpeg"
                  />
                  <p>“أفضل منتجات وجدتها عندهم”</p>
                  <div className="boder" />
                  <span>
                    أحمد إبراهيم
                    <br />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    style={{ width: "120px", height: "120px" }}
                    alt="man"
                    src="assets/siteimage/person4.jpeg"
                  />
                  <p>“أنصح الجميع بالتعامل معهم”</p>
                  <div className="boder" />
                  <span>
                    السيد عثمان
                    <br />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img
                    style={{ width: "120px", height: "120px" }}
                    alt="man"
                    src="assets/siteimage/person5.jpeg"
                  />
                  <p>“إحترام فى المواعيد والالتزام بالإتفاقات”</p>
                  <div className="boder" />
                  <span>
                    محمد على
                    <br />
                  </span>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-button-next">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
