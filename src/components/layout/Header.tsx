import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logo from '../assets/images/long.jpg'  // Adjust the path based on your file structure
import { Navigation } from './Navigation';

export function Header() {
  return (
<header className="sticky top-0 z-50 w-full bg-white shadow-md">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img 
          src={logo} 
          alt="Holbrook Electrical" 
          className="h-12 w-auto"  // Adjust height as needed
        />
      </Link>
          
          <Navigation />
          
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Talk to Us
            </Link>
            <a 
              href="tel:01234567890" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone size={18} />
              <span>01234 567890</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}