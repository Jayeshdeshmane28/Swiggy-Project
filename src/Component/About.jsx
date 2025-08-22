const About = () => {
  return (
    <>
      <div className="mt-9 text-center">
        <p className="font-black text-5xl text-center">
          Welcome to Swiggy
          <p className="font-semibold text-xl leading-10">
            Your Go-To Food Delivery Service!
          </p>
        </p>
        <p className="mt-5 mx-3 text-xl">
          At Smiggy, we deliver your favorite meals from top restaurants right
          to your doorstep—quick, fresh, and hassle-free.
        </p>
        <section className="text-gray-600 body-font xl:mx-32">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Why choose us?
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                Enjoy fast, reliable, and delicious food delivery from your
                favorite restaurants. Smiggy ensures that every meal arrives
                fresh and hot.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>

            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              {/** Feature 1 */}
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 text-white mb-5 flex-shrink-0">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Fast Delivery
                  </h2>
                  <p className="leading-relaxed text-base">
                    Your food is delivered within minutes, hot and fresh,
                    straight from the kitchen.
                  </p>
                  <a
                    className="mt-3 text-orange-500 underline inline-flex items-center"
                    href="#"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/** Feature 2 */}
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 text-white mb-5 flex-shrink-0">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Variety of Choices
                  </h2>
                  <p className="leading-relaxed text-base">
                    Browse from a vast selection of restaurants and cuisines to
                    satisfy your cravings.
                  </p>
                  <a
                    className="mt-3 text-orange-500 underline inline-flex items-center"
                    href="#"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/** Feature 3 */}
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 text-white mb-5 flex-shrink-0">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Easy Payments
                  </h2>
                  <p className="leading-relaxed text-base">
                    Pay using cards, UPI, wallets, or cash on delivery for a
                    seamless experience.
                  </p>
                  <a
                    className="mt-3 text-orange-500 underline inline-flex items-center"
                    href="#"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <button className="flex mx-auto mt-16 bg-orange-500 text-white border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 hover:scale-110 transition-all duration-200 rounded-3xl text-lg">
              Order Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
