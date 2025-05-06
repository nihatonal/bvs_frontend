import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import ScrollToTop from './utility/ScrollToTop';
import Home from './pages/Home';
import WebDesign from './pages/WebDesign'
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0 });
  // }, [pathname]);
  function ScrollToTopOnLoad() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Sayfa her render edildiğinde en üste alır
    }, [location.pathname]);

    return null;
  }



  return (
    <>
      <ScrollToTopOnLoad />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        {/* <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/iletisim" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
