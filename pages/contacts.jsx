import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Contacts = () => {
  return (
    <Layout noHeaderBg pageName={"Contact"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(/assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>تواصل معنا</h2>
          </div>
        </div>
      </section>
      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h6>تحدث معنا</h6>
            <h2>أرسل رسالتك</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form className="content-form">
                {/* <div className="row"> */}
                {/* <div className="col-lg-6"> */}
                <label className="mb-1" htmlFor="">الإسم</label>
                <input type="text" name="name" placeholder="الإسم" />
                {/* </div> */}
                {/* <div className="col-lg-6"> */}
                <label className="mb-1" htmlFor="">إسم الشركه</label>
                <input type="text" name="name" placeholder="إسم الشركه" />
                {/* </div> */}
                {/* </div> */}
                <label className="mb-1" htmlFor="">البريد الإلكترونى</label>
                <input
                  type="text"
                  name="name"
                  placeholder="البريد الإلكترونى"
                />
                <label className="mb-1" htmlFor="">الرساله</label>
                <textarea placeholder="رسالتك" defaultValue={""} />
                <button className="themebtu">إرسال</button>
              </form>
            </div>
            <div className="offset-lg-1 col-xl-5 col-lg-5">
              <ul className="sidebar">
                <li>
                  <h4>العنوان : </h4>
                  <span>
                    4004 جنوبا الى احد رفيده وشمالا إلى خميس مشيط حي العرق
                    الجنوبي8197{" "}
                  </span>
                </li>
                <li>
                  <h4>رقم الهاتف :</h4>
                  <span style={{ direction: "rtl" }}>017234567</span>
                </li>
                <li>
                  <h4>البريد الإلكترونى :</h4>
                  <a href="mailto:info@samasecuritysystems.com">
                    <span>info@samasecuritysystems.com</span>
                  </a>
                </li>
                {/* <li>
                  <h4>تجدنا هنا :</h4>
                  <ul className="brandicon">
                    <li>
                      <a
                        target="_blank"
                        href="https://facebook.com"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          style={{ width: "30px", marginLeft: "7px" }}
                          src="/assets/siteimage/www.png"
                          alt=""
                        />
                        <span>
                          {" "}
                          4004 جنوبا الى احد رفيده وشمالا إلى خميس مشيط حي العرق
                          الجنوبي8197
                        </span>
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contacts;
