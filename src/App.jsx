import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProgramsPage from './pages/Programspage.jsx'
import ProgramDetail from './pages/ProgramDetail.jsx'
import Career from "./components/CareerSupport/Career.jsx"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import InterviewPreparation from './components/Interview/InterviewPreparation.jsx'
import JobPreparation from "./components/JobPreparation/JobPreparation.jsx";
import JobPlacement from "./components/JobPlacement/JobPlacement.jsx";
import FreeResources from "./components/FreeResources.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import SuccessStoriesPage from "./pages/SuccessStoriesPage.jsx";
import Contact from './pages/Contact.jsx'
import Login from "./pages/Login.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPopup from "./components/ContactPopup.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramsPage />} />

        <Route path="/blog" element={<Blog />} />
        <Route
  path="/success-stories"
  element={<SuccessStoriesPage />}
/>

<Route path="/how-it-works" element={<HowItWorksPage />}/>
<Route path="/login" element={<Login />} />

<Route
  path="/resources"
  element={<FreeResources />}
/>

<Route
  path="/blog/:slug"
  element={<BlogDetail />}
/>
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interview-preparation" element={<InterviewPreparation />} />
        <Route
  path="/job-placement"
  element={<JobPlacement />}
/>
        <Route
  path="/job-preparation"
  element={<JobPreparation />}
/>
<Route path="/about" element={<AboutPage />} />
        <Route
          path="/programs/:id"
          element={<ProgramDetail />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
       <Footer />
       <ContactPopup />
    </BrowserRouter>
  )
}
