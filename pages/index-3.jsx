import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { herothreeswiper, studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Index3 = () => {
  return (
    <Layout noHeaderBg headerExtraClass={"two"} blackLogo pageName={"Home 3"}>
      <section className="hero-section-three">
        <Swiper
          {...herothreeswiper}
          className="swiper-container herothreeswiper"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="row align-items-center">
                <div className="col-xl-4 offset-xl-1">
                  <div className="heading-boder">
                    <h2>
                      Enabling a Better Future<span>Together</span>
                    </h2>
                    <p>
                      How we build the business models and brands of tomorrow.
                    </p>
                    <a href="services.html" className="themebtu full">
                      More Services
                    </a>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="three-page-img">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/three-page.jpg"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="row align-items-center">
                <div className="col-xl-4 offset-xl-1">
                  <div className="heading-boder">
                    <h2>
                      Enabling a Better Future<span>Together</span>
                    </h2>
                    <p>
                      How we build the business models and brands of tomorrow.
                    </p>
                    <a href="services.html" className="themebtu full">
                      More Services
                    </a>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="three-page-img">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/three-page-1.jpg"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination two-style" />
        </Swiper>
      </section>
      <section className="gap">
        <div className="container">
          <div className="our-clients">
            <h4>
              See the clients we've delivered experiences for and how we did it.
            </h4>
            <span>Pellentesque aliquet nibh nec urna.</span>
            <ul>
              <li>
                <img alt="img" src="assets/img/brand-1.png" />
              </li>
              <li>
                <img alt="img" src="assets/img/brand-2.png" />
              </li>
              <li>
                <img alt="img" src="assets/img/brand-3.png" />
              </li>
              <li>
                <img alt="img" src="assets/img/brand-4.png" />
              </li>
              <li>
                <img alt="img" src="assets/img/brand-5.png" />
              </li>
              <li>
                <img alt="img" src="assets/img/brand-6.png" />
              </li>
              <li>
                <img alt="img" src="assets/img/brand-7.png" />
              </li>
              <li>
                <img alt="img" src="assets/img/brand-8.png" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="heading-boder">
                <h2>
                  Why
                  <br />
                  <span>Choose</span> Us
                </h2>
              </div>
              <div className="why-choose-text">
                <h6>
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel dapibusid, mattis velnisi.
                </h6>
                <h5>Ideas</h5>
                <p>
                  Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                  magna a ullamcorper laoreet.
                </p>
                <h5>Solution</h5>
                <p>
                  Praesent dapibus, neque id cursus faucibus, tortor neque
                  egestas auguae, eu vulputate magna eros eu erat.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="choose-us-img">
                <figure>
                  <img alt="img" src="assets/img/choose-us-1.jpg" />
                </figure>
                <div className="choose-us-img-text">
                  <i>
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m502.71875 58.410156-59.996094 30-13.417968-26.832031 60-30zm0 0" />
                      <path d="m489.300781 298.429688-60-30 13.417969-26.832032 59.996094 30zm0 0" />
                      <path d="m451 150h61v30h-61zm0 0" />
                      <path d="m22.707031 31.582031 60 30-13.417969 26.832031-59.996093-30zm0 0" />
                      <path d="m22.699219 298.417969-13.414063-26.832031 59.996094-30 13.417969 26.832031zm0 0" />
                      <path d="m0 150h61v30h-61zm0 0" />
                      <path d="m211 482h90v30h-90zm0 0" />
                      <path d="m421 165c0-90.980469-74.019531-165-165-165s-165 74.019531-165 165c0 62.039062 35.011719 118.609375 90 146.761719v48.238281h-30v30h30v62h150v-62h30v-30h-30v-48.238281c54.988281-28.152344 90-84.722657 90-146.761719zm-120 257h-90v-32h90zm-60-227c0-8.269531 6.730469-15 15-15s15 6.730469 15 15-6.730469 15-15 15-15-6.730469-15-15zm30 165v-122.578125c17.460938-6.195313 30-22.867187 30-42.421875 0-24.8125-20.1875-45-45-45s-45 20.1875-45 45c0 19.554688 12.539062 36.226562 30 42.421875v122.578125h-30v-67.511719l-8.972656-3.9375c-49.222656-21.609375-81.027344-70.105469-81.027344-123.550781 0-74.4375 60.5625-135 135-135s135 60.5625 135 135c0 53.445312-31.804688 101.941406-81.027344 123.550781l-8.972656 3.9375v67.511719zm0 0" />
                    </svg>
                  </i>
                  <h5>
                    Building
                    <br />
                    Your Brand
                  </h5>
                  <a href="portfolio-masonry.html">Read More</a>
                </div>
              </div>
              <div className="choose-us-img">
                <figure>
                  <img alt="img" src="assets/img/choose-us-2.jpg" />
                </figure>
                <div className="choose-us-img-text">
                  <i>
                    <svg
                      enableBackground="new 0 0 124 124"
                      height={512}
                      viewBox="0 0 124 124"
                      width={512}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m82.899 50.646c-6.059 0-10.988-4.918-10.988-10.963s4.929-10.963 10.988-10.963 10.988 4.918 10.988 10.963-4.929 10.963-10.988 10.963zm0-17.979c-3.877 0-7.031 3.147-7.031 7.015s3.154 7.015 7.031 7.015 7.031-3.147 7.031-7.015-3.154-7.015-7.031-7.015z" />
                      <path d="m122.558 2.183c-.069-.986-.853-1.773-1.841-1.848-14.728-1.125-41.975-.347-58.941 17.482-.002.002-.005.004-.007.007-2.3 2.441-4.418 5.209-6.382 8.136-24.65 8.882-35.589 25.07-38.168 33.298-.376 1.202.496 2.487 1.756 2.582l17.94 1.359c-1.478 3.901-2.824 7.823-4.017 11.748-.215.706-.02 1.472.504 1.992l11.995 11.891c.513.508 1.288.703 1.98.495 4-1.194 7.996-2.545 11.97-4.027l1.381 17.923c.097 1.253 1.377 2.122 2.581 1.752 7.562-2.328 24.216-13.247 33.545-37.919 2.953-1.954 5.73-4.064 8.153-6.359 17.668-16.682 18.58-43.82 17.551-58.512-.07-.987 1.029 14.692 0 0zm-3.878 2.008c.413 7.551.219 17.908-2.38 28.202l-26.124-25.897c10.42-2.625 20.888-2.767 28.504-2.305zm-96.722 53.877c3.21-7.053 12.265-18.732 29.892-26.418-2.945 5.084-5.502 10.331-7.777 15.002-2.04 4.172-3.917 8.403-5.638 12.665zm42.549 42.183-1.267-16.452c4.264-1.695 8.496-3.541 12.668-5.545 4.732-2.244 10.045-4.763 15.169-7.669-7.959 17.563-19.588 26.513-26.57 29.666zm37.752-42.448c-7.489 7.094-18.422 12.277-28.076 16.854-8.762 4.212-17.778 7.744-26.816 10.507l-10.293-10.205c2.785-8.95 6.346-17.879 10.592-26.562 4.394-9.022 9.862-20.251 17.01-27.839 5.992-6.295 13.426-10.299 21.11-12.794l29.252 28.998c-2.497 7.687-6.497 15.108-12.779 21.041z" />
                      <path d="m4.185 122.808c-1.728 0-2.631-2.145-1.437-3.378l27.357-28.26c1.788-1.841 4.666.918 2.874 2.77l-27.357 28.259c-.392.405-.914.609-1.437.609z" />
                      <path d="m23.435 124c-1.688 0-2.609-2.063-1.493-3.318l17.73-19.91c1.71-1.913 4.7.723 2.987 2.648l-17.73 19.91c-.394.444-.943.67-1.494.67z" />
                      <path d="m2.982 104.917c-1.688 0-2.609-2.063-1.493-3.318l17.731-19.91c1.709-1.914 4.7.724 2.987 2.648l-17.731 19.91c-.395.444-.943.67-1.494.67z" />
                    </svg>
                  </i>
                  <h5>
                    User Experience &amp;
                    <br />
                    Site Design
                  </h5>
                  <a href="portfolio-masonry.html">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="choose-us-img">
                <figure>
                  <img alt="img" src="assets/img/choose-us-3.jpg" />
                </figure>
                <div className="choose-us-img-text">
                  <i>
                    <svg
                      enableBackground="new 0 0 64 64"
                      height={512}
                      viewBox="0 0 64 64"
                      width={512}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m33 19v-2h3v-3c0-1.654-1.346-3-3-3h-2c-.552 0-1-.449-1-1v-1h3c.552 0 1 .449 1 1h2c0-1.654-1.346-3-3-3v-2h-2v2h-3v3c0 1.654 1.346 3 3 3h2c.552 0 1 .449 1 1v1h-3c-.552 0-1-.449-1-1h-2c0 1.654 1.346 3 3 3v2z" />
                      <path d="m62.618 47-5-10h-13.974c2.044-1.651 3.356-4.174 3.356-7v-1h-7c-2.826 0-5.349 1.312-7 3.356v-9.406c5.598-.508 10-5.222 10-10.95 0-6.065-4.935-11-11-11s-11 4.935-11 11c0 5.728 4.402 10.442 10 10.949v5.406c-1.651-2.043-4.174-3.355-7-3.355h-7v1c0 4.962 4.037 9 9 9h5v2h-1.382-3.236-20l-5 10h3.618v16h52v-16zm-36.618-14c-3.521 0-6.442-2.612-6.929-6h4.929c3.521 0 6.442 2.612 6.929 6zm14-2h4.929c-.486 3.388-3.408 6-6.929 6h-4.929c.487-3.388 3.408-6 6.929-6zm-17-19c0-4.962 4.037-9 9-9s9 4.038 9 9-4.037 9-9 9-9-4.038-9-9zm8 27h7 18.382l3 6h-26.764l-3-6zm-23.382 0h18.764l-3 6h-18.764zm-.618 8h17.618l2.382-4.764v18.764h-20zm48 14h-26v-18.764l2.382 4.764h23.618z" />
                      <path d="m53 53h-15v6h15zm-2 4h-11v-2h11z" />
                      <path d="m9 53h2v2h-2z" />
                      <path d="m9 57h2v2h-2z" />
                      <path d="m9 49h2v2h-2z" />
                      <path d="m49 33h2v-19h-2.233l4.233-7.056 4.233 7.056h-2.233v9h2v-7h3.767l-7.767-12.944-7.767 12.944h3.767z" />
                      <path d="m55 25h2v2h-2z" />
                      <path d="m55 29h2v2h-2z" />
                      <path d="m6 23h2v-9h-2.233l4.233-7.056 4.233 7.056h-2.233v19h2v-17h3.767l-7.767-12.944-7.767 12.944h3.767z" />
                      <path d="m6 25h2v2h-2z" />
                      <path d="m6 29h2v2h-2z" />
                      <path d="m46 41h2v2h-2z" />
                      <path d="m50 41h2v2h-2z" />
                      <path d="m54 41h2v2h-2z" />
                      <path d="m8 41h2v2h-2z" />
                      <path d="m12 41h2v2h-2z" />
                      <path d="m16 41h2v2h-2z" />
                    </svg>
                  </i>
                  <h5>
                    Planning For
                    <br />
                    The Future
                  </h5>
                  <a href="portfolio-masonry.html">Read More</a>
                </div>
              </div>
              <div className="choose-us-img">
                <figure>
                  <img alt="img" src="assets/img/choose-us-4.jpg" />
                </figure>
                <div className="choose-us-img-text">
                  <i>
                    <svg
                      enableBackground="new 0 0 48 48"
                      height={512}
                      viewBox="0 0 48 48"
                      width={512}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="m25 7.03c0-.552-.447-1-1-1-5.514 0-10 4.486-10 10 0 .552.447 1 1 1s1-.448 1-1c0-4.411 3.589-8 8-8 .553 0 1-.448 1-1z" />
                        <path d="m22.246 45.79h1.754 1.754c1.652 0 2.999-1.345 3-3v-1.099c1.032-.475 1.755-1.512 1.755-2.721v-3.72c.176-.382.281-.802.281-1.25 0-1.016.226-2 .671-2.927.441-.919 1.086-1.752 1.864-2.409 3.746-3.165 5.709-7.989 5.25-12.909-.7-7.375-6.813-13.189-14.265-13.525l-.31-.01-.354.011c-7.408.335-13.521 6.149-14.222 13.526-.458 4.917 1.505 9.742 5.251 12.906.778.658 1.423 1.491 1.864 2.41.445.927.671 1.911.671 2.927 0 .447.105.868.281 1.25v3.721c0 1.209.722 2.247 1.755 2.721v1.1c.001 1.653 1.348 2.998 3 2.998zm4.508-3c0 .552-.449 1-1 1h-1.754-1.754c-.551 0-1-.449-1-1v-.82h2.754 2.754zm1.755-3.819c0 .551-.448 1-1 1h-3.509-3.509c-.552 0-1-.449-1-1v-2.068c.232.058.47.097.719.097h3.79 3.79c.249 0 .487-.039.719-.097zm-9.299-4.971c0-1.318-.292-2.595-.868-3.793-.563-1.171-1.385-2.233-2.376-3.071-3.247-2.742-4.948-6.926-4.551-11.191.607-6.389 5.903-11.426 12.275-11.715l.31-.01.265.009c6.417.29 11.713 5.327 12.319 11.714.398 4.267-1.303 8.451-4.55 11.193-.991.838-1.813 1.9-2.376 3.071-.576 1.198-.868 2.475-.868 3.793 0 .551-.448 1-1 1h-3.79-3.79c-.552 0-1-.449-1-1z" />
                      </g>
                    </svg>
                  </i>
                  <h5>
                    Search Engine
                    <br />
                    Optimisation
                  </h5>
                  <a href="portfolio-masonry.html">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="makes-us-different"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="heading">
            <h6>How It Works?</h6>
            <h2>What Makes Us Different?</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 ">
              <div className="makes-us-different-text">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="682.66669"
                    height="682.66669"
                    viewBox="0 0 682.66669 682.66669"
                  >
                    <defs id="defs2119">
                      <clipPath
                        clipPathUnits="userSpaceOnUse"
                        id="clipPath2129"
                      >
                        <path d="M 0,512 H 512 V 0 H 0 Z" id="path2127" />
                      </clipPath>
                    </defs>
                    <mask id="custom">
                      <rect
                        id="bg"
                        x={0}
                        y={0}
                        width="100%"
                        height="100%"
                        fill="white"
                      />
                      <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                        <path
                          transform="matrix(1,0,0,1,256,200)"
                          d="m 0,0 c 5.52,0 10,-4.48 10,-10 0,-5.52 -4.48,-10 -10,-10 -5.52,0 -10,4.48 -10,10 0,5.52 4.48,10 10,10"
                          style={{
                            fill: "#ffffff",
                            fillOpacity: 1,
                            fillRule: "nonzero",
                            stroke: "none",
                          }}
                        />
                      </g>
                    </mask>
                    <g mask="url(#custom)">
                      <g
                        id="g2121"
                        transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
                      >
                        <g id="g2123">
                          <g id="g2125" clipPath="url(#clipPath2129)">
                            <g id="g2131" transform="translate(256,200)">
                              <path
                                d="m 0,0 c 5.52,0 10,-4.48 10,-10 0,-5.52 -4.48,-10 -10,-10 -5.52,0 -10,4.48 -10,10 0,5.52 4.48,10 10,10"
                                style={{
                                  fill: "#000000",
                                  fillOpacity: 1,
                                  fillRule: "nonzero",
                                  stroke: "none",
                                }}
                              />
                            </g>
                            <g
                              id="g2135"
                              transform="translate(182.9702,151.3198)"
                            >
                              <path
                                d="m 0,0 -46.97,76.32 -126,-217.64 h 492 L 193.03,76.32 146.06,0"
                                style={{
                                  fill: "none",
                                  stroke: "#000000",
                                  strokeWidth: 20,
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeMiterlimit: 10,
                                  strokeDasharray: "none",
                                  strokeOpacity: 1,
                                }}
                                id="path2137"
                              />
                            </g>
                            <g id="g2139" transform="translate(416,10)">
                              <path
                                d="M 0,0 -160,260 -320,0"
                                style={{
                                  fill: "none",
                                  stroke: "#000000",
                                  strokeWidth: 20,
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeMiterlimit: 10,
                                  strokeDasharray: "none",
                                  strokeOpacity: 1,
                                }}
                                id="path2141"
                              />
                            </g>
                            <g
                              id="g2143"
                              transform="translate(278.5801,156.9902)"
                            >
                              <path
                                d="M 0,0 65.84,-106.99"
                                style={{
                                  fill: "none",
                                  stroke: "#000000",
                                  strokeWidth: 20,
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeMiterlimit: 10,
                                  strokeDasharray: "none",
                                  strokeOpacity: 1,
                                }}
                                id="path2145"
                              />
                            </g>
                            <g id="g2147" transform="translate(256,270)">
                              <path
                                d="M 0,0 V 232"
                                style={{
                                  fill: "none",
                                  stroke: "#000000",
                                  strokeWidth: 20,
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeMiterlimit: 10,
                                  strokeDasharray: "none",
                                  strokeOpacity: 1,
                                }}
                                id="path2149"
                              />
                            </g>
                            <g id="g2151" transform="translate(256,502)">
                              <path
                                d="m 0,0 h 160 l -40,-50 40,-50 H 0"
                                style={{
                                  fill: "none",
                                  stroke: "#000000",
                                  strokeWidth: 20,
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeMiterlimit: 10,
                                  strokeDasharray: "none",
                                  strokeOpacity: 1,
                                }}
                                id="path2153"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
                <h4>Our Transparency Principle</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                </p>
                <a href="services.html">Read More</a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 ">
              <div className="makes-us-different-text">
                <i>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 491.312 491.312"
                    style={{ enableBackground: "new 0 0 491.312 491.312" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M285.656,297.112c-30.872,0-56,25.128-56,56s25.128,56,56,56s56-25.128,56-56S316.528,297.112,285.656,297.112z
               M285.656,393.112c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40
              C325.656,375.168,307.712,393.112,285.656,393.112z"
                    />
                    <path
                      d="M381.656,153.112c-30.872,0-56,25.128-56,56s25.128,56,56,56s56-25.128,56-56S412.528,153.112,381.656,153.112z
               M381.656,249.112c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40
              C421.656,231.168,403.712,249.112,381.656,249.112z"
                    />
                    <path
                      d="M101.656,137.112c-30.872,0-56,25.128-56,56s25.128,56,56,56s56-25.128,56-56S132.528,137.112,101.656,137.112z
               M101.656,233.112c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40
              C141.656,215.168,123.712,233.112,101.656,233.112z"
                    />
                    <polygon
                      points="491.312,326.768 480,315.456 445.656,349.8 411.312,315.456 400,326.768 434.344,361.112 400,395.456
              411.312,406.768 445.656,372.424 480,406.768 491.312,395.456 456.968,361.112     "
                    />
                    <polygon
                      points="91.312,14.768 80,3.456 45.656,37.8 11.312,3.456 0,14.768 34.344,49.112 0,83.456 11.312,94.768 45.656,60.424
              80,94.768 91.312,83.456 56.968,49.112     "
                    />
                    <polygon
                      points="459.312,54.768 448,43.456 413.656,77.8 379.312,43.456 368,54.768 402.344,89.112 368,123.456 379.312,134.768
              413.656,100.424 448,134.768 459.312,123.456 424.968,89.112    "
                    />
                    <path
                      d="M297.24,137.96l-48-24c-2.08-1.04-4.496-1.12-6.64-0.232s-3.8,2.664-4.52,4.856l-16,48l15.168,5.064l9.944-29.84
              c0.76,1.52,1.456,2.896,2.032,3.968c4.56,8.52,6.232,18.128,5.584,32.104c-1.44,31.104-12.528,62.44-31.232,88.24
              c-3.728,5.136-8.48,10.112-13.432,15.176c-14.672,15.016-33.424,25.688-53.28,36.984C128.608,334.36,99.608,351.136,83,381.352
              c-6.592-2.72-13.792-4.24-21.344-4.24c-30.872,0-56,25.128-56,56s25.128,56,56,56s56-25.128,56-56
              c0-17.608-8.184-33.32-20.928-43.592c14.368-26.552,40.408-41.6,68.048-57.328c19.944-11.352,40.568-23.088,56.816-39.704
              c5.384-5.512,10.576-10.96,14.936-16.976c20.512-28.296,32.688-62.712,34.264-96.896c0.512-11.096,0.12-25.552-7.048-39.512
              l26.336,13.168L297.24,137.96z M101.656,433.112c0,22.056-17.944,40-40,40c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40
              C83.712,393.112,101.656,411.056,101.656,433.112z"
                    />
                    <path d="M190.384,2.2l-12.776,9.608c2.256,3.016,5.2,7.376,8.512,12.624l13.528-8.544C196.064,10.208,192.944,5.6,190.384,2.2z" />
                    <path d="M238.6,87l-14.496,6.768c2.632,5.648,4.672,10.408,6.072,14.144l14.976-5.6C243.616,98.184,241.408,93.04,238.6,87z" />
                    <path
                      d="M208.096,29.792L194.32,37.92c2.576,4.384,5.232,9.008,7.888,13.744l13.952-7.832
              C213.456,39,210.736,34.272,208.096,29.792z"
                    />
                    <path
                      d="M223.936,58.04l-14.104,7.528c2.536,4.768,5.016,9.504,7.336,14.064l14.264-7.248
              C229.064,67.728,226.544,62.896,223.936,58.04z"
                    />
                  </svg>
                </i>
                <h4>Our Flexible Strategies</h4>
                <p>
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                </p>
                <a href="services.html">Read More</a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 ">
              <div className="makes-us-different-text mb-0">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Слой_1"
                    data-name="Слой 1"
                    viewBox="0 0 128 128"
                    width={512}
                    height={512}
                  >
                    <path d="M14,50c.4,0,.79,0,1.18-.06L16,54.38A2,2,0,0,0,20,53.62L19.08,49a14,14,0,0,0,8.28-17.22L54.21,18.92a12.15,12.15,0,0,0,2.18,2.35l-22,31.59a2,2,0,0,0,3.28,2.28L59.89,23.26a11.29,11.29,0,0,0,2.11.56V41a2,2,0,0,0,4,0V23.82a11.29,11.29,0,0,0,2.11-.56L90.36,55.14a2,2,0,1,0,3.28-2.28l-22-31.59a12.15,12.15,0,0,0,2.18-2.35l26.85,12.89A14,14,0,0,0,108.92,49L108,53.62a2,2,0,1,0,3.92.76l.86-4.44c.39,0,.78.06,1.18.06a14,14,0,1,0-11.62-21.8L75.52,15.31A11.67,11.67,0,0,0,76,12a12,12,0,0,0-24,0,11.67,11.67,0,0,0,.48,3.31L25.62,28.2A14,14,0,1,0,14,50ZM114,26a10,10,0,1,1-10,10A10,10,0,0,1,114,26ZM64,4a8,8,0,1,1-8,8A8,8,0,0,1,64,4ZM14,26A10,10,0,1,1,4,36,10,10,0,0,1,14,26Z" />
                    <path d="M110.71,94.45A12.67,12.67,0,0,0,116,84V67a6.85,6.85,0,0,0-7-7H96a6.85,6.85,0,0,0-7,7V84a12.65,12.65,0,0,0,5.24,10.41,24.91,24.91,0,0,0-3.78,1.66,2,2,0,1,0,1.92,3.51A20.9,20.9,0,0,1,102.51,97C114.16,97,124,107.08,124,119a2,2,0,0,0,4,0A26.37,26.37,0,0,0,110.71,94.45ZM93,67a2.84,2.84,0,0,1,3-3h13a2.84,2.84,0,0,1,3,3v5H93Zm0,17V76h19v8c0,5.13-4.08,9-9.49,9S93,89.13,93,84Z" />
                    <path d="M34.86,99.26a2,2,0,0,0,1.81-3.57c-.48-.25-2.44-1.08-2.94-1.26A12.65,12.65,0,0,0,39,84V67a6.85,6.85,0,0,0-7-7H19a6.85,6.85,0,0,0-7,7V84a12.65,12.65,0,0,0,5.24,10.41A26,26,0,0,0,0,119a2,2,0,0,0,4,0A21.78,21.78,0,0,1,25.51,97,20.69,20.69,0,0,1,34.86,99.26ZM16,67a2.84,2.84,0,0,1,3-3H32a2.84,2.84,0,0,1,3,3v5H16Zm0,17V76H35v8c0,5.13-4.08,9-9.49,9S16,89.13,16,84Z" />
                    <path d="M73.5,93.8A17.31,17.31,0,0,0,82,79V56a9,9,0,0,0-9-9H55a9,9,0,0,0-9,9V79a17.45,17.45,0,0,0,8.61,14.72A33.14,33.14,0,0,0,30.5,126a2,2,0,0,0,4,0A29.23,29.23,0,0,1,64,96.42,29.57,29.57,0,0,1,93.5,126a2,2,0,0,0,4,0A33.63,33.63,0,0,0,73.5,93.8ZM50,56a5,5,0,0,1,5-5H73a5,5,0,0,1,5,5v7H50Zm0,23V67H78V79c0,7.27-6.35,13.42-13.88,13.42S50,86.27,50,79Z" />
                  </svg>
                </i>
                <h4>Our Talented Team</h4>
                <p>
                  In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo.
                </p>
                <a href="services.html">Read More</a>
              </div>
            </div>
          </div>
          <div className="counter-style gap">
            <TerioCounter />
          </div>
        </div>
      </section>
      <section className="case-studies gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="heading-boder">
                <h2>
                  Case
                  <span>Studies</span>
                </h2>
                <p>
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci. Aenean dignissim pellentesque
                  felis.
                </p>
                <a href="portfolio-masonry.html" className="themebtu full">
                  View More Works
                </a>
              </div>
            </div>
            <div className="col-xl-8">
              <Swiper
                {...studiesswiper}
                className="swiper-container studiesswiper"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="case-studies-project">
                      <a href="portfolio-single-v1.html">
                        <img alt="img" src="assets/img/case-studies-1.jpg" />
                      </a>
                      <h4>Cosmetics Mockup Set Template</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer donec odio.
                        Quisque volutpat mattis eros.
                      </p>
                      <a href="portfolio-single-v1.html">View Project</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-studies-project">
                      <a href="portfolio-single-v1.html">
                        <img alt="img" src="assets/img/case-studies-2.jpg" />
                      </a>
                      <h4>Meelo - PSD &amp; AI Template</h4>
                      <p>
                        Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                        viverra non, semper suscipit, posuere a, pede.
                      </p>
                      <a href="portfolio-single-v1.html">View Project</a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-studies-project">
                      <a href="portfolio-single-v1.html">
                        <img alt="img" src="assets/img/case-studies-3.jpg" />
                      </a>
                      <h4>Boarding Pass Wedding Invitation</h4>
                      <p>
                        Quisque volutpat mattis eros. Nullam malesu adaerat ut
                        turpis.{" "}
                      </p>
                      <a href="portfolio-single-v1.html">View Project</a>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination" />
              </Swiper>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-1"></div>
          <div className="style-shapes-2">
            <img alt="shap-4" src="assets/img/shap-b-2.png" />
          </div>
          <div className="style-shapes-3"></div>
        </div>
      </section>
      <section className="gap services-two no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="heading">
                <h6>Different. Relevant. Focused.</h6>
                <h2>
                  {" "}
                  Web Development &amp; Web Design, Award Winning &amp;
                  World-Class.
                </h2>
                <img
                  alt="line"
                  className="mb-4"
                  src="assets/img/headingline.png"
                />
              </div>
              <div className="welcome-text">
                <h5>Result-Oriented Web Design</h5>
                <p>
                  Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                  magna a ullamcorper laoreet, lectus arcu pulvinar facilisis.{" "}
                </p>
                <h5>SEO &amp; Digital Marketing</h5>
                <p>
                  Sed ac risus. Donec nec justo eget felis facilisis fermentum.
                  Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque felis.
                </p>
                <a href="services.html" className="themebtu">
                  More Services
                </a>
              </div>
            </div>
            <div className="offset-xl-1 col-xl-6">
              <div className="welcome two">
                <img alt="img" src="assets/img/welcome-3.jpg" />
                <img
                  alt="img"
                  className="img-welcome"
                  src="assets/img/welcome-4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-4">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-3.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
      <section className="satisfied-clients gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="heading-boder">
                <h2>
                  Satisfied <span>Clients</span>
                </h2>
                <p className="pb-4">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci. Aenean dignissim pellentesque
                  felis.
                </p>
                <a href="about.html" className="themebtu">
                  More About Us
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="client-review">
                <i className="fa-solid fa-quote-left" />
                <h4>A multi-disciplinary team of creators ...</h4>
                <p>
                  " Suspendisse potenti. Sed egestas, ante etvulputate volutpat,
                  eros pede semper est, vitae luctus metus libero eu augue. “
                </p>
                <span>Milly Carson (Designer)</span>
              </div>
              <div className="client-review mt-xl-5">
                <i className="fa-solid fa-quote-left" />
                <h4>Create unique experiences ...</h4>
                <p>
                  " " Praesent elementum hendrerit tortor. Sed semper lorem at
                  felis. Vestibulum volutpat, lacus a ultrices sagittismi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl.”
                </p>
                <span>Edward Kim (Marketing Manager)</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="client-review mb-xl-5">
                <i className="fa-solid fa-quote-left" />
                <h4>Best marketing ...</h4>
                <p>
                  " Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                  pede arcu, dapibus eu, fermentum et, dapibus sed, urna.”
                </p>
                <span>Caspar Galloway (Product Manager)</span>
              </div>
              <div className="client-review">
                <i className="fa-solid fa-quote-left" />
                <h4>Best marketing ...</h4>
                <p>
                  " Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci. “
                </p>
                <span>Quentin (Content Specialist)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gap map-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="heading">
                <h6>We are here for you.</h6>
                <h2>Let’s Work Together</h2>
                <img alt="line" src="assets/img/headingline.png" />
                <p>
                  Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
                  ante et vulputate volutpat, eros pede semper est, vitae luctus
                  metus libero eu augue.{" "}
                </p>
              </div>
              <form className="touch two">
                <div className="row">
                  <div className="col-lg-4">
                    <input type="text" name="name" placeholder="Your name *" />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email address *"
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Your Phone (optional)"
                    />
                  </div>
                  <div className="col-xl-12">
                    <textarea placeholder="Your message *" defaultValue={""} />
                  </div>
                  <div className="btugap">
                    <a href="#" className="themebtu full">
                      Send Message
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="offset-xl-1 col-xl-5">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27988214366!2d-74.25986540376853!3d40.69767006922205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1672222515624!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index3;
