import { BrowserRouter, Routes, Route } from "react-router-dom";

// =====================================================
// PUBLIC PAGES
// =====================================================

import Home from "./pages/Home.jsx";
import ProgramsPage from "./pages/Programspage.jsx";
import ProgramDetail from "./pages/ProgramDetail.jsx";
import Career from "./components/CareerSupport/Career.jsx";
import InterviewPreparation from "./components/Interview/InterviewPreparation.jsx";
import JobPreparation from "./components/JobPreparation/JobPreparation.jsx";
import JobPlacement from "./components/JobPlacement/JobPlacement.jsx";
import FreeResources from "./components/FreeResources.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import SuccessStoriesPage from "./pages/SuccessStoriesPage.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";

// =====================================================
// STUDENT
// =====================================================

import StudentDashboard from "./pages/StudentDashboard.jsx";
import CourseLearningPage from "./pages/CourseLearningPage.jsx";
import StudentCoursePage from "./pages/StudentCoursePage.jsx";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoute.jsx";
// =====================================================
// PUBLIC COMPONENTS
// =====================================================

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ContactPopup from "./components/ContactPopup.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Enrollment from "./pages/Enrollment.jsx";

// =====================================================
// ADMIN
// =====================================================

import AdminLayout from "./components/admin/AdminLayout.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import AdminLeads from "./components/admin/AdminLeads.jsx";
import AdminCourses from "./components/admin/AdminCourses.jsx";
import AdminEnrollments from "./components/admin/AdminEnrollments";
import AdminStudents from "./components/admin/AdminStudents.jsx";
// =====================================================
// ADMIN ROUTE PLACEHOLDERS
// =====================================================
// We will add these pages step-by-step.

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* =================================================
            PUBLIC WEBSITE
        ================================================= */}

        <Route
          path="/*"
          element={
            <>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/programs" element={<ProgramsPage />} />

                <Route path="/programs/:id" element={<ProgramDetail />} />

                <Route path="/enrollment" element={<Enrollment />} />

                <Route path="/blog" element={<Blog />} />

                <Route path="/blog/:slug" element={<BlogDetail />} />

                <Route
                  path="/success-stories"
                  element={<SuccessStoriesPage />}
                />

                <Route path="/how-it-works" element={<HowItWorksPage />} />

                <Route path="/career" element={<Career />} />

                <Route
                  path="/interview-preparation"
                  element={<InterviewPreparation />}
                />

                <Route path="/job-preparation" element={<JobPreparation />} />

                <Route path="/job-placement" element={<JobPlacement />} />

                <Route path="/resources" element={<FreeResources />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                

                <Route
                  path="/dashboard/course/:id"
                  element={<StudentCoursePage />}
                />

                <Route
                  path="/learn/:courseId"
                  element={<CourseLearningPage />}
                />

                <Route path="*" element={<NotFound />} />
              </Routes>

              <Footer />
              <ContactPopup />
            </>
          }
        />

        {/* =================================================
            ADMIN PANEL
        ================================================= */}

        <Route element={<ProtectedAdminRoute />}>
<Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="leads" element={<AdminLeads />} />

          <Route path="courses" element={<AdminCourses />} />
          <Route path="/admin/enrollments" element={<AdminEnrollments />} />
          <Route path="/admin/students" element={<AdminStudents />} />
</Route>
          {/* =============================================
              COURSES
              ============================================= */}

          {/* We will add AdminCourses here next. */}
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}
