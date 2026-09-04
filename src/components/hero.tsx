import { useState, useEffect } from "react";
import "./hero.css";
import hero1 from "../assets/hero-1.jpeg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpeg";

const images = [hero1, hero2, hero3];

function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <h1>Explore, Learn, Grow</h1>
      <p>Your guide to digitalization</p>

      <div className="hero-lr-container">
        <div className="hero-left">
          <p className="hero-info">
            Here at GuideBook™ we aim to make concise but efficient guides to
            help digitize NGO's and other organizations that need to
            automate/digitize their manual workload and make it efficient with
            latest workplace technology
          </p>
        </div>
        <div className="hero-right">
          <img src={images[index]} alt="Guidebook" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
