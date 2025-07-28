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
      imageBig: "/assets/img/Ajwa/dubai/dubai1.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/dubai/dubai2.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/dubai/dubai3.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/dubai/dubai4.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/dubai/dubai5.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb pagename="Dubai Package" pagetitle="Dubai Package" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/Ajwa/dubai/dubai1.jpg" alt="" />
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
                          <img src="/assets/img/Ajwa/dubai/dubai2.jpg" alt="" />
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
                          <img src="/assets/img/Ajwa/dubai/dubai3.jpg" alt="" />
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
                          <img src="/assets/img/Ajwa/dubai/dubai4.jpg" alt="" />
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
                          <img src="/assets/img/Ajwa/dubai/dubai5.jpg" alt="" />
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
                Discover the allure of Dubai – a city of luxury, innovation, and
                endless adventure.
              </h2>
              <div className="tour-price">
                <span>From:&nbsp;</span>
                <h3>₹57,999/</h3>
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
                Dubai is a global hotspot that beautifully blends modern luxury
                with rich tradition, offering unforgettable experiences. A
                highlight of any trip is the **desert safari**, where you can
                venture across sweeping sand dunes, enjoy thrilling dune
                bashing, ride camels, and indulge in authentic Bedouin
                entertainment under the starlit sky.
              </p>
              <div className="highlight-tour mb-20">
                <h4>Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Desert Safari – Experience dune bashing, camel rides, and
                    cultural performances under the stars.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Burj Khalifa Level 124 – Take in panoramic views from one of
                    the tallest buildings in the world.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Dubai Frame &amp; Miracle Garden – Discover stunning city
                    views and breathtaking floral displays.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Sheikh Zayed Grand Mosque – Visit one of the largest and
                    most beautiful mosques in the world.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Marina Dhow Cruise Dinner – Enjoy a scenic dinner cruise
                    along Dubai's Marina, with beautiful views of the city.
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
                        Upon arriving at DXB airport, check into your hotel and
                        prepare for an exhilarating Desert Safari experience.
                        Enjoy a thrilling dune bashing ride, followed by a
                        delicious dinner and captivating cultural performances
                        at a desert camp, before being dropped off at your hotel
                        for the night.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Airport Pick-up – Arrival at DXB Airport and transfer
                          to your Dubai hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Hotel Check-in –
                          Check in and relax at the hotel.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Afternoon Pick-up for
                          Desert Safari – Get ready for an exciting afternoon of
                          adventure.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Dune Bashing – Experience thrilling dune bashing in a
                          Land Cruiser across the golden sands
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Dinner at Desert Camp - Enjoy a delicious dinner at
                          the desert camp with a Tanura show, fire performance,
                          and belly dance.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Late Evening Drop-off – Return to the hotel for a
                          restful night.
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
                      <span>Day 02 :</span> Dubai City Tour &amp; Burj Khalifa
                      Experience
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
                        After breakfast, embark on a private city tour visiting
                        Dubai’s landmarks, followed by a visit to Burj Khalifa
                        and the Fountain Show before returning to the hotel.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Breakfast at the
                          Hotel – Start your day with a hearty breakfast.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Pick-up for Half-Day
                          Dubai City Tour – Enjoy a private, 4-hour city tour,
                          including stops at the Museum of the Future, Zabeel
                          Palace, Jumeirah Mosque, Burj Al Arab, Jumeirah Beach,
                          The Pointe, and photo stops at key landmarks like Palm
                          Island, Atlantis Hotel, Marina Mall, and Mall of
                          Emirates. You’ll also pass by Etihad Museum, Burj
                          Khalifa, and Dubai Mall.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Burj Khalifa Level 124 – Experience stunning views
                          from the 124th floor during non-prime hours.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Fountain Show – Watch
                          the captivating Dubai Fountain show.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return Transfer –
                          Head back to your hotel after an exciting day.
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
                      <span>Day 03 :</span> Dubai Frame, Miracle Garden &amp;
                      Global Village Exploration
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
                        Enjoy a private transfer for a day of sightseeing,
                        starting with the Dubai Frame, followed by a visit to
                        Miracle Garden and Global Village, before returning to
                        your hotel.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" />
                          Pick-up from Hotel – Begin your day with a private
                          transfer to visit the Dubai Frame, an iconic landmark
                          offering breathtaking views of the city.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Miracle Garden –
                          Explore the stunning floral displays at Miracle
                          Garden, home to millions of flowers arranged in
                          beautiful patterns.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Global Village – Experience the vibrant cultural
                          attractions at Global Village, a unique destination
                          combining shopping, entertainment, and international
                          cuisine.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to Hotel –
                          After a fun-filled day, enjoy a private transfer back
                          to your hotel.
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
                      <span>Day 04 :</span> Abu Dhabi City Tour &amp; Marina
                      Dhow Cruise Dinner
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
                        Enjoy a guided tour of Abu Dhabi, visiting major
                        landmarks and enjoying a shopping stop. Finish the day
                        with a scenic Marina-Dhow cruise dinner, all with
                        private transfers.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Pick-up from Hotel –
                          Begin your professional guided tour of Abu Dhabi with
                          a drive along Sheikh Zayed Road.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          BAPS Abu Dhabi Hindu Temple – Visit the stunning BAPS
                          Hindu Temple.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Ferrari World – Stop for photos and a lunch break at
                          Ferrari World.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Sheikh Zayed Grand
                          Mosque – Visit the iconic Sheikh Zayed Grand Mosque.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Al Bateen
                          Presidential Palace, His Highness Palace, Emirates
                          Palace Hotel, ADNOC HQ, Etihad Tower, Sadiya Island,
                          Marina Mall, Corniche, Heritage Village, Yas Island –
                          Pass by these renowned landmarks and attractions in
                          Abu Dhabi.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Date Market – Enjoy a
                          shopping stopover at the famous Date Market.
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Evening Pick-up for
                          Marina-Dhow Cruise Dinner – Experience an
                          unforgettable dinner cruise along the Marina with
                          private transfer.
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
                      <span>Day 05 :</span> Departure from Dubai
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
                        After check-out, you’ll be transferred privately from
                        your hotel to the airport for your flight back home.
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
