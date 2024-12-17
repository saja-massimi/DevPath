import './App.css';
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



import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Authentication from './pages/authentication';
import NotFound from './pages/notFound';

function App() {
  


  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

        <div id="spinner" className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <button className="back-to-top btn btn-primary">
          <i className="bi bi-arrow-up"></i>
        </button>

      </Router>
    </div>
  );
}

export default App;
