import React from "react";

const Testimonials = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          What are our customers saying
        </h2>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/300/300"
                alt="Customer testimonial"
                className="w-64 h-64 rounded-2xl object-cover mx-auto lg:mx-0"
              />
            </div>

            <div>
              <div className="text-4xl text-green-600 mb-4">"</div>
              <p className="text-lg text-gray-700 mb-6">
                The platform is really convenient to reach out to companies & I
                have managed to secure 2 interviews already! I can also track my
                application status instead of wondering whether the company has
                seen or shortlisted me
              </p>
              <div>
                <p className="font-semibold text-gray-900">Irma Black</p>
                <p className="text-gray-600">HR Manager at MasterCard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
