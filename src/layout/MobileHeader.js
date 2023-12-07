import Link from "next/link";
import { useState } from "react";
const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) => (value == activeMenu ? "active" : "");
  return (
    <div
      className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`}
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <Link href="/">
          <img src="/assets/siteimage/logo.png" alt="Responsive Logo" />
        </Link>
      </div>
      <ul>
      <li>
                <Link legacyBehavior href="/">
                  الرئيسيه
                </Link>
                {/* <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="/">
                      homepage 1
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-2">
                      homepage 2
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-3">
                      homepage 3
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link legacyBehavior href="/products">
                  المنتجات
                </Link>
              </li>
              {/* <li>
                <Link legacyBehavior href="about">
                  Pages
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="about">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="team">
                      team
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="pricing">
                      pricing
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="404error">
                      404 error
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                    <Link legacyBehavior href="/about">
                      عن الشركه
                    </Link>
                  </li>
                  {/* <li>
                    <Link legacyBehavior href="team">
                      الفريق
                    </Link>
                  </li> */}
                  <li>
                    <Link legacyBehavior href="/services">
                      الخدمات
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/categories">
                      الفئات
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contacts">
                      التواصل
                    </Link>
                  </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};
export default MobileHeader;
