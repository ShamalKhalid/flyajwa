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
export const metadata = {
  title: "Fly Ajwa by Ajwa Travels and Holidays",
  description:
    "Explore amazing travel packages with Ajwa Travels and Holidays. Plan your dream vacation now with FlyAjwa.in.",
  icons: {
    icon: "/assets/img/Ajwa/logo-ajwa.png",
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
      <Home1WhyChoose />
      <Home1Activities />
      <Home1Testimonial />
      <Home1Visa />
      <Footer />
    </>
  );
}
