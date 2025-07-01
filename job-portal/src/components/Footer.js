import React from "react";
import { Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                getajobng
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Getajobng provides a full online service for anyone looking for a
              new job. We're not a recruitment agency, we're a job site.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Job List
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Employers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © Copyright Get-A-Job RMS 2019, All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
