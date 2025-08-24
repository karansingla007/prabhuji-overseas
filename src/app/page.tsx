import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import WhyConsider from "@/components/WhyConsider";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import FooterLinks from "@/components/FooterLinks";
import WhyChoose from "@/components/WhyChoose";
import OurIndustry from "@/components/OurIndustry";
import CountryChooser from "@/components/CountryChooser";

export default function Home() {
  return (
    <div>
      <Carousel />
      <CountryChooser />
      <Services />
      <WhyConsider />
      <WhyChoose />
      <OurIndustry />
      <Stats />
      <Contact />
      <FooterLinks />
    </div>
  );
}
