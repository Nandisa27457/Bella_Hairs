import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function ContactPage() {
  const waLink =
    "https://wa.me/27745009716?text=" +
    encodeURIComponent("Hi Bella Hair, I'd like to enquire about an appointment.");

  return (
    <>
    <Navbar />
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] text-mute">Reach the Atelier</span>
        <h1 className="font-display text-5xl md:text-7xl mt-4 mb-12 leading-none">
          Let's <span className="italic">talk.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">WhatsApp</div>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="font-display text-3xl hover:text-accent transition-colors">
                +27 74 500 9716
              </a>
              <p className="text-mute text-sm mt-2">Fastest reply. Tuesday - Saturday, 09:00 to 18:00.</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">Studio</div>
              <p className="font-display text-2xl leading-snug">
                Bella Hair Atelier<br />By private appointment<br />Johannesburg, South Africa
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">Hours</div>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between max-w-xs"><span>Tuesday - Friday</span><span className="text-mute">09:00 -18:00</span></li>
                <li className="flex justify-between max-w-xs"><span>Saturday</span><span className="text-mute">09:00 - 16:00</span></li>
                <li className="flex justify-between max-w-xs"><span>Sunday & Monday</span><span className="text-mute">Closed</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-surface rounded-[12px] p-10 ring-1 ring-hairline">
            <h2 className="font-display text-3xl italic mb-3">Ready to book?</h2>
            <p className="text-sm text-mute mb-8 leading-relaxed">
              Skip the back-and-forth. Open the calendar, pick a date and time, and send your details straight to our WhatsApp.
            </p>
            <Link to="/booking" className="inline-flex bg-ink text-canvas text-xs uppercase tracking-[0.25em] py-3.5 px-7 rounded-full hover:text-amber-600 transition-colors">
              Open Booking Calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default ContactPage;