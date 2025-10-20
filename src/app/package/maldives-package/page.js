"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import WhatsAppLink from "@/components/whyChoose/WhatsAppLink";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/Ajwa/maldives/maldives1-ajwa.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/Ajwa/maldives/maldives2-ajwa.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/Ajwa/maldives/maldives3-ajwa.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/Ajwa/maldives/maldives5-ajwa.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/Ajwa/maldives/maldives4-ajwa.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumb pagename="Maldives Package" pagetitle="Maldives Package" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="row">
            <div className="co-lg-12">
              <div className="package-img-group mb-50">
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <div className="gallery-img-wrap">
                      <img
                        src="/assets/img/Ajwa/maldives/maldives1-ajwa.jpg"
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
                            src="/assets/img/Ajwa/maldives/maldives2-ajwa.jpg"
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
                            src="/assets/img/Ajwa/maldives/maldives3-ajwa.jpg"
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
                            src="/assets/img/Ajwa/maldives/maldives4-ajwa.jpg"
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
                            src="/assets/img/Ajwa/maldives/maldives5-ajwa.jpg"
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
              <h2>Experience the Maldives: A Thrilling Adventure Awaits!</h2>
              <div className="tour-price">
                <span>From:&nbsp;</span>
                <h3>₹24,499/</h3>
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
                Discover the breathtaking beauty of the Maldives while indulging
                in the most thrilling and adventurous activities. From diving
                into vibrant coral reefs to jet skiing across crystal-clear
                waters, your Maldives adventure promises unforgettable
                excitement.
              </p>
              <WhatsAppLink packageName="Maldives" className="primary-btn1">
                View All Destination
              </WhatsAppLink>
              <div className="highlight-tour mb-20 mt-3">
                <h4 className="subtitle-underline">Highlights of the Tour</h4>
                <ul>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Sunset Cruise &amp; Fishing Trip – Enjoy breathtaking sunset
                    views and a fresh BBQ dinner.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Snorkeling &amp; Dolphin Watching – Explore vibrant coral
                    reefs and spot dolphins &amp; turtles.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Sandbank Picnic – Relax on a stunning secluded sandbank with
                    a packed lunch.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Manta Ray &amp; Shark Encounter – Witness majestic marine
                    life up close.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-check" />
                    </span>{" "}
                    Thrilling Water Sports – Experience jet skiing, parasailing,
                    kayaking, and more.
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
                      <span>Day 01 :</span> Arrival
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
                        Upon arrival at Malé International Airport, our
                        transportation team will ensure a smooth transfer to
                        Maafushi Island. Enjoy a warm welcome upon arrival and
                        spend the day exploring the island’s scenic beauty and
                        attractions. Later, embark on a memorable sunset cruise
                        with a fishing experience, followed by a delicious fish
                        BBQ dinner. Conclude your day with a relaxing overnight
                        stay at your hotel.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Explore Maafushi
                          Island – Visit Bikini Beach, Floating Bar, and other
                          attractions
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Enjoy a scenic Sunset
                          Cruise &amp; Fishing Experience
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Savor a freshly prepared Fish BBQ Dinner
                        </li>
                        <li>
                          <i className="bi bi-check-lg" />
                          Accommodation: Hotel in Maafushi (Stay – Night 1)
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
                      <span>Day 02 :</span> Half-Day Snorkeling &amp; Sandbank
                      Adventure
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
                        After breakfast, set out on an exciting half-day trip
                        filled with marine adventures. Begin with a thrilling
                        snorkeling experience, where you can explore vibrant
                        coral reefs and swim alongside colorful marine life.
                        Continue to the lucky dolphin and turtle reef, where you
                        might catch a glimpse of these majestic creatures in
                        their natural habitat. Then, relax on a pristine
                        sandbank, surrounded by turquoise waters, where a packed
                        lunch will be provided. After a day of exploration and
                        relaxation, return to the island and unwind with an
                        overnight stay at your hotel.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Snorkel through
                          vibrant coral reefs and discover colorful marine life
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Spot lucky dolphins
                          and sea turtles at the turtle reef
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Relax on a
                          breathtaking sandbank surrounded by turquoise waters
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Enjoy a delicious
                          packed lunch on the sandbank
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Return to the island
                          and unwind at your hotel (Stay – Night 2)
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
                      <span>Day 03 :</span> Explore the Maldives &amp; Exciting
                      Adventures
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
                        The Maldives is home to a vast population of reef manta
                        rays (Mobula alfredi) and an annual migration of oceanic
                        manta rays (Mobula birostris). Take this day to explore
                        the wonders of the ocean or indulge in thrilling
                        adventure activities at your own pace. After an
                        exhilarating day of exploration and adventure, return to
                        the hotel for an overnight stay (Stay – Night 3).
                      </p>
                      <h4>Optional Activities (At Your Own Cost):</h4>
                      <ul>
                        <li>
                          <i className="bi bi-check-lg" /> Manta Ray Trip –
                          Witness the graceful manta rays in their natural
                          habitat
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Shark Trip –
                          Experience an up-close encounter with reef sharks
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Island Hopping –
                          Discover the beauty of nearby islands
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Private Island Resort
                          Tour – Indulge in luxury at an exclusive resort
                          (Optional)
                        </li>
                        <li>
                          <i className="bi bi-check-lg" /> Adventure Activities
                          – Enjoy parasailing, jet skiing, fun tubing, kayaking,
                          and more
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
                      <span>Day 04 :</span> Departure
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
                        On your final day, enjoy a delicious breakfast before
                        checking out from the hotel. Based on your flight time,
                        you will be transferred to Velana International Airport
                        by speedboat, ensuring a smooth and scenic journey.
                        After a memorable trip, we bid farewell as you depart
                        back home, carrying unforgettable experiences from the
                        Maldives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="subtitle-underline">Included and Excluded</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  <li>
                    <i className="bi bi-check-lg" /> Comfortable 3-star
                    accommodation throughout the trip
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Airport pickup and drop via
                    speed boat or seaplane transfers
                  </li>
                  <li>
                    <i className="bi bi-check-lg" />
                    Guided sightseeing to all destinations mentioned in the
                    itinerary
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> All meals included
                    (breakfast, lunch, and dinner)
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Excursion to the sandbank
                    for leisure and photography
                  </li>
                  <li>
                    <i className="bi bi-check-lg" /> Lucky dolphin and turtle
                    reef watching tour
                  </li>
                </ul>
                <ul className="exclud">
                  <li>
                    <i className="bi bi-x-lg" /> Flight tickets to and from the
                    destination
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Activities not listed under
                    inclusions
                  </li>
                  <li>
                    <i className="bi bi-x-lg" /> Personal expenses such as
                    shopping, tips, or additional meals
                  </li>
                </ul>
              </div>
              <div className="faq-content-wrap mb-10">
                <div className="faq-content-title mb-20">
                  <h4>Frequently Asked Question</h4>
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
