
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Service from './components/Service'
// import Button from './components/Button'
import About from './components/About'
import Timeline from './components/Timeline'
import MyExpertise from './components/Expertise'
import Education from './components/Education'
import Contact from './components/Contact'
import PortfolioBlog from './components/Blog'
import Footer from './components/Footer'
import Scroll from './components/Scroll'

function App() {
  return (
   <div>
       <main>
          <Navbar />
          <Header /> 
          <Service />
          <About />
          <Timeline />
          <MyExpertise/>
          <Education />
          <PortfolioBlog/>
          <Contact />
          <Scroll />
          <Footer />
       </main>
   </div>
  )
}

export default App
