import './Hero.scss'
import heroImg from '../../assets/hero.jpg'
import Services from '../Services/Services'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img
        className="hero-img"
        src={heroImg}
        alt="Leo-Lov kontor"
      />
      <div className="overlay">
        <h1>
          <span className="brand-part leo">Leo</span>
          <span className="brand-part lov">–Lov</span>
        </h1>
        <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
      </div>
      <div className="hero-services">
        <Services />
      </div>
    </section>
  )
}
