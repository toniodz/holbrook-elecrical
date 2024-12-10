import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const offices = [
  {
    region: "Kent Office",
    address: "123 Business Park Way, Maidstone, Kent, ME15 1XX",
    phone: "01234 567890"
  },
  {
    region: "London Office",
    address: "456 Industrial Estate, Greenwich, London, SE10 2XX",
    phone: "01234 567891"
  },
  {
    region: "Sussex Office",
    address: "789 Commerce Road, Brighton, Sussex, BN1 3XX",
    phone: "01234 567892"
  }
];

export function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <div className="grid grid-cols-1 gap-8">
        {/* Emergency Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="text-blue-600" />
            24/7 Emergency Support
          </h3>
          <p className="text-gray-600 mb-2">
            For urgent electrical issues requiring immediate attention:
          </p>
          <a 
            href="tel:01234567890"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700"
          >
            01234 567890
          </a>
        </div>

        {/* General Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">General Contact</h3>
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>Main Office: 01234 567890</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <a 
                href="mailto:info@holbrook.co.uk"
                className="text-blue-600 hover:text-blue-700"
              >
                info@holbrook.co.uk
              </a>
            </p>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Offices</h3>
          <div className="space-y-6">
            {offices.map((office, index) => (
              <div key={index}>
                <h4 className="font-medium mb-2">{office.region}</h4>
                <p className="flex items-start gap-3 text-gray-600">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" />
                  <span>{office.address}</span>
                </p>
                <p className="mt-1 text-gray-600">
                  Tel: {office.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}