import logo from "../images/logo.png";
import ig from "../images/Instagram.png";
import twt from "../images/twitter.svg";
import fb from "../images/Facebook.png";
import lkd from "../images/LinkedIn.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                getajobng
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Getajobng provides a full online service for anyone looking for a
              new job. We're not a recruitment agency, we're a job site.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Information
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Job Seekers
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Job List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Employers
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Social Media:
            </h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-green-100 rounded flex items-center justify-center hover:bg-green-200"
              >
                <span className="text-green-600 text-sm">
                  {" "}
                  <img src={ig} alt="Logo" />
                </span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-green-100 rounded flex items-center justify-center hover:bg-green-200"
              >
                <span className="text-green-600 text-sm">
                  {" "}
                  <img src={twt} alt="Logo" />
                </span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-green-100 rounded flex items-center justify-center hover:bg-green-200"
              >
                <span className="text-green-600 text-sm">
                  {" "}
                  <img src={fb} alt="Logo" />
                </span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-green-100 rounded flex items-center justify-center hover:bg-green-200"
              >
                <span className="text-green-600 text-sm">
                  {" "}
                  <img src={lkd} alt="Logo" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © Copyright Get-A-Job RMS 2019, All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
