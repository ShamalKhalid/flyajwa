"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import WhatsAppLink from "@/components/whyChoose/WhatsAppLink";
import Header from "@/components/header/Header";
import BaliGallery from "./BaliGallery.jsx";
import BaliImages from "../../../data/BaliData.js";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/Ajwa/Bali/Bali1.webp",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/Bali/Bali2.webp",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/Bali/Bali3.webp",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/Bali/Bali4.webp",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/Bali/Bali5.webp",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb pagename="Bali Package" pagetitle="Bali Package" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/Ajwa/Bali/Bali1.webp" alt="" />
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
                          <img src="/assets/img/Ajwa/Bali/Bali2.webp" alt="" />
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
                          <img src="/assets/img/Ajwa/Bali/Bali3.webp" alt="" />
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
                                  openingIndex: 3,
                                })
                              }
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img src="/assets/img/Ajwa/Bali/Bali4.webp" alt="" />
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
                          <img src="/assets/img/Ajwa/Bali/Bali5.webp" alt="" />
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
                Discover the charm of Bali – an island paradise of serenity,
                culture, and breathtaking natural beauty.
              </h2>
              <div className="tour-price">
                <span>Starting from:&nbsp;</span>
                <h3>₹25,499/</h3>
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
                Bali is a tropical haven that perfectly blends natural beauty
                with vibrant culture, offering unforgettable experiences. A
                highlight of any trip is exploring its lush rice terraces,
                ancient temples, and sun-kissed beaches, where you can unwind,
                surf, or witness stunning sunsets. Immerse yourself in Balinese
                traditions, savor local delicacies, and experience the island’s
                serene and spiritual charm.
              </p>
              <WhatsAppLink
                packageName="Bali"
                className="primary-btn1"
              ></WhatsAppLink>
              <div className="highlight-tour mb-20 mt-3">
                <h4>Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Ubud Monkey Forest: Walk among playful monkeys and explore
                    lush tropical forest trails.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Tegallalang Rice Terraces: Admire the iconic cascading rice
                    fields and capture perfect photo moments.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Tanah Lot Temple: Visit the breathtaking sea temple perched
                    on a rock formation at sunset.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Uluwatu Temple &amp; Kecak Dance: Experience a cliffside
                    temple and watch the mesmerizing traditional Kecak dance
                    performance.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Waterfalls &amp; Nature Excursions: Refresh at stunning
                    waterfalls like Tegenungan and explore Bali’s natural
                    beauty.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Beach Relaxation: Enjoy sun, sand, and waves at Bali’s
                    famous beaches, including Kuta, Seminyak, or Nusa Dua.
                  </li>
                </ul>
              </div>
              <h4>Itinerary</h4>
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
                      <span>Day 01 :</span> Arrival and Check-in
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
                        Upon arrival at the airport, you will be assisted with
                        your transfer to the hotel. After check-in, take some
                        time to relax and unwind before your overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Arrival at Airport – Meet and greet assistance upon
                          arrival.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Hotel Transfer –
                          Smooth transfer from the airport to your hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Hotel Check-in –
                          Complete the check-in process and settle in
                          comfortably.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Overnight Stay – Relax and enjoy your stay at the
                          hotel.
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
                      <span>Day 02 :</span> Water Adventures and Temple Visit
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
                        Start your day with a delicious breakfast before heading
                        out for an exciting day of water sports and cultural
                        exploration. Enjoy thrilling activities at Tanjung Benoa
                        and later visit the iconic Uluwatu Temple before
                        returning to your hotel for a relaxing night.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast – Enjoy a
                          hearty breakfast at the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Tanjung Benoa – Proceed to Tanjung Benoa for exciting
                          water sport activities.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Water Sports Activities: • 1 round of Banana Boat ride
                          • 1 round of Jet Ski • 1 round of Parasailing
                          Adventure (Couple Parasailing)
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Uluwatu Temple Visit
                          – Explore the famous Uluwatu Temple, perched on a
                          stunning cliff overlooking the ocean.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Return to Hotel &amp; Overnight Stay – Transfer back
                          to the hotel after sightseeing. Relax and unwind at
                          the hotel.
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
                      <span>Day 03 :</span>Nusa Penida Island Exploration
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
                        After breakfast, embark on a full-day trip to the
                        stunning Nusa Penida Island. Explore its iconic beaches
                        and natural wonders, enjoy a delicious lunch, and return
                        to the mainland for a relaxing evening at your hotel.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Breakfast – Start your day with a nutritious breakfast
                          at the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Nusa
                          Penida – Move to Nusa Penida Island for sightseeing.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Island Sightseeing: • Kelingking Beach – Famous for
                          its dramatic cliffs and scenic views • Broken Beach –
                          Natural archway over turquoise waters • Angel’s
                          Billabong – Stunning natural infinity pool • Crystal
                          Bay – Relax and enjoy the pristine beach and clear
                          waters
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Lunch – Enjoy a meal
                          at a local restaurant on the island.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Mainland –
                          Travel back via ferry to the main island.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Hotel
                          &amp; Overnight Stay – Smooth transfer back to your
                          hotel. Rest and relax at the hotel.
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
                      <span>Day 04 :</span> Kintamani and Ubud Village Tour
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
                        After breakfast at the hotel, enjoy a day filled with
                        adventure and culture. Experience thrilling swings at
                        Kintamani, take in the breathtaking views of Mount
                        Batur, and explore the art and craft villages of Ubud
                        before returning to your hotel for an overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast – Start
                          your day with a delicious breakfast at the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Transfer to Kintamani – Head to Kintamani for
                          adventure and sightseeing.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Bali Swing Experience: • 2 Single Swings • 1 Romantic
                          Swing • 1 Bed Swing • 1 Sky Bed • 1 Bird Nest • 1
                          Chicken Nest
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Kintamani View Point
                          – Enjoy panoramic views of Mount Batur and the
                          surrounding landscape.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Ubud Village Tour: • Explore Ubud village and its
                          cultural attractions • Visit Celuk &amp; Mas villages,
                          famous for gold and silversmiths • Stop at a Batik
                          factory to see traditional textile making
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Hotel &amp;
                          Overnight Stay – Transfer back to your hotel after the
                          tour. Relax and unwind at the hotel.
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
                        After breakfast, check out from the hotel and prepare
                        for your onward journey. Enjoy a smooth transfer to the
                        airport for your departure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="subtitle-underline">Included and Excluded</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  <li>
                    <i className="bi bi-check-lg" /> Meet and greet upon arrival
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> 4 days of breakfast at the
                    hotel
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> All transfers in a private
                    vehicle
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Guided sightseeing tours
                  </li>
                </ul>
                <ul className="exclud">
                  <li>
                    <i className="bi bi-x-lg" /> Visa
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> International and domestic
                    flights
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Video and camera permits at attractions
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Meals not specified in the meal plan
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Use of vehicles outside the specified itinerary
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Personal expenses of any kind
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Any services not mentioned above
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Early check-in and late check-out at hotels (standard
                    check-in/check-out: 12:00 PM)
                  </li>
                </ul>
              </div>
              <div className="faq-content-wrap mb-10">
                <div className="faq-content-title mb-20">
                  <h4>Frequently Asked &amp; Question</h4>
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
                          aria-expanded="false"
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
        <BaliGallery images={BaliImages} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
