"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb pagename="Our Services" pagetitle="Our Services" />
      <div className="package-grid-with-sidebar-section pt-120 mb-40">
        <div className="container">
          <div className="row g-lg-4 ">
            <div className="col-lg-12">
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/contact" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/tours.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="package-card-content">
                        <div
                          className="card-content-top"
                          style={{ textAlign: "center!important" }}
                        >
                          <h5>
                            <Link href="/package">Tours</Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <Link href="/package" className="primary-btn6">
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/visa" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/visa.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="package-card-content">
                        <div
                          className="card-content-top"
                          style={{ textAlign: "center!important" }}
                        >
                          <h5>
                            <Link href="/contact">Visa Services</Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <Link href="/contact" className="primary-btn6">
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/contact" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/study-abroad.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="package-card-content">
                        <div
                          className="card-content-top"
                          style={{ textAlign: "center!important" }}
                        >
                          <h5>
                            <Link href="/contact">Study Abroad</Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <Link href="/contact" className="primary-btn6">
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/contact" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/recruitment.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="package-card-content">
                        <div
                          className="card-content-top"
                          style={{ textAlign: "center!important" }}
                        >
                          <h5>
                            <Link href="/contact">Overseas Recruitment</Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <Link href="/contact" className="primary-btn6">
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/contact" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/tickets.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="package-card-content">
                        <div
                          className="card-content-top"
                          style={{ textAlign: "center!important" }}
                        >
                          <h5>
                            <Link href="/contact">Ticketing Services</Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <Link href="/contact" className="primary-btn6">
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/contact" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/hajj.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="package-card-content">
                        <div
                          className="card-content-top"
                          style={{ textAlign: "center!important" }}
                        >
                          <h5>
                            <Link href="/contact">Umrah &amp; Hajj</Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <Link href="/contact" className="primary-btn6">
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/contact" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/docs.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="package-card-content">
                        <div
                          className="card-content-top"
                          style={{ textAlign: "center!important" }}
                        >
                          <h5>
                            <Link href="/contact">Document Attestation</Link>
                          </h5>
                        </div>
                        <div className="card-content-bottom">
                          <Link href="/contact" className="primary-btn6">
                            Contact Us
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
