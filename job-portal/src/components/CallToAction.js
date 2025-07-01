import React from "react";

const CallToAction = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-black bg-opacity-20 rounded-2xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get a Job you actually like
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Create an account and start applying
          </p>
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-400 transition-colors">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
