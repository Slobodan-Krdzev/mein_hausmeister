import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from '../components/Hero/Hero';

function App() {

  return (
    <>
    <Hero />
    {/* <div className="heroSection">
      

      <section className="why-us">
        <h2>Why people like us</h2>
        <ul>
          <li><strong>No hidden costs:</strong> only a transparent fee.</li>
          <li><strong>Targeted orders:</strong> Find jobs that fit your skills.</li>
          <li><strong>Immediate booking:</strong> Communicate directly with customers.</li>
        </ul>
      </section>

      <section className="what-you-offer">
        <h2>What you can offer</h2>
        <Swiper slidesPerView={4} spaceBetween={10} className="offer-carousel">
          <SwiperSlide><div className="card">Door/Lock</div></SwiperSlide>
          <SwiperSlide><div className="card">AC</div></SwiperSlide>
          <SwiperSlide><div className="card">Software</div></SwiperSlide>
          <SwiperSlide><div className="card">Furniture</div></SwiperSlide>
          <SwiperSlide><div className="card">Cleaning</div></SwiperSlide>
          <SwiperSlide><div className="card">Assembly</div></SwiperSlide>
          <SwiperSlide><div className="card">Carpenter</div></SwiperSlide>
          <SwiperSlide><div className="card">Construction</div></SwiperSlide>
        </Swiper>
      </section>

      <section className="success-stories">
        <h2>Craftsmen grow faster with our app!</h2>
        <div className="cards">
          <div className="card">
            <img src="/images/craftsman1.png" alt="Marcus Shrini" />
            <h3>Marcus Shrini</h3>
            <p>Heating, Sanitary, A/C</p>
            <button className="btn-outline">Register</button>
          </div>
          <div className="card">
            <img src="/images/craftsman2.png" alt="Jehrem" />
            <h3>Jehrem</h3>
            <p>Electrician, Install, Heating</p>
            <button className="btn-outline">Register</button>
          </div>
        </div>
      </section>

      <section className="messaging">
        <h2>Instant messaging for effortless booking</h2>
        <img src="/images/chat-preview.png" alt="Chat Preview" />
        <ul>
          <li><strong>Create your profile:</strong> Show availability and power your services.</li>
          <li><strong>Find jobs & be booked:</strong> Browse, connect and get booked.</li>
          <li><strong>Chat & book:</strong> Chat directly and secure jobs quickly.</li>
        </ul>
      </section>
    </div> */}
    </>
  )
}

export default App
