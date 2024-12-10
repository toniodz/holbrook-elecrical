import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { clsx } from 'clsx';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  lightMode?: boolean;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

export function ContactForm({ lightMode = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData(initialFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label 
          htmlFor="name" 
          className={clsx(
            "block text-sm font-medium mb-1",
            lightMode ? "text-blue-100" : "text-gray-700"
          )}
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={clsx(
            "w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            lightMode 
              ? "bg-white/10 border-white/20 text-white placeholder-blue-200"
              : "border border-gray-300 text-gray-900"
          )}
        />
      </div>

      <div>
        <label 
          htmlFor="email" 
          className={clsx(
            "block text-sm font-medium mb-1",
            lightMode ? "text-blue-100" : "text-gray-700"
          )}
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={clsx(
            "w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            lightMode 
              ? "bg-white/10 border-white/20 text-white placeholder-blue-200"
              : "border border-gray-300 text-gray-900"
          )}
        />
      </div>

      <div>
        <label 
          htmlFor="phone" 
          className={clsx(
            "block text-sm font-medium mb-1",
            lightMode ? "text-blue-100" : "text-gray-700"
          )}
        >
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className={clsx(
            "w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            lightMode 
              ? "bg-white/10 border-white/20 text-white placeholder-blue-200"
              : "border border-gray-300 text-gray-900"
          )}
        />
      </div>

      <div>
        <label 
          htmlFor="message" 
          className={clsx(
            "block text-sm font-medium mb-1",
            lightMode ? "text-blue-100" : "text-gray-700"
          )}
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={clsx(
            "w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            lightMode 
              ? "bg-white/10 border-white/20 text-white placeholder-blue-200"
              : "border border-gray-300 text-gray-900"
          )}
        />
      </div>

      <button
        type="submit"
        className={clsx(
          "w-full px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-colors",
          lightMode
            ? "bg-white text-blue-900 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        )}
      >
        <Send size={20} />
        Send Message
      </button>
    </form>
  );
}