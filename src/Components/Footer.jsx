

export default function Footer() {
  return (
      <footer className="border-t border-gray-200 mt-24">
          <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-50">
              <div>
                  <h2 className="text-2xl font-display tracking-wide">
                      Bella Hair
                  </h2>
                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                      Luxury hair care and styling experience designed to bring
                      out your confidence and beauty.
                  </p>
              </div>
              <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-4">
                      Quick Links
                  </h3>
                  <ul className="space-y-2 text-sm">
                      <li>
                          <a href="/" className="hover:text-gold">
                              Home
                          </a>
                      </li>
                      <li>
                          <a href="/services" className="hover:text-gold">
                              Services
                          </a>
                      </li>
                      <li>
                          <a href="/about" className="hover:text-gold">
                              About
                          </a>
                      </li>
                      <li>
                          <a href="/gallery" className="hover:text-gold">
                              Gallery
                          </a>
                      </li>
                      <li>
                          <a href="/contact" className="hover:text-gold">
                              Contact
                          </a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-4">
                      Contact
                  </h3>
                  <p className="text-sm text-gray-400">Durban, South Africa</p>
                  <p className="text-sm text-gray-400 mt-2">+27 00 000 0000</p>
                  <p className="text-sm text-gray-400 mt-2">
                      info@bellahair.com
                  </p>
              </div>
          </div>
          <div className="border-t border-gray-200 text-center py-4 text-xs text-gray-500">
              © {new Date().getFullYear()} Bella Hair. All rights reserved.
          </div>
      </footer>
  );
}