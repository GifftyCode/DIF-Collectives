import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Companies
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Candidates
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Assessment
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Post a Job
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Career Advice
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Sign Up
            </button>
            <button className="bg-customgreen text-textgreen w-32 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-700">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
