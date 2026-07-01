import './App.css'
import Assuntos from './components/Assuntos'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Quiz from './components/Quiz'
import Security from './components/Seguranca'
import Tutoriais from './components/Tutorial'
import Videos from './components/Videos'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Assuntos />
      <Videos />
      <Tutoriais />
      <Security /> 
      <Quiz />
      <Footer />
    </>
  )
}

export default App
