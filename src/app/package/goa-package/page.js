"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import WhatsAppLink from "@/components/whyChoose/WhatsAppLink";
import goaImages from "../../../data/goaData.js";
import GoaGallery from "./GoaGallery";
import Header from "@/components/header/Header";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/Ajwa/goa/goa1.webp",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/goa/goa2.webp",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/goa/goa3.webp",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/goa/goa4.webp",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/goa/goa5.webp",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb pagename="Goa Package" pagetitle="Goa Package" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/Ajwa/goa/goa1.webp" alt="" />
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
                          <img src="/assets/img/Ajwa/goa/goa2.webp" alt="" />
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
                          <img src="/assets/img/Ajwa/goa/goa3.webp" alt="" />
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
                          <img src="/assets/img/Ajwa/goa/goa4.webp" alt="" />
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
                          <img src="/assets/img/Ajwa/goa/goa5.webp" alt="" />
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
                Discover the Vibrance of Goa! From golden beaches to lively
                nightlife, immerse yourself in sun, adventure, and rich coastal
                culture
              </h2>
              <div className="tour-price">
                <span>From:&nbsp;</span>
                <h3>₹8,999/</h3>
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
                Goa is renowned for its stunning beaches, vibrant culture,
                tropical climate, and rich history. With colorful architecture,
                lush greenery, and breathtaking shores, it offers a unique blend
                of Portuguese and Indian heritage. Visitors flock here for
                world-class music, dance, and mesmerizing sunsets.
              </p>
              <WhatsAppLink
                packageName="Goa"
                className="primary-btn1"
              ></WhatsAppLink>
              <div className="highlight-tour mb-20">
                <h4>Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Chapora Fort &amp; Vagator Beach – Experience breathtaking
                    views and Goa’s laid-back vibe.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Nightlife at Baga &amp; Calangute Beach – Enjoy the lively
                    party scene and beachfront entertainment.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Aguada Fort &amp; Old Goa Churches – Explore Goa’s rich
                    history with visits to iconic forts and UNESCO-listed
                    churches.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Colva Beach &amp; Shopping – Relax at the serene Colva Beach
                    and shop for souvenirs in local markets.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Sunset Views &amp; Leisure Time – Unwind with scenic beach
                    walks and resort activities for a perfect getaway.
                  </li>
                </ul>
              </div>
              <h4>Itinerary</h4>
              <div className="accordion tour-plan" id="tourPlan">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <span>Day 01 :</span> Arrival &amp; North Goa Exploration
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#tourPlan"
                  >
                    <div className="accordion-body">
                      <p>
                        Your first day in Goa offers a perfect mix of
                        exploration, relaxation, and excitement. From visiting
                        iconic landmarks like Chapora Fort with its breathtaking
                        sea views to experiencing the laid-back charm of Anjuna
                        and Vagator beaches, the day is filled with scenic
                        beauty and cultural experiences. After enjoying a
                        delicious Goan lunch, you’ll have time to unwind at your
                        resort, making use of its pool and leisure activities.
                        As the sun sets, step into the vibrant nightlife of Goa
                        with a leisurely walk along Calangute or Baga Beach,
                        where lively music, beachside shacks, and dazzling
                        parties create an electrifying atmosphere. Finally,
                        return to your resort for a hearty dinner and a
                        comfortable overnight stay, ready to embrace the
                        adventures awaiting the next day.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Arrival at Madgaon
                          Railway Station – Reach Madgaon and begin your
                          journey.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Depart to North Goa –
                          Travel towards North Goa and enjoy the scenic drive.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Check-in to Hotel – Check-in depending on arrival time
                          and freshen up.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Explore North Goa’s
                          Best Spots – Visit Chapora Fort, Anjuna Beach (Hippies
                          Beach), and Vagator Beach.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Lunch – Enjoy a
                          delicious Goan meal at a local restaurant.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Resort Activities –
                          Relax at the resort, enjoy pool time, or participate
                          in resort activities.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Night Walk to Party
                          Beaches – Stroll along Calangute Beach or Baga Beach,
                          famous for nightlife and parties.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Resort –
                          Head back for a relaxing evening.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Dinner &amp;
                          Overnight Stay – Enjoy dinner and rest for the night.
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
                      <span>Day 02 :</span> Leisure &amp; Relaxation
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
                        Breakfast at Hotel – Start your day with a delicious
                        breakfast at the hotel.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Leisure Day – Enjoy
                          the day at your own pace, exploring Goa as you wish.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Relax at the Beach or
                          Resort – Spend time soaking up the sun at a nearby
                          beach or unwind with resort amenities like the pool
                          and spa.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Optional Activities – Indulge in water sports, explore
                          local markets, or visit nearby cafes for a laid-back
                          experience.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Sunset by the Beach –
                          End the day with a peaceful evening walk along the
                          shore, enjoying the stunning sunset views.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Dinner &amp;
                          Overnight Stay – Return to the hotel for a delicious
                          dinner and a restful night, preparing for the
                          adventures ahead.
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
                      <span>Day 03 :</span> Exploring Goa’s Heritage &amp;
                      Beaches
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
                        End your Goa trip with a perfect blend of history,
                        culture, and beachside relaxation, taking home
                        unforgettable memories.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at Hotel –
                          Start your day with a refreshing breakfast before
                          heading out for sightseeing.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Visit Aguada Fort –
                          Explore the historic 17th-century fort, known for its
                          stunning views of the Arabian Sea.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Old Goa Exploration – Discover the rich heritage of
                          Goa with visits to St. Augustine Tower, Old Goa
                          Church, and Basilica of Bom Jesus, a UNESCO World
                          Heritage Site.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Adventure River Rafting (Optional) – Experience the
                          thrill of river rafting on the Beas River (optional,
                          available at an additional cost).
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Lunch Break – Enjoy a
                          delightful meal at a local Goan restaurant
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Colva Beach Visit – Relax at Colva Beach, known for
                          its golden sands and serene ambiance.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Shopping Time – Browse through local markets for
                          souvenirs and Goan specialties.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Dinner &amp; Departure – Savor your final dinner in
                          Goa before heading to Madgaon Railway Station for
                          departure.
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
                    <i className="bi bi-check-lg" /> 2 nights accommodation at
                    the selected hotel
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Daily breakfast (fixed
                    menu) at the hotel
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Transportation by
                    air-conditioned vehicle as per the itinerary
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> All vehicle-related
                    expenses including parking, tolls, permits, and driver
                    allowances
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Entrance fees as applicable
                    for visits mentioned in the itinerary
                  </li>
                </ul>
                <ul className="exclud">
                  <li>
                    <i className="bi bi-x-lg" /> Airfare, train tickets, and
                    travel insurance
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Meals not mentioned in the
                    inclusions
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Personal expenses such as telephone calls, laundry, tips,
                    etc.
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    Any services not specified under package inclusions
                  </li>
                  <li>
                    <i className="bi bi-x-lg" />
                    GST @ 5% on the total package price
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
          </h4> */}
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
        {/*<GoaGallery images={goaImages} /> */}
      </div>
      <Footer />
    </>
  );
};

export default Page;
