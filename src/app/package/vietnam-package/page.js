"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
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
      imageBig: "/assets/img/Ajwa/vietnam/vietnam1.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/vietnam/vietnam2.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/vietnam/vietnam3.jpeg",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/vietnam/vietnam4.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/vietnam/vietnam5.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb pagename="Vietnam Package" pagetitle="Vietnam Package" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/Ajwa/vietnam/vietnam1.jpg" alt="" />
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
                            src="/assets/img/Ajwa/vietnam/vietnam2.jpg"
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
                            src="/assets/img/Ajwa/vietnam/vietnam3.jpeg"
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
                            src="/assets/img/Ajwa/vietnam/vietnam4.jpg"
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
                            src="/assets/img/Ajwa/vietnam/vietnam5.jpg"
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
                Vietnam: A land of timeless beauty, from bustling cities to
                serene landscapes.
              </h2>
              <div className="tour-price">
                <span>From:&nbsp;</span>
                <h3>₹18,499/</h3>
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
                Experience the Charm of Vietnam! From bustling cities to
                tranquil riverside landscapes, immerse yourself in a journey of
                culture, adventure, and natural wonders.
              </p>
              <div className="highlight-tour mb-20">
                <h4>Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Ho Chi Minh City Tour – Explore the iconic Notre Dame
                    Cathedral, Central Post Office, and War Remnants Museum.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Cu Chi Tunnels – Discover the historic underground tunnels
                    and learn about wartime survival.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Mekong River Adventure – Experience a hand-rowed sampan ride
                    along Thoi Son Canal and visit Unicorn Island.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Vinh Trang Pagoda – Visit this historic and beautiful pagoda
                    in My Tho.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Cycling through Tan Thach Hamlet – Ride through the peaceful
                    countryside and experience local rural life.
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
                      <span>Day 01 :</span> Arrival &amp; Ho Chi Minh City
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
                        Upon arrival at Ho Chi Minh Airport, our team will greet
                        you and transfer you to your hotel for check-in and
                        relaxation. After a short rest, set out to explore the
                        city's highlights, starting with the culturally rich Cho
                        Lon Chinatown and the beautiful Jade Emperor Pagoda.
                        Wander through local markets and soak in the vibrant
                        energy of Cho Lon. End the day with a stroll along
                        Nguyen Hue Walking Street before returning to the hotel
                        for an overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Arrival at Ho Chi Minh Airport – Warm welcome by our
                          team and smooth transfer to the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Hotel Check-in &amp;
                          Rest – Relax after your journey.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Cho Lon Chinatown –
                          Discover the vibrant Chinese district of Ho Chi Minh
                          City.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Jade Emperor Pagoda – Visit this sacred site adorned
                          with intricate wooden carvings.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Market Exploration – Stroll through bustling local
                          markets.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Nguyen Hue Walking Street – Enjoy the vibrant street
                          filled with entertainment and local charm.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Overnight Stay at Hotel – Rest and recharge for the
                          next day's adventures.
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
                      <span>Day 02 :</span> Ho Chi Minh City Tour &amp; Cu Chi
                      Tunnels Exploration
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
                        After breakfast, embark on a sightseeing tour of Ho Chi
                        Minh City, visiting historical landmarks like the Notre
                        Dame Cathedral, the famous Central Post Office, and the
                        War Remnants Museum. After lunch, journey to the Cu Chi
                        Tunnels, an extensive underground network used during
                        the Vietnam War. Begin with an introductory movie
                        showcasing the tunnel construction and the resilience of
                        the people who lived there. Conclude the day with an
                        overnight stay at the hotel.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Start your day with a delicious meal.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Ho Chi Minh City
                          Exploration – Discover the city's rich history and
                          culture.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Notre Dame Cathedral
                          – Admire the stunning French colonial architecture.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Central Post Office –
                          Visit this iconic landmark designed by Gustave Eiffel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> War Remnants Museum –
                          Gain insights into Vietnam’s war history.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Lunch Break – Enjoy a
                          local Vietnamese meal.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Cu Chi Tunnels Tour –
                          Travel 1.5 hours to explore the historic underground
                          tunnels.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Introductory Movie –
                          Learn about the construction of the tunnels and
                          wartime survival.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Overnight Stay at
                          Hotel – Rest and prepare for the next day’s adventure.
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
                      <span>Day 03 :</span> Mekong River Adventure &amp; My Tho
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
                        After breakfast, begin your journey to My Tho, where
                        you’ll visit the Vinh Trang Pagoda and explore the
                        beautiful Unicorn Island. Enjoy a relaxing hand-rowed
                        sampan ride along the Thoi Son Canal and visit a honey
                        farm for a taste of local honey tea. Continue your
                        adventure with a coconut candy-making workshop and a
                        peaceful cycling tour through Tan Thach hamlet. In the
                        evening, return to your hotel for an overnight stay.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Enjoy a hearty breakfast to start your day.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Journey to My Tho –
                          Travel to this picturesque town on the left bank of
                          the Mekong River.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Vinh Trang Pagoda –
                          Visit this beautiful and historic pagoda, a symbol of
                          the region’s spiritual heritage.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Unicorn Island –
                          Explore this charming island and enjoy its natural
                          beauty.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Hand-Rowed Sampan
                          Ride – Glide along the Thoi Son Canal in a traditional
                          sampan boat.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Honey Farm Visit –
                          Experience local agriculture with a visit to a honey
                          farm, and enjoy a cup of refreshing honey tea.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Coconut Candy
                          Workshop – Learn how coconut candies are made and
                          taste these local treats.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Cycling through Tan
                          Thach Hamlet – Ride through the peaceful and scenic
                          Tan Thach hamlet, experiencing rural life.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return &amp;
                          Overnight Stay at Hotel – Rest after a day of
                          exploration.
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
                      <span>Day 04 :</span> Departure from Ho Chi Minh City
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
                        After breakfast, check out from the hotel and proceed
                        with the airport transfer for your flight back home.
                        Take with you the memories of your exciting and
                        enriching journey through Vietnam.
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
