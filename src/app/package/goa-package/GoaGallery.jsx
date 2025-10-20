"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

// Props: images = [{id, imageBig}], className for extra styling
const GoaGallery = ({ images, className }) => {
    const [isOpenImg, setOpenImg] = useState({
        openingState: false,
        openingIndex: 0,
    });
    return (
        <div className={`package-details-area pt-40 mb-120 position-relative ${className || ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="package-img-group mb-50">
                            <div className="row g-3">
                                {images.map((img, idx) => (
                                    <div key={img.id} className="col-6 col-md-4 col-lg-4">
                                        <div className="gallery-img-wrap">
                                            <img
                                                src={img.imageBig}
                                                alt=""
                                                className="img-fluid"
                                                style={{ width: "100%", height: "25em", objectFit: "cover" }}
                                            />
                                            <a
                                                onClick={() =>
                                                    setOpenImg({ openingState: true, openingIndex: idx })
                                                }
                                            >
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Lightbox
                className="img-fluid"
                open={isOpenImg.openingState}
                plugins={[Fullscreen]}
                index={isOpenImg.openingIndex}
                close={() => setOpenImg(false)}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
                slides={images.map((elem) => ({ src: elem.imageBig }))}
            />
        </div>
    );
};

export default GoaGallery;
