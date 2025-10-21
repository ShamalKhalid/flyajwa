"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import WhatsAppLink from "@/components/whyChoose/WhatsAppLink";
import thailandImages from "../../../data/thailandData";
import ThailandGallery from "./ThailandGallery";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/Ajwa/thailand/thailand1.webp",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/thailand/thailand2.webp",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/thailand/thailand3.webp",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/thailand/thailand4.webp",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/thailand/thailand5.webp",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb pagename="Thailand Package" pagetitle="Thailand Package" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img
                        src="/assets/img/Ajwa/thailand/thailand1.webp"
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
                            src="/assets/img/Ajwa/thailand/thailand2.webp"
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
                            src="/assets/img/Ajwa/thailand/thailand3.webp"
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
                            src="/assets/img/Ajwa/thailand/thailand4.webp"
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
                            src="/assets/img/Ajwa/thailand/thailand5.webp"
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
                Explore Thailand’s beauty – vibrant cities, serene beaches, and
                rich culture await.
              </h2>
              <div className="tour-price">
                <span>From:&nbsp;</span>
                <h3>₹17,499/</h3>
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
                Discover the Wonders of Thailand! From vibrant cities to serene
                beaches, immerse yourself in a world of culture, adventure, and
                breathtaking landscapes.
              </p>
              <WhatsAppLink
                packageName="Thailand"
                className="primary-btn1"
              ></WhatsAppLink>
              <div className="highlight-tour mb-20">
                <h4>Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Coral Island Tour – Enjoy scenic views and water activities
                    on the beautiful Coral Island.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Alcazar Show – Witness the famous, dazzling performances at
                    the world-renowned Alcazar Show in Pattaya.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Safari World &amp; Marine Park – Experience wildlife and
                    marine life up close at this exciting theme park.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Floating Market – Visit the vibrant Floating Market for a
                    unique shopping experience on the water.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Chaophraya Dinner Cruise – Enjoy a scenic dinner cruise
                    along the iconic Chaophraya River in Bangkok.
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
                      <span>Day 01 :</span> Arrival in Thailand &amp; Pattaya
                      Exploration
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
                        Upon arrival at Don Mueang International Airport,
                        complete the immigration procedures, and optionally pick
                        up a tourist SIM card. Proceed to Pattaya, with a stop
                        for breakfast and to enjoy Tiger Topia. After checking
                        in at your hotel, end the evening with the spectacular
                        Alcazar Show before returning to your hotel for a
                        restful overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Arrival at Don Mueang International Airport – Complete
                          immigration procedures.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Pattaya –
                          Travel 170 km (approx. 3 hours) to Pattaya.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Fresh Up &amp;
                          Breakfast – Refresh and enjoy a hearty breakfast en
                          route.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Tiger Topia – Visit this exciting attraction to see
                          exotic wildlife and enjoy live shows.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-in – Arrive at your hotel and check in for
                          a comfortable stay.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Alcazar Show – Experience the world-famous Alcazar
                          Show, a vibrant and dazzling performance.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Return to Hotel &amp; Overnight Stay – Relax and
                          unwind after an exciting day, staying overnight at the
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
                      <span>Day 02 :</span> Coral Island Tour &amp; Pattaya City
                      Exploration
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
                        After breakfast, head out for the Coral Island tour, a
                        scenic experience depending on weather conditions. Enjoy
                        lunch and then return to your hotel. Later, discover the
                        best of Pattaya with a city tour, before returning to
                        the hotel for an overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Enjoy a delicious breakfast to start your day.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Coral Island Tour –
                          Embark on a scenic tour of Coral Island (subject to
                          weather conditions).
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Lunch – Enjoy a
                          delightful meal during the tour.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Hotel –
                          Head back to your hotel to relax.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Pattaya City Tour –
                          Explore the highlights of Pattaya, including key
                          attractions and local sites.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Hotel &amp;
                          Overnight Stay – Unwind after an exciting day and rest
                          for the night at the hotel.
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
                      <span>Day 03 :</span> Floating Market &amp; Bangkok
                      Exploration
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
                        After breakfast, check out from your hotel and head to
                        the Floating Market for a unique shopping experience.
                        Later, transfer to Bangkok and check in at your hotel.
                        In the evening, enjoy a delightful dinner cruise on the
                        Chaophraya River, before returning to the hotel for an
                        overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Start your day with a delicious meal.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Hotel Check-out –
                          Check out and prepare for the day’s adventures.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Floating Market – Visit the vibrant floating market,
                          experiencing local culture and shopping.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Bangkok –
                          Head to the bustling capital, Bangkok.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Hotel Check-in –
                          Arrive and check in at your hotel in Bangkok.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Chaophraya Dinner
                          Cruise – Enjoy a scenic dinner cruise along the
                          Chaophraya River, soaking in beautiful views of the
                          city.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Return to Hotel &amp; Overnight Stay – Rest and relax
                          after a day of exploration.
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
                      <span>Day 04 :</span> Safari World &amp; Marine Park
                      Adventure
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
                        After breakfast, head to Safari World and Marine Park
                        for an adventurous day with wildlife encounters. Later,
                        check in at your hotel in Bangkok, enjoy a delightful
                        dinner, and relax for the night.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Enjoy a hearty breakfast to kickstart your
                          day.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Visit Safari World
                          &amp; Marine Park – Explore the exciting Safari World
                          and Marine Park, home to a variety of wildlife and
                          marine life.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-in – After the tour, check in at your
                          hotel in Bangkok.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Dinner – Relish a
                          delicious dinner at the hotel or a local restaurant.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Hotel &amp;
                          Overnight Stay – Unwind and rest for the night at your
                          hotel.
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
                      <span>Day 05 :</span> Bangkok City Tour &amp; Departure
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
                        After breakfast, check out from the hotel and embark on
                        a quick city tour of Bangkok. Later, you'll be
                        transferred to the airport to catch your flight back to
                        Kochi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="subtitle-underline">Included and Excluded</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  <li>
                    <i className="bi bi-check-lg" /> 2 nights stay in Pattaya
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> 2 nights’ stay in Bangkok
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Airport pick-up and
                    drop-off in Bangkok
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Enroute visit to Tiger
                    Topia
                  </li>
                  <li>
                    <i className="bi bi-check-lg" />
                    Coral Island Tour with Lunch (SIC)
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Safari World and Marine
                    Park entry
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Visit to the Floating
                    Market
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Bangkok City Tour –
                    including Temple Tour, Golden Buddha, and Marble Buddha
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> All transfers in Kuala
                    Lumpur will be on Private / SIC basis (if applicable)
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> All sightseeing transfers
                    in Bangkok and Pattaya
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> 24/7 customer support
                    throughout the trip
                  </li>
                </ul>
                <ul className="exclud">
                  <li>
                    <i className="bi bi-x-lg" /> Meals not mentioned in the
                    inclusions
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Travel insurance
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Porterage, tips, beverages, telephone charges, and other
                    personal expenses
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Any services not specifically mentioned under inclusions
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Airfare
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Any additional cab rides beyond the scheduled program time
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
        <ThailandGallery images={thailandImages} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
