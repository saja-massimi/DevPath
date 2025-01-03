import React, { useEffect } from "react";
import "animate.css";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css/animate.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/assets.css';
import './assets/css/typography.css';
import './assets/css/shortcodes/shortcodes.css';
import './assets/css/style.css';
import './assets/css/color/color-1.css';
import './assets/vendors/revolution/css/layers.css';
import './assets/vendors/revolution/css/navigation.css';
import './assets/vendors/revolution/css/settings.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from './context/AuthContext';


import "magnific-popup/dist/magnific-popup.css";
import "magnific-popup";
import WOW from "wow.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/notFound";
import Courses from "./pages/AllCourses";
import Contact from "./pages/contact";
import About from "./pages/aboutUs";
import Profile from "./pages/profile";
import CourseDetails from "./pages/courseDetails";
import TeacherDashboard from "./pages/teacherDashboard";
import $ from "jquery";
import TeacherProfile from "./pages/teacherProfile";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/checkout";
import CourseVideos from "./pages/courseVideos";


const App = () => {

  useEffect(() => {


    const handleScroll = () => {
      const backToTopButton = document.querySelector("button.back-to-top");
      if (backToTopButton) {
        if (window.scrollY > 900) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      }
    };

    const magnificPopupImageView = () => {
      if (document.querySelectorAll(".magnific-image").length > 0) {
        $(".magnific-image").magnificPopup({
          delegate: ".magnific-anchor",
          type: "image",
          gallery: { enabled: true },
        });
      }
    };

    const pageScrollToTop = () => {
      const backToTopButton = document.querySelector("button.back-to-top");
      if (backToTopButton) {
        backToTopButton.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    };

    const wowAnimation = () => {
      if (document.querySelectorAll(".wow").length > 0) {
        new WOW().init();
      }
    };

    magnificPopupImageView();
    pageScrollToTop();
    wowAnimation();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <Router>

        <Navbar />
        <AuthProvider>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/courseDetails/:courseId" element={<CourseDetails />} />
            <Route path="/teacherDashboard" element={<TeacherDashboard />} />
            <Route path="/teacherProfile/:id" element={<TeacherProfile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/courseVideos/:id" element={<CourseVideos />} />


          </Routes>

        </AuthProvider>
        <Footer />


        <button className="back-to-top fa fa-chevron-up" />
      </Router>
    </div>
  );
};

export default App;