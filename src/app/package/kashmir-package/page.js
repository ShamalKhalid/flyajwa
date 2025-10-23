"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import WhatsAppLink from "@/components/whyChoose/WhatsAppLink";
import Header from "@/components/header/Header";
import KashmirGallery from "./KashmirGallery.jsx";
import kashmirImages from "../../../data/kashmirData.js";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/Ajwa/Kashmir/Kashmir1.webp",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/Kashmir/Kashmir2.webp",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/Kashmir/Kashmir3.webp",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/Kashmir/Kashmir4.webp",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/Kashmir/Kashmir5.webp",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb pagename="Kashmir Package" pagetitle="Kashmir Package" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img
                        src="/assets/img/Ajwa/Kashmir/Kashmir1.webp"
                        alt=""
                      />
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
                          <img
                            src="/assets/img/Ajwa/Kashmir/Kashmir2.webp"
                            alt=""
                          />
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
                          <img
                            src="/assets/img/Ajwa/Kashmir/Kashmir3.webp"
                            alt=""
                          />
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
                          <img
                            src="/assets/img/Ajwa/Kashmir/Kashmir4.webp"
                            alt=""
                          />
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
                          <img
                            src="/assets/img/Ajwa/Kashmir/Kashmir5.webp"
                            alt=""
                          />
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
                Explore Kashmir – where tranquil lakes, snow-capped peaks, and
                rich culture await.
              </h2>
              <div className="tour-price">
                <span>Starting from:&nbsp;</span>
                <h3>₹16,400/</h3>
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
                Kashmir is a breathtaking haven that seamlessly blends majestic
                landscapes with rich culture, offering unforgettable
                experiences. A highlight of any trip is exploring its serene
                valleys, pristine lakes, and snow-capped mountains, where you
                can relax on shikara rides, trek through meadows, or witness
                stunning sunsets over the Himalayas. Immerse yourself in
                Kashmiri traditions, savor local delicacies like Wazwan, and
                experience the region’s tranquil and spiritual charm.
              </p>
              <WhatsAppLink
                packageName="Kashmir"
                className="primary-btn1"
              ></WhatsAppLink>
              <div className="highlight-tour mb-20 mt-3">
                <h4>Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Dal Lake Shikara Ride: Enjoy a serene one-hour boat ride on
                    the iconic Dal Lake.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Mughal Gardens: Visit Nishat Bagh, Shalimar Bagh, Chashma
                    Shahi Garden, and Pari Mahal Garden.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Shankaracharya Temple: Panoramic views of Srinagar from this
                    historic hilltop temple.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Gulmarg Excursion: Explore the meadows of Gulmarg with a
                    professional guide.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Snow Activities: Option for snow jeep rides at Gulmarg
                    during winter months.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Pahalgam Valleys: Visit Baisaran, Betaab, and Aru Valley
                    with pony/horse rides or union vehicles.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Cultural Experience: Savor local cuisine with breakfast and
                    dinner included, and enjoy guided sightseeing.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Convenient Transfers: Private AC vehicles and well-trained
                    drivers throughout the trip.
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
                      <span>Day 01 :</span> Arrival &amp; Srinagar Sightseeing
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
                        Upon arrival at Srinagar Airport, you will be warmly
                        welcomed by our company representative and assisted with
                        a smooth transfer to your hotel. After some time to
                        refresh and settle in, begin your sightseeing tour of
                        Srinagar’s iconic Mughal Gardens and landmarks,
                        immersing yourself in the city’s serene beauty.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Arrival at Srinagar Airport – Pickup by our company
                          representative and transfer to the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-in &amp; Refresh – Relax and unwind after
                          your journey.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Sightseeing – Visit Mughal Gardens including Nishat
                          Bagh, Shalimar Bagh, Chashma Shahi Garden, Pari Mahal,
                          and Shankaracharya Temple.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Dinner &amp; Overnight Stay at Hotel – Enjoy a
                          comfortable stay and rest for the next day’s
                          adventures.
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
                      <span>Day 02 :</span> Gulmarg Day Excursion
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
                        to Gulmarg, located approximately 56 km from Srinagar.
                        Known for its stunning landscapes, Gulmarg offers
                        world-class ski slopes and the highest 18-hole golf
                        course in Asia. Enjoy the natural beauty and, if you
                        wish, experience the famous Aparwath cable car — Asia’s
                        highest (direct/supplement cost). Return to Srinagar by
                        evening for dinner and a comfortable overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at Hotel –
                          Start your day with a hearty breakfast.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Drive to Gulmarg – Approx. 56 km, 2-3 hours journey
                          from Srinagar.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Sightseeing in Gulmarg – Explore ski slopes, the
                          18-hole golf course, and other scenic spots.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Optional Activity – Ride the Aparwath cable car
                          (Asia’s highest) at an additional cost.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Return to Srinagar – Drive back to the hotel by
                          evening.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Dinner &amp; Overnight Stay at Hotel – Relax and
                          recharge for the next day.
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
                      <span>Day 03 :</span>Pahalgam Day Excursion
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
                        After breakfast at your hotel, drive to Pahalgam,
                        located approximately 90 km from Srinagar. En route,
                        explore the picturesque saffron fields, apple orchards,
                        and the Pahalgam Bat Factory. In Pahalgam, you can visit
                        scenic spots such as Aru Valley, Betaab Valley, and
                        Chandanwadi (by Taxi Union Vehicle, direct/supplement
                        cost). Return to Srinagar by evening for dinner and a
                        comfortable overnight stay at your hotel.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Breakfast at Hotel – Enjoy a hearty start to your day.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Drive to Pahalgam – Approx. 90 km, 2-3 hours journey
                          from Srinagar
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Enroute Sightseeing – Visit saffron fields, apple
                          orchards, and Bat Factory.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Pahalgam Sightseeing
                          – Explore Aru Valley, Betaab Valley, and Chandanwadi
                          (optional by Taxi Union Vehicle, direct/supplement
                          cost).
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Srinagar –
                          Drive back to the hotel in the evening.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Dinner &amp; Overnight Stay at Hotel – Relax and
                          recharge for the next day.
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
                      <span>Day 04 :</span> Departure from Srinagar
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
                        After breakfast at your hotel, complete the check-out
                        formalities and prepare for your onward journey.
                        Depending on your flight schedule, you will be
                        transferred to Srinagar Airport for departure,
                        concluding your memorable trip to Kashmir.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at Hotel –
                          Enjoy your final meal at the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-out – Complete formalities and pack for
                          departure.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Airport Transfer – Drop at Srinagar Airport according
                          to your flight timing.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Departure – Bid farewell to the scenic beauty of
                          Kashmir with wonderful memories.
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
                    <i className="bi bi-check-lg" /> Welcome drink on arrival
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Accommodation on
                    double/twin share basis
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> All tolls, driver
                    allowances, parking, and service charges
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Transfers and sightseeing
                    as per itinerary on disposal basis
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Cabs for transfers: 2 pax –
                    AC Toyota Etios, 4–6 pax – AC Toyota Innova
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> One-hour boat/shikara ride
                    on the famous Dal Lake
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Pickup and drop at Srinagar
                    Airport
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Daily breakfast and dinner
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Professional guide at
                    Gulmarg
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Well-trained
                    driver-cum-tour guide
                  </li>
                </ul>
                <ul className="exclud">
                  <li>
                    <i className="bi bi-x-lg" /> Airfare (return tickets;
                    special deals available on request)
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Lunches: Veg meals @ ₹1200/P.P,
                    Veg + Non-veg @ ₹2000/P.P
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Entry fees for gardens and monuments @ ₹300/P.P
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Baisaran, Kashmir, Snow &amp; Dabyab Valley at Pahalgam
                    (pony/horse ride) @ ₹1200/P.P
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Arun Valley, Betaab Valley &amp; Chandanwadi at Pahalgam
                    (union vehicle) @ ₹2100/8-seater
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Snow Jeep from Tangmarg to Gulmarg (and vice versa) @
                    ₹2000/8-seater
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Gondola ride tickets: First phase @ ₹750/P.P, First + Second
                    phase @ ₹1700/P.P
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Honeymoon freebies once during houseboat stay @ ₹500/P.P
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Any items not mentioned in inclusions
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    GST @ 5% on billing
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
          {/*<h4 className="subtitle-underline mt-4">
            Snapshots from our clients
          </h4>*/}
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
        {/* <KashmirGallery images={kashmirImages} /> */}
      </div>
      <Footer />
    </>
  );
};

export default Page;
