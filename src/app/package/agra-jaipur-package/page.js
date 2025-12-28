"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import WhatsAppLink from "@/components/whyChoose/WhatsAppLink";
import AgraGallery from "./AgraGallery.jsx";
import agraImages from "../../../data/agraData.js";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/Ajwa/Agra/agra1.webp",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/Agra/agra2.webp",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/Agra/agra3.webp",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/Agra/agra4.webp",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/Agra/agra5.webp",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb
        pagename="Agra - Jaipur Package"
        pagetitle="Agra - Jaipur Package"
      />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/Ajwa/Agra/agra1.webp" alt="" />
                      <a
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 0 })
                        }
                      >
                        <i
                          className="bi bi-eye"
                          onClick={() =>
                            setOpenimg({ openingState: true, openingIndex: 0 })
                          }
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 h-100">
                    <div className="row g-3 h-100">
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/Ajwa/Agra/agra2.webp" alt="" />
                          <a
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 1,
                              })
                            }
                          >
                            <i
                              className="bi bi-eye"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: 1,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/Ajwa/Agra/agra3.webp" alt="" />
                          <a
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 2,
                              })
                            }
                          >
                            <i
                              className="bi bi-eye"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: 2,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/Ajwa/Agra/agra4.webp" alt="" />
                          <a
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 3,
                              })
                            }
                          >
                            <i
                              className="bi bi-eye"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: 3,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/Ajwa/Agra/agra5.webp" alt="" />
                          <a
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 4,
                              })
                            }
                          >
                            <i
                              className="bi bi-eye"
                              onClick={() =>
                                setOpenimg({
                                  openingState: true,
                                  openingIndex: 4,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-xl-12 gy-5">
            <div className="col-xl-12 col-lg-12">
              <h2>
                Experience North India’s Heritage, Royalty &amp; Vibrant
                Culture.
              </h2>
              <div className="tour-price">
                <span>From:&nbsp;</span>
                <h3>₹22,400/</h3>
                <span>per person</span>
              </div>
              <ul className="tour-info-metalist">
                <li>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z"></path>
                  </svg>
                  5 Days / 4 Night
                </li>
                <li>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7ZM14 12.8333C14 14 12.8333 14 12.8333 14H1.16667C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333Z"></path>
                  </svg>
                  Tour Type: Private / Group Tour
                </li>
              </ul>
              <p>
                Experience the Magic of Agra, Delhi &amp; Jaipur! Discover
                majestic forts, grand monuments, and vibrant bazaars as you
                journey through India’s royal heritage and timeless charm.
              </p>
              <WhatsAppLink
                packageName="Agra-Delhi-Jaipur"
                className="primary-btn1"
              ></WhatsAppLink>
              <div className="highlight-tour mb-20 mt-3">
                <h4 className="subtitle-underline">Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Delhi Sightseeing: Explore India’s capital, including India
                    Gate, Red Fort, Qutub Minar, Lotus Temple, and Raj Ghat.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Agra Visit: Marvel at the world-famous Taj Mahal, explore
                    Agra Fort, and visit Itmad-ud-Daula (Baby Taj).
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Jaipur City Tour: Discover the Pink City with highlights
                    like Amber Fort, City Palace, Jantar Mantar, and the Hawa
                    Mahal (Palace of Winds).
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Cultural Experiences: Witness local markets, handicrafts,
                    and traditional cuisine in each city.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Convenient Transfers: Travel in private AC vehicles with
                    experienced drivers throughout the trip.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Professional Guidance: Expert guides at key monuments for a
                    rich historical and cultural experience.
                  </li>
                </ul>
              </div>
              <h4 className="subtitle-underline">Itinerary</h4>
              <div className="accordion tour-plan" id="tourPlan">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>Day 01 :</span> Arrival &amp; Delhi Sightseeing
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p>
                        Upon arrival at Delhi Railway Station / Airport, you
                        will be warmly welcomed by our company representative
                        and assisted with a smooth transfer to your hotel. After
                        check-in, take some time to relax and unwind. Begin your
                        exploration of Delhi with visits to its iconic landmarks
                        and soak in the city’s rich heritage.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Arrival at Delhi Railway Station / Airport – Warm
                          welcome by our company representative.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Airport / Railway
                          Transfer – Smooth transfer to your hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-in – Relax and settle in (as per standard
                          check-in time).
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Sightseeing – Visit India Gate, Rashtrapati Bhavan,
                          and Lotus Temple.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Evening Excursion – Explore Qutub Minar and Humayun’s
                          Tomb after some rest.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Overnight Stay at Hotel – Comfortable stay to recharge
                          for the journey ahead.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>Day 02 :</span>Delhi – Agra Sightseeing
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p>
                        After breakfast at your hotel, embark on a scenic drive
                        to Agra, the city of the Taj Mahal. Upon arrival, begin
                        your sightseeing tour and explore the magnificent Mughal
                        monuments that showcase India’s rich heritage.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Breakfast at Hotel – Start your day with a hearty
                          breakfast.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Agra –
                          Enjoy a 3.5-hour scenic drive to Agra.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Agra Sightseeing –
                          Visit the iconic Taj Mahal, a symbol of eternal love.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Agra Fort – Explore
                          this UNESCO World Heritage site with its grand palaces
                          and historic significance.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Overnight Stay at
                          Hotel in Agra – Rest and prepare for the journey to
                          Jaipur.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>Day 03 :</span> Agra – Jaipur via Fatehpur Sikri
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p>
                        After breakfast at your hotel, begin your journey to
                        Jaipur with a visit to the historic city of Fatehpur
                        Sikri. Explore its magnificent Mughal monuments,
                        including the Buland Darwaza, Jama Masjid, and the Tomb
                        of Salim Chishti. Continue your drive to Jaipur, with a
                        brief stop at Akshardham en route, before checking in to
                        your hotel for a comfortable overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Breakfast at Hotel – Enjoy a refreshing breakfast to
                          start the day.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Jaipur
                          via Fatehpur Sikri – Scenic drive with historic
                          sightseeing.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Fatehpur Sikri
                          Sightseeing – Visit Buland Darwaza, Jama Masjid, and
                          Tomb of Salim Chishti.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Enroute Stop – Visit
                          Akshardham for a quick sightseeing stop.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-in in Jaipur – Relax and settle in after
                          the journey.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Overnight Stay at
                          Hotel in Jaipur – Comfortable stay to recharge for the
                          next day.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span>Day 04 :</span> Jaipur Sightseeing
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p>
                        After breakfast at your hotel, embark on a full day of
                        sightseeing in the Pink City, Jaipur. Explore its
                        majestic forts, palaces, and iconic landmarks that
                        reflect the royal heritage and vibrant culture of
                        Rajasthan.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at Hotel –
                          Start your day with a hearty breakfast.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Amber Fort – Visit this grand fort and explore its
                          stunning architecture.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Jal Mahal – Stop for
                          photographs at the picturesque Water Palace.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> City Palace –
                          Discover the royal residence and its museum.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Jantar Mantar –
                          Explore the historic astronomical observatory.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hawa Mahal – Photo stop at the iconic Palace of Winds.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Overnight Stay at Hotel in Jaipur – Rest and relax
                          after a day of exploration.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span>Day 05 :</span> Departure
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p>
                        After breakfast at your hotel, check out and prepare for
                        your onward journey. You will be comfortably transferred
                        to Delhi or Jaipur Airport / Railway Station, concluding
                        your memorable North India tour.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at Hotel –
                          Enjoy your final meal at the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-out – Complete formalities and get ready
                          for departure.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Airport /
                          Railway Station – Approximately 5-hour journey from
                          Delhi to Jaipur (if applicable) for your onward
                          travel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Departure – Bid farewell with wonderful memories of
                          your trip.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="subtitle-underline">Included and Excluded</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  <li>
                    <i className="bi bi-check-lg" />
                    All sightseeing transfers in a private air-conditioned
                    vehicle
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> 4 nights accommodation at
                    selected hotels
                  </li>
                  <li>
                    <i className="bi bi-check-lg" />4 breakfasts at hotels
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Guided tours and transfers
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Pick-up from Delhi Airport
                    / Railway Station on Day 1
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Drop at Delhi Airport /
                    Railway Station on Day 5
                  </li>
                </ul>
                <ul className="exclud">
                  <li>
                    <i className="bi bi-x-lg" /> Airfare or train tickets
                    to/from Delhi
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Activities not listed under
                    inclusions
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Personal expenses such as shopping, tips, or additional
                    meals
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Early check-in or late check-out charges
                  </li>
                </ul>
              </div>
              <div className="faq-content-wrap mb-10">
                <div className="faq-content-title mb-20">
                  <h4 className="subtitle-underline">
                    Frequently Asked Questions
                  </h4>
                </div>
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="true"
                          aria-controls="travelcollapseOne"
                        >
                          01. How do I book a trip with you?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="travelheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          You can book a trip with Flyajwa Travels &amp;
                          Holidays by contacting us via WhatsApp, call, or
                          email.Share your travel preferences, including
                          destination, travel dates, and any specific
                          requirements. Our team will provide you with a
                          customized itinerary and pricing details. Once you
                          confirm the booking and complete the payment, you will
                          receive a confirmation with all necessary details. For
                          any queries or assistance, feel free to get in touch.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseTwo"
                          aria-expanded="false"
                          aria-controls="travelcollapseTwo"
                        >
                          02. What payment methods do you accept?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We accept a variety of payment methods to make your
                          transactions as convenient as possible. You can pay
                          using cash, bank transfer, UPI, or credit/debit cards.
                          We aim to provide flexible options that suit your
                          preferences, ensuring a smooth and efficient payment
                          process for all your bookings and services.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseThree"
                          aria-expanded="false"
                          aria-controls="travelcollapseThree"
                        >
                          03. Can I make changes to my reservation after
                          booking?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Yes, you can make changes to your reservation
                          depending on the time of the request. The ability to
                          modify or cancel your booking may vary based on how
                          far in advance you contact us. For more details and to
                          discuss specific changes, please feel free to get in
                          touch with us directly, and we'll assist you
                          accordingly.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseFour"
                          aria-expanded="false"
                          aria-controls="travelcollapseFour"
                        >
                          04. What is your cancellation policy?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Our cancellation policy depends on the timing of the
                          request. If you cancel your reservation within a
                          certain period before the scheduled service, you may
                          be eligible for a refund or partial refund. However,
                          cancellations made closer to the date of service may
                          incur cancellation fees. For detailed information and
                          specific terms regarding cancellations, please contact
                          us directly, and we’ll provide further assistance
                          based on your situation.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="travelheadingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseFive"
                          aria-expanded="false"
                          aria-controls="travelcollapseFive"
                        >
                          05. Do you offer group booking discounts?
                        </button>
                      </h2>
                      <div
                        id="travelcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="travelheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Yes, we offer group booking discounts. If you're
                          planning a trip or event with a larger group, we can
                          provide special pricing to make your experience more
                          affordable. For more details or to inquire about
                          specific group sizes, feel free to contact us, and
                          we’ll be happy to assist you with the best available
                          options.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="subtitle-underline mt-4">
            Snapshots from our clients
          </h4>
        </div>
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          slides={images.map(function (elem) {
            return { src: elem.imageBig };
          })}
        />
        <AgraGallery images={agraImages} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
