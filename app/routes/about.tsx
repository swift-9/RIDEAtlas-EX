import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About This Website
        </motion.h1>

        {/* Section 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              This website uses the{" "}
              <span className="font-semibold text-indigo-600">REST Countries API</span> to
              display comprehensive information about countries from around the world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a user-friendly interface and real-time data fetching, it provides a
              seamless browsing experience for explorers, students, and researchers.
            </p>
          </div>
          <img
            src="https://www.travelcruiseco.com.au/wp-content/themes/yootheme/cache/Map-of-the-world-803f1d02.jpeg"
            alt="World map"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="https://2.bp.blogspot.com/-pi0Q5XYHj_Y/UIos4cUHWYI/AAAAAAAAB5Y/4zdmEhkcUoQ/s1600/flags%2Bof%2BAll%2BCountries%2Bof%2BWorld%2Bcountries%2BFlag.jpg"
            alt="Technology"
            className="rounded-2xl shadow-lg w-full h-auto order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our goal is to build a fully responsive and modern web application using the
              latest technologies. We use React Router v7 for dynamic routing and Tailwind
              CSS for flexible, responsive design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This ensures the app works seamlessly across all devices — from desktops to
              mobile phones.
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is not just to show data but to help you interact with it. Features
            like search, filters, and detailed views empower you to dive deeper into
            country-level stats and visuals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Stay tuned — we’re planning to add dark mode, offline support, and region-wise
            analysis tools soon.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium text-indigo-700">
            Built with ❤️ by passionate developer who believe in the power of open data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
