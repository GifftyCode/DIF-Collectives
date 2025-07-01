import { partnerCompanies } from "../data/mockData";

const Partners = () => {
  return (
    <div className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Over 1000+ jobs from top companies in our network
            </h2>
            <p className="text-gray-600 mb-4">
              Every day we index millions of jobs directly from employer
              websites. We're committed to accurate, high-quality jobs so you
              won't find old, duplicated, or spammy listings here.
            </p>
            <p className="text-gray-600 mb-6">
              Organize and automate your job search while at home or on the go.
              We'll deliver new, relevant jobs of interest straight to your
              inbox.
            </p>
            <button className="text-green-600 font-medium hover:text-green-700">
              Learn More →
            </button>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-3 gap-8 items-center">
              {partnerCompanies.map((logo, index) => (
                <div key={index} className="text-center">
                  <img
                    src={logo}
                    alt={`Company logo ${index}`}
                    className="mx-auto h-32 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
