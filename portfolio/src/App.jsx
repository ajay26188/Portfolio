import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Certificates from './sections/Certificates'

function App() {

  return (
    <>
      <div className = "App">
        <Navbar />
        <Hero /> {/*hi*/}
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
