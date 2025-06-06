import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from '../components/Hero/Hero';
import SecondSection from '../components/SecondSection/SecondSection';
import CardsCarousell from '../components/CardsCarousellSection/CardsCarousell';
import FinderCarousell from '../components/FinderCarousell/FinderCarousell';
import PhoneSection from '../components/PhoneSection/PhoneSection';
import CircleCardCarousell from '../components/CircleCardsComponent/CircleCardCarousell';
import ColoredSection from '../components/ColoredSection/ColoredSection';
import NewsletterSecton from '../components/NewsletterSection/NewsletterSecton';
import Footer from '../components/Reusables/Footer/Footer';
import Navbar from '../components/Reusables/Navbar/Navbar';
import FilterSidebar from '../components/Reusables/SideMenu/SideMenu';
import { useMenu } from '../context/FilterMenuContext/FilterMenuContext';

function App() {
  const { isOpen } = useMenu();

  return (
    <>
    {isOpen && <FilterSidebar />}
    
    <Navbar />
    <Hero />
    <SecondSection />
    <CardsCarousell />
    <FinderCarousell />
    <PhoneSection />
    <CircleCardCarousell />
    <ColoredSection />
    <NewsletterSecton />
    <Footer />
    </>
  )
}

export default App
