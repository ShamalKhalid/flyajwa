"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/Ajwa/azerbaijan/azerbaijan1.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/azerbaijan/azerbaijan2.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/azerbaijan/azerbaijan3.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/azerbaijan/azerbaijan4.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/azerbaijan/azerbaijan5.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb
        pagename="Azerbaijan Package"
        pagetitle="Azerbaijan Package"
      />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img
                        src="/assets/img/Ajwa/azerbaijan/azerbaijan1.jpg"
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
                            src="/assets/img/Ajwa/azerbaijan/azerbaijan2.jpg"
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
                            src="/assets/img/Ajwa/azerbaijan/azerbaijan3.jpg"
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
                            src="/assets/img/Ajwa/azerbaijan/azerbaijan4.jpg"
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
                      <div className="col-6">
                        <div className="gallery-img-wrap">
                          <img
                            src="/assets/img/Ajwa/azerbaijan/azerbaijan5.jpg"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-xl-12 gy-5">
            <div className="col-xl-12 col-lg-12">
              <h2>Experience Azerbaijan’s Wonders, Culture &amp; Vibrance.</h2>
              <div className="tour-price">
                <span>From:&nbsp;</span>
                <h3>₹67,999/</h3>
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
                Experience the Magic of Azerbaijan! From vibrant cities to
                breathtaking landscapes, immerse yourself in a journey of
                culture, adventure, and timeless beauty.
              </p>
              <h4>Included and Excluded</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  <li>
                    <i className="bi bi-check-lg" /> Meal as per hotel Plan and
                    drinks free too.
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Return airport and round
                    trip transfers.
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Accommodation on twin
                    sharing basis.
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> The above rates are on per
                    day disposal basi
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Enjoy Brussels day tours.
                    Overnight Brussels
                  </li>
                </ul>
                <ul className="exclud">
                  <li>
                    <i className="bi bi-x-lg" /> AC will not be functional on
                    Hills or Slopes.
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Any other service not mentioned
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Additional entry fees other
                    than specified
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Amsterdam canal cruise not
                    included for basic
                  </li>
                </ul>
              </div>
              <div className="highlight-tour mb-20">
                <h4>Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Shahdag Mountain Adventure – Enjoy outdoor activities or a
                    peaceful nature walk in the stunning Caucasus Mountains.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Tufandag Ropeway (Gabala) – Take in breathtaking panoramic
                    views from the famous cable car.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Absheron Peninsula Tour – Visit the Atashgah Fire Temple and
                    witness the eternal flames of Yanardag Fire Mountain.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Baku Old Town (Icherisheher) Exploration – Discover the
                    historic charm of Baku, including the Maiden Tower and the
                    Palace of the Shirvanshahs.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Waterfall 7 Beauties &amp; Lake Nokhur (Gabala) – Experience
                    the serene beauty of these natural wonders.
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
                      <span>Day 01 :</span> Arrival &amp; Hotel Check-in
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
                        Upon arrival at the international airport, you will be
                        greeted by our company representative and assisted with
                        your smooth transfer to the hotel. After check-in, take
                        some time to relax and unwind. Enjoy a comfortable
                        overnight stay as you prepare for the adventures ahead.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Arrival at International Airport – Warm welcome by our
                          company representative.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Airport Transfer –
                          Smooth transfer from the airport to your hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Hotel Check-in –
                          Relax and settle in (as per the standard check-in
                          time).
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Overnight Stay at Hotel – Rest and recharge for the
                          journey ahead.
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
                      <span>Day 02 :</span> Shahdag Mountain Adventure
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
                        After a hearty breakfast at the hotel, set off for a
                        thrilling journey to Shahdag Mountain Resort. Explore
                        the breathtaking landscapes and choose from various
                        outdoor activities or simply enjoy a peaceful walk in
                        nature. Take in the dramatic views of the mountains and
                        the Quresh Forest. On the way back, stop at the Guba
                        Genocide Memorial Complex to gain insight into the
                        region’s history. Later, return to the hotel for a
                        relaxing overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Start your day with a delicious meal.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Shahdag Mountain
                          Resort – Embark on a private adventure to the stunning
                          Shahdag region.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Outdoor Activities
                          &amp; Exploration – Choose from a variety of
                          activities or enjoy a peaceful walk in nature.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Scenic Views – Take
                          in breathtaking views of the mountains and the Quresh
                          Forest.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Guba Genocide
                          Memorial Complex – Visit this historical site to learn
                          about the region’s past.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Hotel –
                          Relax after a day of adventure.
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
                      <span>Day 03 :</span> Exploring the Charm of Gabala
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
                        After enjoying breakfast at the hotel, get ready to
                        explore the enchanting city of Gabala. Start your tour
                        with a panoramic view of the city before heading to the
                        Tufandag Ropeway, where you can take in the fresh
                        mountain air and breathtaking views of the Caucasus
                        Mountains. Continue your journey with visits to nearby
                        attractions like the mesmerizing Waterfall 7 Beauties,
                        the serene Lake Nokhur, and the historical site of
                        Kabalaka (Chuhur Gabala). After a day filled with
                        exploration and discovery, return to the hotel for an
                        overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Begin your day with a refreshing meal.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Gabala City Tour –
                          Enjoy a panoramic view of the charming city.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Tufandag Ropeway –
                          Ascend the summer-winter tourist complex for stunning
                          mountain vistas.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Waterfall 7 Beauties
                          – Marvel at the cascading waters in a serene setting.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Lake Nokhur –
                          Discover the tranquil beauty of this picturesque lake.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Kabalaka (Chuhur
                          Gabala) – Explore the historical sites of Gabala.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Overnight Stay at
                          Hotel – Rest and prepare for the next adventure..
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
                      <span>Day 04 :</span> Journey to Baku &amp; Absheron
                      Peninsula Tour
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
                        After breakfast, check out from the hotel and embark on
                        a scenic transfer to Baku. Upon arrival, explore the
                        fascinating Absheron Peninsula, starting with a visit to
                        the Atashgah Fire Temple, an ancient site of fire
                        worship. Continue to Yanardag, the mystical Fire
                        Mountain, where flames have been burning naturally for
                        centuries. After an enriching day, check in at your
                        hotel in Baku for an overnight stay, ready for more
                        adventures ahead.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Enjoy a delicious morning meal.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-out – Prepare for your transfer.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Baku –
                          Travel to the vibrant capital city.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Absheron Peninsula
                          Tour – Discover the unique landscapes of Absheron.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Atashgah Fire Temple
                          – Visit the ancient Zoroastrian temple of fire
                          worship.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Yanardag Fire
                          Mountain – Witness the mesmerizing eternal flames of
                          this natural wonder.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Overnight Stay in
                          Baku – Rest and unwind for the next day’s exploration.
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
                      <span>Day 05 :</span> Baku City Tour &amp; Departure
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
                        a fascinating Baku city tour. Stroll through the
                        historic Old Town (Icherisheher), visit the majestic
                        Palace of the Shirvanshahs, and admire the legendary
                        Maiden Tower, a true symbol of Baku. Later, transfer to
                        the airport for your flight back home, carrying
                        cherished memories of your Azerbaijani adventure.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Enjoy your final morning meal in Azerbaijan.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Hotel Check-out – Prepare for your departure.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Baku City Tour –
                          Explore the rich history and culture of the capital.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Palace of the
                          Shirvanshahs – Visit this architectural masterpiece of
                          Azerbaijan’s medieval rulers.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Maiden Tower –
                          Discover Baku’s iconic ancient landmark.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Airport Transfer –
                          Smooth transfer to the airport for your departure.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Fly Back Home – End
                          your journey with unforgettable memories.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                          You can book a trip with Flyajwa Travels &amp; Tours
                          by contacting us via WhatsApp, call, or email.Share
                          your travel preferences, including destination, travel
                          dates, and any specific requirements. Our team will
                          provide you with a customized itinerary and pricing
                          details. Once you confirm the booking and complete the
                          payment, you will receive a confirmation with all
                          necessary details. For any queries or assistance, feel
                          free to get in touch.
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
      </div>
      <Footer />
    </>
  );
};

export default Page;
