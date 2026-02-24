import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-4">O'rovana</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Authentic Himalayan wellness products sourced directly from 
              organic farms to nurture your natural vitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-beige transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-beige transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-beige transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-beige transition-colors">Shop All</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beige transition-colors">Herbal Powders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beige transition-colors">Essential Oils</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beige transition-colors">Ayurvedic Blends</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-beige transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beige transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beige transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-beige transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-gray-300">hello@orovana.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1" />
                <span className="text-gray-300">Himalayan Foothills,<br />Uttarakhand, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 O'rovana. All rights reserved. | FSSAI License: 12345678901234
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-beige transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-beige transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;