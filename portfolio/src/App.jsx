import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Certifications from './sections/Certifications'

function App() {

  return (
    <>
      <div className = "App">
        <Navbar />
        <Hero /> 
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
