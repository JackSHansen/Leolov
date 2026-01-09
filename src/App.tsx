import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
