import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RIDEAtlas EX" },
    { name: "Check out country data!", content: "Welcome to RIDEAtlas EX." },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="space-y-6 max-w-xl">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  <span className="block">Explore Countries with</span>
                  <span className="block text-indigo-600">Real-Time Data</span>
                </h1>
                <p className="text-lg text-gray-600 sm:text-xl">
                  Discover details about every country around the world — from capitals to population stats!
                </p>

                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                  <Link
                    to="/countries"
                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Explore Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>

                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-md bg-gray-100 px-6 py-3 text-base font-semibold text-gray-700 transition duration-300 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://www.romeanditaly.com/wp-content/uploads/2019/11/Amalfi-Coast-Tour-07-min-1280x789.jpg"
                  alt="Explore countries"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-gray-50 py-20 sm:py-24 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why RIDEAtlas EX?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed">
                RIDEAtlas leverages the powerful REST Countries API to give you rich,
                real-time data about every country in the world — from GDP and borders to
                flags and native names.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're a student, traveler, developer, or geography enthusiast, our
                site delivers quick insights through a beautiful, fast, and responsive
                interface built with Tailwind CSS and React Router v7.
              </p>
              <p className="text-lg leading-relaxed font-semibold text-indigo-700">
                Our mission? To make country data accessible, intuitive, and engaging for
                everyone.
              </p>
            </motion.div>

            <motion.img
              src="https://i.etsystatic.com/36464454/r/il/f067b8/4702277350/il_fullxfull.4702277350_o02i.jpg"
              alt="World Data"
              className="rounded-2xl shadow-md w-full h-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
