import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
const Services = () => {
  return (
    <Layout noHeaderBg pageName={"Services"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>
              نوفر منتجات مراقبه
            </h2>
            {/* <a href="#">Services</a> */}
          </div>
        </div>
      </section>
      <section
        className="discovery gap no-bottom"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="heading">
                <h6>نبذه مختصره عنا</h6>
                <h2> نتميز بالكفائه فى عملنا حيث</h2>
                <img alt="line" src="assets/img/headingline.png" />
                <p>
                نحن متخصصون في تقديم أحدث الكاميرات الأمنية لحماية منزلك وعملك وأموالك. ومع التركيز على الابتكار والموثوقية ورضا العملاء، فإننا نقدم مجموعة من منتجات وخدمات المراقبة المصممة خصيصًا لتلبية احتياجاتك الأمنية.
                </p>
                {/* <a href="#" className="themebtu">
                  View Portfolio
                </a> */}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="discovery-img hoverstyle">
                <figure>
                  <img
                    style={{ height:'400px' }}
                    className="w-100"
                    alt="discovery"
                    src="assets/siteimage/team2.jpeg"
                  />
                </figure>
                <div className="discovery-text">
                  <h4>فريق عمل عالى الكفائه</h4>
                  <p style={{ color:'white' }}>
                    يتكون فريقنا من محترفين ذوي خبرة مخصصين لتقديم حلول من الدرجة الأولى.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-4">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-1.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
      <section className="digital-services gap">
        <div className="container">
          <div className="heading">
            {/* <h6>Web &amp; Digital Services</h6> */}
            <h2>
              {" "}
              بعض من مميزاتنا
            </h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row bens">
            <div className="ben">
              <div className="discovery-img  hoverstyle">
                <figure>
                  <img
                    style={{ height:'200px',objectFit:'contain' }}
                    className="w-100"
                    alt="discovery"
                    src="assets/siteimage/accu.jpeg"
                  />
                </figure>
                <div className="discovery-text two">
                <h4>تاكيد الجودة</h4>
                  <p>
                  تم تصميم كاميراتنا بأحدث التقنيات لضمان الموثوقية والمتانة، مما يوفر لك راحة البال والأمان والحفاظ على كافة الأماكن المراقبه
                  </p>
                </div>
              </div>
            </div>
            <div className="ben">
              <div className="discovery-img hoverstyle">
                <figure>
                  <img
                    style={{ height:'200px' }}
                    className="w-100"
                    alt="discovery"
                    src="assets/siteimage/experience.jpg"
                  />
                </figure>
                <div className="discovery-text two">
                <h4>حلول مخصصة</h4>
                  <p>
                  نحن نفهم أن كل عميل لديه متطلبات فريدة من نوعها. يعمل فريقنا معك بشكل وثيق لتصميم نظام كاميرات المراقبة الذي يناسبك
                  </p>
                </div>
              </div>
            </div>
            <div className="ben">
              <div className="discovery-img  hoverstyle">
                <figure>
                  <img
                    style={{ height:'200px',width:'100%' }}
                    className="w-100"
                    alt="discovery"
                    src="assets/siteimage/cear.jpg"
                  />
                </figure>
                <div className="discovery-text two">
                <h4>التثبيت الاحترافي</h4>
                  <p>
                  يضمن الفنيون المهرة لدينا التثبيت والتكوين المناسبين لنظام المراقبة الخاص بك، مما يضمن الأداء الأمثل
                  </p>
                </div>
              </div>
            </div>
            <div className="ben">
              <div className="discovery-img  hoverstyle">
                <figure>
                  <img
                    style={{height:'200px'}}
                    className="w-100"
                    alt="discovery"
                    src="assets/siteimage/techsup.jpg"
                  />
                </figure>
                <div className="discovery-text two">
                <h4>دعم 24/7</h4>

                  <p>
                  نحن نقدم دعم العملاء على مدار الساعة لمعالجة أية مشكلات أو مخاوف قد تكون لديكم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="brands-we-work gap">
        <div className="container">
          <h6>ماركات نتعامل معها</h6>
          <BrandSlider />
        </div>
      </div>
    </Layout>
  );
};
export default Services;
