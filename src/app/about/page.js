import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home2Activities from "@/components/activities/Home2Activities";
import Home2Team from "@/components/team/Home2Team";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import Home2About from "@/components/about/Home2About";
export const metadata = {
  title: "Flyajwa Travels and Holidays",
  description:
    "Explore amazing travel packages with flyajwa Travels and Holidays. Plan your dream vacation now with FlyAjwa.in.",
  icons: {
    icon: "/assets/img/Ajwa/logo-ajwa.png",
  },
};
const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb pagename="About Us" pagetitle="About Us" />
      <Home2About />
      <Home2WhyChoose />
      <Home2Activities />
      {/* <Home2Team /> */}
      <Footer />
    </>
  );
};

export default page;
