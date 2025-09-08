import Hero from './sections/hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'
import Footer from './sections/Footer.jsx'
import Contact from './sections/Contact.jsx'

const App = () => {
  return (
    <main>
      <NavBar />
       <Hero />
       <ShowcaseSection />
       <FeatureCards />
       <Experience />
       <TechStack />
       <Contact />
       <Footer />
    </main>
  )
}

export default App