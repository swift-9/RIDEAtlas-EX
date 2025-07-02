import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">RIDEAtlas EX</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Explore country data with a modern UI and live REST API access.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/countries" className="hover:text-white transition">Countries</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Technologies</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>REST Countries API</li>
            <li>React Router v7</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center space-x-2">
              {/* Gmail SVG */}
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065L.093 4.5A2.25 2.25 0 012.25 3h19.5a2.25 2.25 0 012.156 1.5L12 13.065z" />
                <path d="M0 6.501V19.5A2.25 2.25 0 002.25 21h19.5A2.25 2.25 0 0024 19.5V6.5l-12 8.25L0 6.5z" />
              </svg>
              <a href="mailto:swastikjayaraj500@gmail.com" className="hover:text-white transition">
                swastikjayaraj500@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              {/* GitHub SVG */}
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 11c.59.1.8-.25.8-.56v-2c-3.24.7-3.93-1.56-3.93-1.56a3.1 3.1 0 00-1.3-1.7c-1.06-.73.08-.72.08-.72a2.5 2.5 0 011.84 1.24 2.53 2.53 0 003.44 1 2.52 2.52 0 01.75-1.6c-2.59-.3-5.32-1.3-5.32-5.75a4.5 4.5 0 011.2-3.12 4.18 4.18 0 01.11-3.07s.98-.31 3.2 1.18a11 11 0 015.84 0c2.22-1.49 3.2-1.18 3.2-1.18.4 1.03.32 2.14.11 3.07a4.5 4.5 0 011.2 3.12c0 4.46-2.74 5.45-5.35 5.74a2.83 2.83 0 01.8 2.2v3.26c0 .31.21.67.81.56A11.5 11.5 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
              <a
                href="https://github.com/swift-9"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                github.com/swift-9
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RIDEAtlas EX. All rights reserved.
      </div>
    </footer>
  );
}
