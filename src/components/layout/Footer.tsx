import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main CTA Section */}
        <div className="py-24 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-scale-5xl font-bold mb-6">Ready to start your project?</h2>
              <p className="text-scale-xl text-gray-400 mb-8">
                Get in touch with our team to discuss your electrical requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-scale-lg font-medium"
              >
                Let's Talk
                <ArrowUpRight size={20} />
              </Link>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <Phone size={24} className="text-blue-400" />
                <div>
                  <h3 className="text-scale-xl font-bold mb-2">24/7 Emergency Support</h3>
                  <a href="tel:01234567890" className="text-scale-lg text-gray-400 hover:text-white transition-colors">
                    01234 567890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Mail size={24} className="text-blue-400" />
                <div>
                  <h3 className="text-scale-xl font-bold mb-2">Email Us</h3>
                  <a href="mailto:info@holbrook.co.uk" className="text-scale-lg text-gray-400 hover:text-white transition-colors">
                    info@holbrook.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-scale-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Industrial Installations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Power Distribution
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Testing & Compliance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-scale-lg font-bold mb-6">Sectors</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/sectors" className="text-gray-400 hover:text-white transition-colors">
                  Marine & Waterside
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="text-gray-400 hover:text-white transition-colors">
                  Industrial & Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="text-gray-400 hover:text-white transition-colors">
                  Educational Facilities
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Buildings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-scale-lg font-bold mb-6">Service Areas</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Kent</li>
              <li className="text-gray-400">Sussex</li>
              <li className="text-gray-400">Surrey</li>
              <li className="text-gray-400">London</li>
              <li className="text-gray-400">Essex</li>
            </ul>
          </div>

          <div>
            <h3 className="text-scale-lg font-bold mb-6">Accreditations</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">NICEIC Approved</li>
              <li className="text-gray-400">ISO 9001:2015</li>
              <li className="text-gray-400">SafeContractor</li>
              <li className="text-gray-400">CHAS Premium Plus</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Holbrook Electrical. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-400">
              <span>Built with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>by</span>
              <a 
                href="https://dzines.digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Dzines Digital
              </a>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}