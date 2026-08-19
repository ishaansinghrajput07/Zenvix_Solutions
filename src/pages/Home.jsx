
import Hero from '../components/Hero.jsx'
import Programs from '../components/Programs.jsx'
import WhoIsZenvixFor from '../components/WhoIsZenvixFor.jsx'
import LearningExperience from '../components/LearningExperience.jsx'
import CareerSupport from '../components/CareerSupport.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import JobPlacement from '../components/JobPlacement.jsx'
import CareerDomains from '../components/CareerDomains.jsx'
import SuccessStories from '../components/SuccessStories.jsx'
import About from '../components/About.jsx'

import WhyZenvix from '../components/WhyZenvix.jsx'
import FAQ from '../components/FAQ.jsx'
import TopCompanies from '../components/TopCompanies.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <Programs />
        <WhoIsZenvixFor />
        <LearningExperience />
        <CareerSupport />
        <HowItWorks />
        <JobPlacement />
        <CareerDomains />
        <WhyZenvix />
        <SuccessStories />
        <TopCompanies />
        <FAQ />
        <About />
        <FinalCTA />
      </main>
    
    </>
  )
}
