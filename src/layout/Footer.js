import Link from "next/link";

const Footer = () => {
  return (
    <footer  className="gap no-bottom" style={{ backgroundColor: "#1c376c" }}>
      <div className="container">
        <div className="row row-gap-1">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="footer-logo">
              <p>
                <img style={{ maxWidth:'100%' }} alt="img" src="/assets/siteimage/footlogo2.png" />
              </p>
              <p>
                نقدم لك خدمات حمايه بمنتجاتنا
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4  col-sm-6">
            <div className="links">
              <h6>روابط إضافيه</h6>
              <ul>
                <li>
                  <Link href={"/about"}>عن الشركه</Link>
                </li>
                <li>
                  <Link href="/services">الخدمات</Link>
                </li>
                <li>
                  <Link href="/contacts">تواصل</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-4 pb-2 col-lg-4 col-md-4 col-sm-12">
            <div className="latest-news">
              {/* <h6>تواصل معنا</h6> */}
              <p>
                يمكن إراسال بريدك هنا
              </p>
              <form
                onSubmit={(e)=>{
                  e.preventDefault()
                }}
              >
                <input
                  type="text"
                  name="email"
                  placeholder="بريدك الإلكترونى"
                />
                <button>إرسال</button>
              </form>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-4 col-md-4">
            <img style={{ maxWidth:'100%' }} src="/assets/siteimage/logo3.png" alt="img" />
          </div> */}
        </div>
        <div className="footer-bottom">
          <p>نرحب بك فى موقعنا المتواصع</p>
          <ul>
            <li>
              <a target="_blank" href="https://facebook.com">
                {/* <i className="fa-brands fa-facebook-f" /> */}
                <img style={{ width:'30px' }} src="/assets/siteimage/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com">
                {/* <i className="fa-brands fa-twitter" /> */}
                <img style={{ width:'30px' }} src="/assets/siteimage/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://instagram.com">
                {/* <i className="fa-brands fa-instagram" /> */}
                <img style={{ width:'30px' }} src="/assets/siteimage/instagram.png" alt="" />

              </a>
            </li>
            <li>
              <a target="_blank" href="https://linkedin.com">
                {/* <i className="fa-brands fa-linkedin-in" /> */}
                <img style={{ width:'30px' }} src="/assets/siteimage/linkedin.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
