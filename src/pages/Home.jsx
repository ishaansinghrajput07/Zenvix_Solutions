
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
import Feedback from "../components/Feedback/Feedback.jsx";
import WhyZenvix from '../components/WhyZenvix.jsx'
import FAQ from '../components/FAQ.jsx'
import TopCompanies from '../components/TopCompanies.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import SEO from "../components/SEO/SEO.jsx";
export default function Home() {
  return (
    <>

    <SEO
  title="Learn. Build. Get Hired."
  description="Build practical skills through career-focused programs, real-world projects, interview preparation, job preparation and career support with Zenvix Solution."
  path="/"
/>
      
      <main>
        <Hero />
         <TopCompanies />       
         <About />
          <LearningExperience />
         <Programs />
        <WhoIsZenvixFor />
        <HowItWorks />
         <JobPlacement />
          <CareerDomains />
        <CareerSupport />
       
       
       
        <WhyZenvix />
        <SuccessStories />
        <Feedback />
       
        <FAQ />
       
        <FinalCTA />
      </main>
    
    </>
  )
}
