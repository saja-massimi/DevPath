import './App.css';
import './custom-bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import NotFound from './pages/notFound';

function App() {
  useEffect(() => {
    // Spinner
    const spinner = () => {
      setTimeout(() => {
        const spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
          spinnerElement.classList.remove('show');
        }
      }, 1);
    };
    spinner();

    // Initiate WOW.js
    if (window.WOW) {
      new window.WOW().init();
    }

    // Sticky Navbar
    const handleScroll = () => {
      const stickyTop = document.querySelector('.sticky-top');
      if (window.scrollY > 300) {
        stickyTop && (stickyTop.style.top = '0px');
      } else {
        stickyTop && (stickyTop.style.top = '-100px');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Dropdown on mouse hover
    const handleDropdownHover = () => {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        dropdown.addEventListener('mouseenter', () => {
          if (window.matchMedia('(min-width: 992px)').matches) {
            dropdown.classList.add('show');
            toggle.setAttribute('aria-expanded', 'true');
            menu.classList.add('show');
          }
        });
        dropdown.addEventListener('mouseleave', () => {
          if (window.matchMedia('(min-width: 992px)').matches) {
            dropdown.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('show');
          }
        });
      });
    };
    window.addEventListener('load', handleDropdownHover);
    window.addEventListener('resize', handleDropdownHover);

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    const handleBackToTop = () => {
      if (window.scrollY > 300) {
        backToTop && backToTop.classList.add('visible');
      } else {
        backToTop && backToTop.classList.remove('visible');
      }
    };
    const handleBackToTopClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleBackToTop);
    backToTop && backToTop.addEventListener('click', handleBackToTopClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleDropdownHover);
      window.removeEventListener('resize', handleDropdownHover);
      window.removeEventListener('scroll', handleBackToTop);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        {/* Back to Top Button */}
        <button className="back-to-top btn btn-primary">
          <i className="bi bi-arrow-up"></i>
        </button>
      </Router>
    </div>
  );
}

export default App;
