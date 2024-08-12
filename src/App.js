import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Inner1 from './pages/Inner1';
import Inner2 from './pages/Inner2';
import Inner3 from './pages/Inner3';
import Inner4 from './pages/Inner4';
import Inner5 from './pages/Inner5';
import Inner6 from './pages/Inner6';
import Inner7 from './pages/Inner7';
import Inner8 from './pages/Inner8';
import Inner9 from './pages/Inner9';
import Inner19 from './pages/Inner19';
import Inner18 from './pages/Inner18';
import Inner17 from './pages/Inner17';
import Inner16 from './pages/Inner16';
import Inner15 from './pages/Inner15';
import Inner14 from './pages/Inner14';
import Inner13 from './pages/Inner13';
import Inner12 from './pages/Inner12';
import Inner11 from './pages/Inner11';
import Inner10 from './pages/Inner10';
import JobDetails from './pages/JobDetails';
import JobForm from './components/JobForm';
import Home from './pages/Home';
import Industry4 from './pages/Industry4';
import CaseStudies from './pages/CaseStudies';
import Sectors from './pages/Sectors';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import CareerInner from './pages/CareerInner';
import Refund from './pages/Refund';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Cookie from './pages/Cookie';
import PaymentGateway from './pages/PaymentGateway';
import TnC from './pages/TnC';
import NoPage from './pages/NoPage';
import ShippingPolicy from './pages/ShippingPolicy';
import { HelmetProvider } from 'react-helmet-async';




function App() {
  return (
    <>
      <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="industry4" element={<Industry4 />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="sectors/:sector" element={<Sectors />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="services/:service" element={<Services />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="career-inner" element={<CareerInner />} />
          <Route path="inner/1" element={<Inner1 />} />
          <Route path="inner/2" element={<Inner2 />} />
          <Route path="inner/3" element={<Inner3 />} />
          <Route path="inner/4" element={<Inner4 />} />
          <Route path="inner/5" element={<Inner5 />} />
          <Route path="inner/6" element={<Inner6 />} />
          <Route path="inner/7" element={<Inner7 />} />
          <Route path="inner/8" element={<Inner8 />} />
          <Route path="inner/9" element={<Inner9 />} />
          <Route path="inner/10" element={<Inner10 />} />
          <Route path="inner/11" element={<Inner11 />} />
          <Route path="inner/12" element={<Inner12 />} />
          <Route path="inner/13" element={<Inner13 />} />
          <Route path="inner/14" element={<Inner14 />} />
          <Route path="inner/15" element={<Inner15 />} />
          <Route path="inner/16" element={<Inner16 />} />
          <Route path="inner/17" element={<Inner17 />} />
          <Route path="inner/18" element={<Inner18 />} />
          <Route path="inner/19" element={<Inner19 />} />
          <Route path="refund-policy" element={<Refund />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="cookie-policy" element={<Cookie />} />
          <Route path="payment-policy" element={<PaymentGateway />} />
          <Route path="tNc-policy" element={<TnC />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/jobform/:id" element={<JobForm />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    </HelmetProvider>
     
    </>
  );
}

export default App;
