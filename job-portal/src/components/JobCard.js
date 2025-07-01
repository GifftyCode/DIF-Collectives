import { recommendedJobs } from "../data/mockData";

const JobCard = ({ job }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Recommended Jobs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedJobs.map((job, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <span className="absolute top-4 right-4 text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full z-10">
                {job.type}
              </span>

              <div className="p-6 mt-6">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="h-8 w-auto mb-6"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.position}
                </h3>
              </div>

              <div className="border-t px-6 py-4 text-sm text-gray-500">
                <p className="text-gray-700 font-medium mb-2">{job.company}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 12l4.243-4.243a6 6 0 10-8.486 8.486L12 13.414l4.243 4.243a6 6 0 008.486-8.486L17.657 16.657z"
                      />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  <button className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-medium hover:bg-green-200 transition">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCard;
