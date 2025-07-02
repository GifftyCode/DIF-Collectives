import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/mockData";
import quote from "../images/quote.png";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          What are our customers saying
        </h2>

        <div className="relative">
          <div className="flex items-center">
            <div className="w-48 h-48 overflow-hidden mr-8 flex-shrink-0">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
              />
            </div>

            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-6 relative ">
                <p className="text-gray-700 text-lg italic mb-12 ">
                  <img src={quote} alt="" className="w-12 h-12" />
                  {testimonials[currentTestimonial].text}
                </p>
                <div>
                  <p className="font-semibold text-gray-900 mb-4 ">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
