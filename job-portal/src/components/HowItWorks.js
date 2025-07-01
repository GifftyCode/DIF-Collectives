import { CheckCircle } from "lucide-react";
import img1 from "../images/howItWorks1.png";
import img2 from "../images/howItWorks2.png";
import img3 from "../images/howItWorks3.png";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <img
                  src={img1}
                  alt="Product Analyst"
                  className="rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600">
                  Product Analyst @{" "}
                  <span className="text-green-600">Paystack</span>
                </p>
              </div>
              <div className="text-center">
                <img src={img2} alt="HR Manager" className="rounded-lg mt-36" />
                <p className="text-sm text-gray-600">
                  HR Manager @ <span className="text-green-600">Paystack</span>
                </p>
              </div>
              <div className="text-center md:col-span-1">
                <img
                  src={img3}
                  alt="Securities Trader"
                  className="rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600">
                  Securities Trader @{" "}
                  <span className="text-green-600">McKinsey</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How it works
            </h2>
            <p className="text-gray-600 mb-8">
              Getajob helps you find the right job easily. Getajob helps you
              find the right job easily. Getajob helps you find the right job
              easily.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Search Jobs
                  </h3>
                  <p className="text-gray-600">
                    We have jobs in the most popular industries and with top
                    companies. Plus, you can create alerts so you never miss a
                    job opportunity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Create a Profile and Get Noticed
                  </h3>
                  <p className="text-gray-600">
                    Create a profile to showcase your skills and experience so
                    recruiters can find you. Upload your CV so you can apply for
                    jobs quickly and easily.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Apply for jobs
                  </h3>
                  <p className="text-gray-600">
                    Find the training you need to improve your skills, or visit
                    our Career Center for tips and advice to build your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
