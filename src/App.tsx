import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ClientLogos } from './components/home/ClientLogos';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SectorsPage } from './pages/SectorsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { WhyHolbrookPage } from './pages/WhyHolbrookPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/sectors" element={<SectorsPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
              <Route path="/why-holbrook" element={<WhyHolbrookPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <ClientLogos />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;