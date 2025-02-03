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
      imageBig: "/assets/img/Ajwa/malaysia/malaysia1-ajwa.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/malaysia/malaysia2-ajwa.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/malaysia/malaysia3-ajwa.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/malaysia/malaysia5-ajwa.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/malaysia/malaysia4-ajwa.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb pagename="Malaysia Package" pagetitle="Malaysia Package" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img
                        src="/assets/img/Ajwa/malaysia/malaysia1-ajwa.jpg"
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
                            src="/assets/img/Ajwa/malaysia/malaysia2-ajwa.jpg"
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
                            src="/assets/img/Ajwa/malaysia/malaysia3-ajwa.jpg"
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
                            src="/assets/img/Ajwa/malaysia/malaysia4-ajwa.jpg"
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
                            src="/assets/img/Ajwa/malaysia/malaysia5-ajwa.jpg"
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
              <h2>
                Discover Malaysia: Culture, Adventure &amp; Natural Beauty!
              </h2>
              <div className="tour-price">
                <span>From:&nbsp;</span>
                <h3>₹34,999/</h3>
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
                  4 Days / 3 Night
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
                Experience the Magic of Malaysia! From bustling cities to serene
                islands, dive into a world of culture, adventure, and natural
                beauty for an unforgettable journey.
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
                    KL Tower Observation Deck – Witness stunning panoramic views
                    of Kuala Lumpur.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Batu Caves Exploration – Visit the famous limestone caves
                    and Hindu temple.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Genting Highlands &amp; Cable Car Ride – Enjoy a scenic
                    two-way cable car ride with a stop at Chin Swee Temple.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Langkawi Sky Cab &amp; Sky Bridge – Experience breathtaking
                    views from the Langkawi Cable Car and walk on the iconic Sky
                    Bridge.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Langkawi City Tour – Explore the island’s top attractions,
                    from cultural landmarks to scenic spots.
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
                      <span>Day 01 :</span> Arrival &amp; KL Tower Experience
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
                        Upon arrival at the airport, proceed to the designated
                        level for your transfer to a famous chocolate outlet,
                        where you can enjoy a delightful visit. Afterward, check
                        in at the hotel (as per the standard check-in time).
                        Later, head to KL Tower for an unforgettable experience
                        at the observation deck, with tickets included in the
                        package. After the visit, you'll be dropped off at the
                        hotel for an overnight stay, ready to continue your
                        journey the next day.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Airport Transfer – Smooth transfer from the airport to
                          your designated destination.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Visit a famous
                          chocolate outlet for a delightful experience.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> KL Tower Observation
                          Deck – Enjoy breathtaking views (tickets included).
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Overnight Stay at Hotel – Rest and unwind at your
                          hotel after an exciting day.
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
                      <span>Day 02 :</span> Genting Highlands Adventure
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
                        After breakfast, we’ll head to Genting Highland,
                        following the driver’s instructions and ensuring you're
                        ready at the lobby on time. Enroute, we’ll stop at the
                        iconic Batu Caves for a quick photo op. Enjoy a scenic
                        two-way cable car ride, and don’t miss the beautiful
                        Chin Swee Temple Station along the way. After the day’s
                        program, we’ll return to the hotel for an overnight
                        stay, allowing you to relax and unwind.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast – Enjoy a
                          delicious meal before starting the day.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Departure for Genting
                          Highlands – Follow the driver’s instructions and be
                          ready at the lobby on time.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Enroute Stop at Batu
                          Caves – Capture a photo at this iconic Hindu temple
                          and limestone cave.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Two-Way Cable Car
                          Ride – Experience the scenic cable car ride to Genting
                          Highlands.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Visit Chin Swee
                          Temple Station – Don't miss this beautiful temple
                          station along the way.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Overnight Stay at
                          Hotel – Head back to hotel, Relax and unwind for the
                          night.
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
                      <span>Day 03 :</span> Arrival &amp; Exploration in
                      Langkawi
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
                        Upon arrival in Langkawi, you will be greeted and picked
                        up for a scenic Langkawi City Tour, where you'll have
                        the opportunity to explore the island's iconic
                        attractions. After the tour, you'll be dropped off at
                        your hotel to unwind and enjoy a restful overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Arrive in Langkawi
                          and proceed with pickup.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Embark on a Langkawi
                          City Tour, exploring iconic attractions.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> After the tour, drop
                          off at the hotel for an overnight stay.
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
                      <span>Day 04 :</span> Langkawi Sky Adventure
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
                        After enjoying breakfast at the hotel, you will be
                        transferred to Oriental Village for an exciting day.
                        Experience a thrilling cable car ride with breathtaking
                        views, followed by visits to the Sky Dome, Sky Rex, 3D
                        Art Langkawi, and the iconic Sky Bridge. Afterward, you
                        will return to the hotel for a relaxing overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Enjoy breakfast at
                          the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Transfer to Oriental
                          Village for an exciting day.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Experience a
                          thrilling cable car ride with breathtaking views.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Explore: Sky Dome,
                          Sky Rex, 3D Art, Langkawi Sky Bridge
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to the hotel
                          for an overnight stay.
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
                      <span>Day 05 :</span> Departure
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
                        After breakfast at the hotel, you will be transferred to
                        the airport for your return flight. As you depart, take
                        with you cherished memories of your unforgettable
                        journey through Malaysia.
                      </p>
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
                          01. How do I book a trip on you?
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
