"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newsletter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import SelectComponent from "@/uitils/SelectComponent";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb pagename="Packages" pagetitle="Packages" />
      <div className="package-grid-with-sidebar-section pt-120 mb-40">
        <div className="container">
          <div className="row g-lg-4 ">
            <div className="col-lg-12">
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link
                          href="/package/maldives-package"
                          className="card-img"
                        >
                          <img
                            src="/assets/img/Ajwa/maldives5-ajwa.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span className="date">4 Days / 3 Night</span>
                          <div className="location">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                            >
                              <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                            </svg>
                            <ul className="location-list">
                              <li>
                                <Link
                                  href="https://g.co/kgs/Hh31rU9"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  MALDIVES
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/maldives-package">
                              Explore the Maldives: Beaches, Marine Life &amp;
                              Serenity.
                            </Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <h6>Starting From:</h6>
                            <span>₹69,499</span>
                            <p>TAXES INCL/PERS</p>
                          </div>
                          <Link
                            href="/package/maldives-package"
                            className="primary-btn2"
                          >
                            Book a Trip
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                              <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link
                          href="/package/malaysia-package"
                          className="card-img"
                        >
                          <img
                            src="/assets/img/Ajwa/Malaysia-ajwa.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span className="date">5 Days / 4 Night</span>
                          <div className="location">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                            >
                              <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                            </svg>
                            <ul className="location-list">
                              <li>
                                <Link href="/package">Malaysia</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/malaysia-package">
                              Explore Malaysia’s Wonders, Culture, and Vibrance.
                            </Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <h6>Starting Form:</h6>
                            <span>₹34,999</span>
                            <p>TAXES INCL/PERS</p>
                          </div>
                          <Link
                            href="/package/malaysia-package"
                            className="primary-btn2"
                          >
                            Book a Trip
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                              <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link
                          href="/package/package-details"
                          className="card-img"
                        >
                          <img
                            src="/assets/img/home1/package-card-img3.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span className="date">5 Days / 6 Night</span>
                          <div className="location">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                            >
                              <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                            </svg>
                            <ul className="location-list">
                              <li>
                                <Link href="/package">France</Link>
                              </li>
                              <li>
                                <Link href="/package">Spain Tour</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              Embark Tranquility, Adventure, and Spiritual.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Alexandria</Link>
                              </li>
                              <li>
                                <Link href="/package">Sharm El Sheikh</Link>
                              </li>
                              <li>
                                <Link href="/package">Mansoura</Link>
                              </li>
                              <li>
                                <Link href="/package">Karachi</Link>
                              </li>
                              <li>
                                <Link href="/package">Lahore</Link>
                              </li>
                              <li>
                                <Link href="/package">Islamabad</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <h6>Starting Form:</h6>
                            <span>
                              $1,988 <del>$2500</del>
                            </span>
                            <p>TAXES INCL/PERS</p>
                          </div>
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Book a Trip
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                              <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link
                          href="/package/package-details"
                          className="card-img"
                        >
                          <img
                            src="/assets/img/home1/package-card-img4.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span className="date">8 Days / 9 Night</span>
                          <div className="location">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                            >
                              <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                            </svg>
                            <ul className="location-list">
                              <li>
                                <Link href="/package">India</Link>
                              </li>
                              <li>
                                <Link href="/package">Japan Tour</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              Embracing City Lights, Landm, and Iconic Culture.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list">
                              <li>
                                <Link href="/package">Bangalore</Link>
                              </li>
                              <li>
                                <Link href="/package">Chennai</Link>
                              </li>
                              <li>
                                <Link href="/package">New Delhi</Link>
                              </li>
                              <li>
                                <Link href="/package">Dhaka</Link>
                              </li>
                              <li>
                                <Link href="/package">Rangpur</Link>
                              </li>
                              <li>
                                <Link href="/package">Sylhet</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <h6>Starting Form:</h6>
                            <span>$3,798</span>
                            <p>TAXES INCL/PERS</p>
                          </div>
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Book a Trip
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                              <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link
                          href="/package/package-details"
                          className="card-img"
                        >
                          <img
                            src="/assets/img/home1/package-card-img5.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span className="date">6 Days / 7 Night</span>
                          <div className="location">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                            >
                              <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                            </svg>
                            <ul className="location-list">
                              <li>
                                <Link href="/package">Brazil</Link>
                              </li>
                              <li>
                                <Link href="/package">Hungary Tour</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              A Journey of Tour Beauty and Inspiration.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Paris</Link>
                              </li>
                              <li>
                                <Link href="/package">Marseille</Link>
                              </li>
                              <li>
                                <Link href="/package">Bordeaux</Link>
                              </li>
                              <li>
                                <Link href="/package">Madrid</Link>
                              </li>
                              <li>
                                <Link href="/package">Barcelona</Link>
                              </li>
                              <li>
                                <Link href="/package">Valencia</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <h6>Starting Form:</h6>
                            <span>
                              $4,562 <del>$5,000</del>
                            </span>
                            <p>TAXES INCL/PERS</p>
                          </div>
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Book a Trip
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                              <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link
                          href="/package/package-details"
                          className="card-img"
                        >
                          <img
                            src="/assets/img/home1/package-card-img6.png"
                            alt=""
                          />
                        </Link>
                        <div className="batch">
                          <span className="date">4 Days / 5 Night</span>
                          <div className="location">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                            >
                              <path d="M8.99939 0C5.40484 0 2.48047 2.92437 2.48047 6.51888C2.48047 10.9798 8.31426 17.5287 8.56264 17.8053C8.79594 18.0651 9.20326 18.0646 9.43613 17.8053C9.68451 17.5287 15.5183 10.9798 15.5183 6.51888C15.5182 2.92437 12.5939 0 8.99939 0ZM8.99939 9.79871C7.19088 9.79871 5.71959 8.32739 5.71959 6.51888C5.71959 4.71037 7.19091 3.23909 8.99939 3.23909C10.8079 3.23909 12.2791 4.71041 12.2791 6.51892C12.2791 8.32743 10.8079 9.79871 8.99939 9.79871Z" />
                            </svg>
                            <ul className="location-list">
                              <li>
                                <Link href="/package">Nepal</Link>
                              </li>
                              <li>
                                <Link href="/package">Indonesia Tour </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="package-card-content">
                        <div className="card-content-top">
                          <h5>
                            <Link href="/package/package-details">
                              Adventure Art, Architecture, and Mediterranean.
                            </Link>
                          </h5>
                          <div className="location-area">
                            <ul className="location-list scrollTextAni">
                              <li>
                                <Link href="/package">Kathmandu</Link>
                              </li>
                              <li>
                                <Link href="/package">Pokhara</Link>
                              </li>
                              <li>
                                <Link href="/package">Lalitpur</Link>
                              </li>
                              <li>
                                <Link href="/package">Jakarta</Link>
                              </li>
                              <li>
                                <Link href="/package">Surabaya</Link>
                              </li>
                              <li>
                                <Link href="/package">Bandung</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-content-bottom">
                          <div className="price-area">
                            <h6>Starting Form:</h6>
                            <span>
                              $5,320 <del>$5,500</del>
                            </span>
                            <p>TAXES INCL/PERS</p>
                          </div>
                          <Link
                            href="/package/package-details"
                            className="primary-btn2"
                          >
                            Book a Trip
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                              <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
