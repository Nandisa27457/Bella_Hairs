
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white mt-24">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                    {/* Brand */}
                    <div>
                        <h2 className="font-serif text-3xl mb-4">Bella Hair</h2>

                        <p className="text-gray-500 leading-relaxed max-w-sm">
                            Luxury hair, beauty, and styling services designed
                            to elevate confidence through refined artistry and
                            exceptional care.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
                            Explore
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-gray-200 transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services"
                                    className="text-gray-600 hover:text-gray-200 transition">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-600 hover:text-gray-200 transition">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/gallery"
                                    className="text-gray-600 hover:text-gray-200 transition">
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover:text-gray-200 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-600">
                            <p>Johannesburg, South Africa</p>
                            <p>+27 74 500 9716</p>
                            <p>info@bellahair.com</p>
                        </div>

                        <Link
                            to="/booking"
                            className="inline-block mt-8 bg-black text-white text-xs uppercase tracking-[0.25em] px-6 py-3 rounded-full hover:bg-gray-800 transition">
                            Book Appointment
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Bella Hair. All rights
                        reserved.
                    </p>

                    <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-gray-400">
                        <span>Instagram</span>
                        <span>Facebook</span>
                        <span>TikTok</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;