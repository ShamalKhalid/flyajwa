import About1 from "@/components/about/About1";
import Home1Activities from "@/components/activities/Home1Activities";
import Banner1 from "@/components/banner/Banner1";
import Banner1Bottom from "@/components/banner/Banner1Bottom";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Newsletter from "@/components/common/Newsletter";
import Destination1 from "@/components/destination/Destination1";
import Home1FacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
import Home1Facilities2 from "@/components/facilitySlide/Home1Facilities2";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
// import Home1popularTour from "@/components/popularTour/Home1popularTour";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Topbar2 from "@/components/topbar/Topbar2";
import Home1TourPackage from "@/components/tourPackage/Home1TourPackage";
import Home1Visa from "@/components/visaComponents/Home1Visa";
import Home1WhyChoose from "@/components/whyChoose/Home1WhyChoose";
export const metadata = {
  title: "Fly Ajwa by Ajwa Travels and Holidays",
  description:
    "Explore amazing travel packages with Ajwa Travels and Holidays. Plan your dream vacation now with FlyAjwa.in.",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <Header />
      <Banner1 />
      <About1 />
      <Destination1 />
      <Home1Facilities2 />
      {/*<Home1FacilitySlide /> */}
      {/*<Home1TourPackage /> */}
      <Home1WhyChoose />
      {/* <Home1popularTour /> */}
      <Home1Activities />
      {/*<Home1Banner2 /> */}
      <Home1Testimonial />
      <Home1Visa />
      <Footer />
    </>
  );
}
