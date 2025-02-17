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
      <Breadcrumb pagename="Services" pagetitle="Services" />
      <div className="package-grid-with-sidebar-section pt-120 mb-40">
        <div className="container">
          <div className="row g-lg-4 ">
            <div className="col-lg-12">
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/visa" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/visa.jpg"
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
                            <Link href="/contact">Visit Visas</Link>
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
                            src="/assets/img/ajwa/services/recruitment.jpg"
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
                            <Link href="/contact">Recruitment</Link>
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
                            src="/assets/img/ajwa/services/hajj.jpg"
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
                            <Link href="/contact">
                              Umrah &amp; Hajj booking
                            </Link>
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
                            src="/assets/img/ajwa/services/docs.jpg"
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
                  <div className="col-lg-4 col-md-6 item">
                    <div className="package-card">
                      <div className="package-card-img-wrap">
                        <Link href="/contact" className="card-img">
                          <img
                            src="/assets/img/ajwa/services/tickets.jpg"
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
                            <Link href="/contact">Flight Tickets</Link>
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
                            src="/assets/img/ajwa/services/tours.jpg"
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
