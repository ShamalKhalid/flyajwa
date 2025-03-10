"use client";
import { useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import galleryImages from "@/data/galleryData"; // Importing images

const Page = () => {
  const [visibleCount, setVisibleCount] = useState(12); // Show 12 images initially
  const batchSize = 9; // Number of images to load per click

  const loadMoreImages = () => {
    setVisibleCount((prevCount) => prevCount + batchSize);
  };

  return (
    <>
      <Header />
      <div className="row mt-50">
        <div className="col-lg-12">
          <div className="section-title2 text-center">
            <div className="eg-section-tag">
              <span>Captured Moments with Ajwa</span>
            </div>
            <h2>Cherished Travels, Unforgettable Memories</h2>
          </div>
        </div>
      </div>
      <div className="destination-gallery pt-120 mb-120">
        <div className="container">
          <div className="row g-3">
            {galleryImages.slice(0, visibleCount).map((img) => (
              <div key={img.id} className="col-lg-4 col-md-4 col-sm-6">
                <div className="gallery-img-wrap">
                  <img src={img.imageBig} alt={`Gallery ${img.id}`} />
                </div>
              </div>
            ))}
          </div>
          {visibleCount < galleryImages.length && (
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center mt-50">
                <button onClick={loadMoreImages} className="primary-btn1">
                  Load More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
