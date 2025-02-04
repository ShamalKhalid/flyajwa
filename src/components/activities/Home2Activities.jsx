"use client";
import React, { useMemo, useState } from "react";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2Activities = () => {
  const [isOpen, setOpen] = useState(false);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      loop: true,
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },
    };
  });
  return (
    <>
      <div className="slider-and-tab-section mb-120">
        <div className="row g-0">
          <div className="col-lg-5">
            <ul className="activities-slider-group">
              <li className="active">
                <div className="slider-area">
                  <Swiper
                    {...settings}
                    className="swiper activities-img-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/Ajwa/Tent-ajwa.jpg)",
                          }}
                        />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="slide-img"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/Ajwa/Tent2-ajwa.jpg)",
                          }}
                        />
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="swiper-pagination5 pagination1" />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="tab-area">
              <div className="section-title2 text-center mb-50">
                <div className="eg-section-tag">
                  <span>What We Do</span>
                </div>
                <h2>Services we Provide</h2>
              </div>
              <div className="tab-content-area">
                <div className="row g-xl-4 gy-5 ">
                  <div className="col-xl-5">
                    <div className="tab-sidebar">
                      <ul
                        className="nav nav-pills"
                        id="pills-tab3"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link active"
                            id="outdoor-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#outdoor"
                            role="tab"
                            aria-controls="outdoor"
                            aria-selected="true"
                            style={{ height: '5vh', justifyContent: 'center' }}
                          >
                            <h6>Flight Tickets</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="cultural-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#cultural"
                            role="tab"
                            aria-controls="cultural"
                            aria-selected="false"
                            style={{ height: '5vh', justifyContent: 'center' }}
                          >
                            <h6>Visas</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="cuisine-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#cuisine"
                            role="tab"
                            aria-controls="cuisine"
                            aria-selected="false"
                            style={{ height: '5vh', justifyContent: 'center' }}
                          >
                            <h6>Rafting</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="event-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#event"
                            role="tab"
                            aria-controls="event"
                            aria-selected="false"
                            style={{ height: '5vh', justifyContent: 'center' }}
                          >
                            <h6>Recruitment</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="event-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#event"
                            role="tab"
                            aria-controls="event"
                            aria-selected="false"
                            style={{ height: '5vh', justifyContent: 'center' }}
                          >
                            <h6>Umrah &amp; Hajj</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="event-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#event"
                            role="tab"
                            aria-controls="event"
                            aria-selected="false"
                            style={{ height: '5vh', justifyContent: 'center' }}
                          >
                            <h6>Study Abroad</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="wildlife-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#wildlife"
                            role="tab"
                            aria-controls="wildlife"
                            aria-selected="false"
                            style={{ height: '5vh', justifyContent: 'center' }}
                          >
                            <h6>Document Attestation</h6>
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <div
                            className="nav-link"
                            id="event-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#event"
                            role="tab"
                            aria-controls="event"
                            aria-selected="false"
                            style={{ height: '5vh', justifyContent: 'center' }}
                          >
                            <h6>Tours and Travel Packages</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 d-flex justify-content-xl-start justify-content-center">
                    <div className="tab-content" id="pills-tab3Content">
                      <div
                        className="tab-pane fade show active"
                        id="outdoor"
                        role="tabpanel"
                        aria-labelledby="outdoor-tab"
                      >
                        <div className="tab-content-wrap">
                          <h2>Thrill Above Ground: The Zip Line Adventure</h2>
                          <p>
                            Embark on an adrenaline-fueled journey, zipping
                            through lush landscapes, feeling the wind rush past,
                            and experiencing nature from breathtaking heights.
                            Unleash your inner adventurer today.
                          </p>
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Treetop Views
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Adrenaline Rush
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Safety Measures
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Nature Immersion
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link
                              href="/activities/activities-details"
                              className="primary-btn3"
                            >
                              Check Availability
                            </Link>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area video1"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Cultural</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="cultural"
                        role="tabpanel"
                        aria-labelledby="cultural-tab"
                      >
                        <div className=" tab-content-wrap">
                          <h2>
                            Plunge: Bungee Jumping's Gravity-Defying Thrill
                          </h2>
                          <p>
                            Plunge into pure adrenaline. Free fall, then
                            rebound, suspended mid-air. Experience the ultimate
                            rush, a heart-pounding leap into the unknown.
                          </p>
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Professional Guidance
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Secure Harnesses
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Adrenaline Rush
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Scenic Locations
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link
                              href="/activities/activities-details"
                              className="primary-btn3"
                            >
                              Check Availability
                            </Link>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area video2"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Cultural</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="cuisine"
                        role="tabpanel"
                        aria-labelledby="cuisine-tab"
                      >
                        <div className=" tab-content-wrap">
                          <h2>Whitewater Rush: Thrilling Rafting Adventure</h2>
                          <p>
                            Ride through rapids, paddle through currents, and
                            enjoy thrilling adventures with expert guides amidst
                            stunning natural landscapes and excitement.
                          </p>
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Professional Guides
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Adventurous Rapids
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Scenic Landscapes
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Team Experience
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link
                              href="/activities/activities-details"
                              className="primary-btn3"
                            >
                              Check Availability
                            </Link>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area video3"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Cultural</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="wildlife"
                        role="tabpanel"
                        aria-labelledby="wildlife-tab"
                      >
                        <div className=" tab-content-wrap">
                          <h2>
                            Horizon Dance: Unique Paragliding Perspectives.
                          </h2>
                          <p>
                            Experience freedom in flight, soaring gracefully
                            over landscapes, feeling the wind's embrace on an
                            exhilarating paragliding escapade. Adventure awaits
                            above!
                          </p>
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Glide Experience
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Scenic Views
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Safety Measures
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Adventurous Spirit
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link
                              href="/activities/activities-details"
                              className="primary-btn3"
                            >
                              Check Availability
                            </Link>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area video4"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Cultural</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="event"
                        role="tabpanel"
                        aria-labelledby="event-tab"
                      >
                        <div className=" tab-content-wrap">
                          <h2>
                            Powder Quest: Exploring Snow-Covered Landscapes on
                            Skis
                          </h2>
                          <p>
                            Ski tour through pristine snowscapes, ascend peaks,
                            and savor thrilling descents, immersing in nature's
                            beauty on an exhilarating adventure.
                          </p>
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Ascend and Descend
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Specialized Equipment
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Remote Exploration
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                              >
                                <circle cx="4.5" cy="4.5" r="4.5" />
                              </svg>
                              Physical Challenge
                            </li>
                          </ul>
                          <div className="content-bottom-area">
                            <Link
                              href="/activities/activities-details"
                              className="primary-btn3"
                            >
                              Check Availability
                            </Link>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => setOpen(true)}
                              className="video-area video5"
                            >
                              <div className="icon">
                                <svg
                                  className="video-circle"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  width="51px"
                                  viewBox="0 0 206 206"
                                  style={{
                                    enableBackground: "new 0 0 206 206",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    className="circle"
                                    strokeMiterlimit={10}
                                    cx={103}
                                    cy={103}
                                    r={100}
                                  />
                                  <path
                                    className="circle-half top-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                  />
                                  <path
                                    className="circle-half bottom-half"
                                    strokeWidth={4}
                                    strokeMiterlimit={10}
                                    d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                  />
                                </svg>
                                <i className="bi bi-play" />
                              </div>
                              <h6>Watch Cultural</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    </>
  );
};

export default Home2Activities;
