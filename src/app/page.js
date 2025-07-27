"use client";
import { useState } from "react";
import Preloader from "./preload";
import About1 from "@/components/about/About1";
import Home1Activities from "@/components/activities/Home1Activities";
import Banner1 from "@/components/banner/Banner1";
import Destination1 from "@/components/destination/Destination1";
import Home1Facilities2 from "@/components/facilitySlide/Home1Facilities2";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Home1Visa from "@/components/visaComponents/Home1Visa";
import Home1WhyChoose from "@/components/whyChoose/Home1WhyChoose";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <Header />
          <Banner1 />
          <About1 />
          <Destination1 />
          <Home1Facilities2 />
          <Home1WhyChoose />
          <Home1Activities />
          <Home1Testimonial />
          <Home1Visa />
          <Footer />
        </>
      )}
    </>
  );
}
