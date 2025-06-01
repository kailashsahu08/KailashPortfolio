'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types/project';

export default function ContactForm() {


  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>

          <form action="https://api.web3forms.com/submit" method="POST" className="emil_container" id="contact">
            <input type="hidden" name="api_key" value="f1eeb203-8053-4d0e-bdca-670e2b1661b5" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-2 rounded-lg border ${
                    'border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-2 rounded-lg border ${
                    'border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  'border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  'border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                placeholder="Your message here..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
