import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
import brows from "../assets/Brows-in.jpg";


const services = [
    { n: "01", name: "Hair" },
    { n: "02", name: "Weaves" },
    { n: "03", name: "Nails" },
    { n: "04", name: "Lashes" },
    { n: "05", name: "Brows" },
];

function HomePage() {
  return (
      <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex flex-col">
              <section className="pt-20 pb-24 px-6">
                  <div className="max-w-7xl mx-auto">
                      <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-end">
                          <div>
                              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                                  Bella Hair · Johannesburg
                              </span>

                              <h1 className="text-5xl md:text-7xl leading-none mt-6 mb-8 font-serif">
                                  The Art of <br />
                                  <span className="italic">Refined</span>{" "}
                                  Presence
                              </h1>

                              <p className="text-lg text-gray-600 max-w-[44ch]">
                                  An exclusive sanctuary for hair and beauty
                                  services. Private by design, professional by
                                  reputation.
                              </p>

                              <div className="mt-10 flex flex-wrap gap-4">
                                  <Link
                                      to="/booking"
                                      className="inline-block bg-black text-white text-xs uppercase tracking-[0.25em] py-3 px-7 rounded-full hover:bg-gray-800 transition">
                                      Book Appointment
                                  </Link>

                                  <Link
                                      to="services"
                                      className="text-xs uppercase tracking-[0.25em] py-3 px-2 border-b border-gray-300 hover:border-black transition cursor-pointer">
                                      Explore Services
                                  </Link>
                              </div>
                          </div>

                          {/* SERVICES LIST */}
                          <div className="border-t border-gray-200 pt-6">
                              {services.map((s) => (
                                  <Link
                                      key={s.n}
                                      to="/gallery"
                                      className="group flex justify-between items-baseline py-4 border-b border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:px-3 hover:shadow-md hover:bg-gray-50 rounded-lg cursor-pointer">
                                      <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                                          {s.n}
                                      </span>

                                      <span className="text-xl transition-all duration-300 group-hover:text-black group-hover:font-medium">
                                          {s.name}
                                      </span>
                                  </Link>
                              ))}
                          </div>
                      </div>

                      {/* HERO IMAGE */}
                      <div className="mt-16 overflow-hidden rounded-xl border border-gray-100">
                          <img
                              src="src/assets/hero-interior.jpg"
                              alt="Salon interior"
                              className="w-full aspect-[21/9] object-cover"
                          />
                      </div>
                  </div>
              </section>

              {/* QUOTE SECTION */}
              <section className="bg-gray-50 border-y border-gray-200 py-24 px-6">
                  <div className="max-w-4xl mx-auto text-center">
                      <p className="text-2xl md:text-4xl italic">
                          “We tailor presence; strand by strand, for the woman
                          who knows the difference.”
                      </p>
                  </div>
              </section>

              <section className="py-24 px-6">
                  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
                      <img
                          src={brows}
                          className="rounded-xl w-full object-cover aspect-[2/3]"
                          alt="Brows"
                      />

                      <div className="flex flex-col gap-6">
                          <div>
                              <h3 className="text-2xl italic mb-3">
                                  Bespoke Artistry
                              </h3>

                              <p className="text-gray-600 text-sm">
                                  Every service is tailored to the individual
                                  with precision and care.
                              </p>

                              <Link
                                  to="gallery"
                                  className="inline-block mt-6 text-xs uppercase tracking-[0.3em] border-b border-gray-300 hover:border-black cursor-pointer">
                                  View Gallery
                              </Link>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="px-6 pb-24">
                  <div className="max-w-5xl mx-auto bg-black text-white rounded-xl p-12 text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                          By appointment only
                      </p>

                      <h2 className="text-4xl md:text-6xl italic mt-6 mb-6">
                          Reserve your hour.
                      </h2>

                      <p className="text-gray-400 max-w-md mx-auto mb-10">
                          Choose a date, pick a time and confirm your booking.
                      </p>

                      <Link
                          to="booking"
                          className="bg-white text-black text-xs uppercase tracking-[0.25em] py-3 px-8 rounded-full hover:bg-gray-200 transition cursor-pointer inline-block">
                          Open Calendar
                      </Link>
                  </div>
              </section>
          </main>
          <Footer />
      </div>
  );
}

export default HomePage;