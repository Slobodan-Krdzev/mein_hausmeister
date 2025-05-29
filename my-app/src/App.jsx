import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from '../components/Hero/Hero';
import SecondSection from '../components/SecondSection/SecondSection';
import CardsCarousell from '../components/CardsCarousellSection/CardsCarousell';
import FinderCarousell from '../components/FinderCarousell/FinderCarousell';
import PhoneSection from '../components/PhoneSection/PhoneSection';

function App() {

  return (
    <>
    <Hero />
    <SecondSection />
    <CardsCarousell />
    <FinderCarousell />
    <PhoneSection />
    </>
  )
}

export default App
