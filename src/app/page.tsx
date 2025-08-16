import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import CountryChooser from "@/components/CountryChooser";
import Features from "@/components/Features";
import WhyConsider from "@/components/WhyConsider";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <Services />
      <CountryChooser />
      <Features />
      <WhyConsider />
      <Stats />
      <Contact />
      <FooterLinks />
      <Footer />
    </div>
  );
}
