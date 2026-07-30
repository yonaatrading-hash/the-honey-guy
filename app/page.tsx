import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import WhyHoney from "../components/WhyHoney";
import Story from "../components/Story";
import Products from "../components/Products";
import Promise from "../components/Promise";
import Contact from "../components/Contact";
import LoadingScreen from "../components/LoadingScreen";
import ScrollProgress from "../components/ScrollProgress";
export default function Home() {
  return (
    <>
  
      <ScrollProgress />

      <LoadingScreen />

      <Navbar />

      <Hero />

      <Timeline />

      <WhyHoney />

      <Story />

      <Products />

      <Promise />

      <Contact />

      <Footer />
    </>
  );
}