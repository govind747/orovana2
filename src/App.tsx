import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductSections from './components/shop/ProductSections';
import IngredientsSection from './components/IngredientsSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FounderStory from './components/FounderStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import UserDashboard from './components/dashboard/UserDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'product':
        return <ProductPage productId={selectedProductId} />;
      case 'shop':
        return <ShopPage section={selectedSection} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'dashboard':
        return <UserDashboard />;
      default:
        return (
          <>
            <Hero />
            <ProductSections 
              onProductClick={(productId) => {
                setSelectedProductId(productId);
                setCurrentPage('product');
              }}
              onSeeAllClick={(section) => {
                setSelectedSection(section);
                setCurrentPage('shop');
              }}
            />
            <IngredientsSection />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <FounderStory />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;