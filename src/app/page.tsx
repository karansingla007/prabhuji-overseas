import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import WhyConsider from "@/components/WhyConsider";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";
import Navbar from "@/components/Navbar";
import CaurselFooter from "@/components/CarouselFooter";
import WhyChoose from "@/components/WhyChoose";
import OurIndustry from "@/components/OurIndustry";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <CaurselFooter />
      <Services />
      <WhyConsider />
      <WhyChoose />
      <OurIndustry />
      <Stats />
      <Contact />
      <FooterLinks />
      <Footer />
    </div>
  );
}
