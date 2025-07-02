import bannerImage from "../images/cta.png";

const CallToAction = () => {
  return (
    <section
      className="w-full h-[400px] bg-no-repeat bg-cover  py-16 mb-32"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  h-full flex text-center justify-end">
        <div className="text-left text-white space-y-6">
          <h2 className="text-5xl sm:text-6xl font-extrabold mt-12">
            Get a Job you actually like
          </h2>
          <p className="text-2xl sm:text-3xl">
            Create an account and start applying
          </p>
          <button className="bg-green-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-green-700 transition-colors">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
