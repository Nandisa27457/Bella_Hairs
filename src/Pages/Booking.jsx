
import { useMemo, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SERVICES = ["Hair", "Weaves", "Nails", "Lashes", "Brows"];
const TIME_SLOTS = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
const WHATSAPP_NUMBER = "27745009716"; 

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_LABELS = ["MON","TUE","WED","THU","FRI","SAT","SUN"];

function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function startOfDay(d) { const x = new Date(d); x.setHours(0,0,0,0); return x; }
function sameDay(a,b) { return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }

function BookingPage() {
  const today = startOfDay(new Date());
  const [view, setView] = useState(() => startOfMonth(today));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [service, setService] = useState("Hair");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const days = useMemo(() => {
    const first = startOfMonth(view);
    // Monday-first offset
    const offset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push({ date: null });
    for (let d = 1; d <= daysInMonth; d++) cells.push({ date: new Date(view.getFullYear(), view.getMonth(), d) });
    while (cells.length % 7 !== 0) cells.push({ date: null });
    return cells;
  }, [view]);

  const isUnavailable = (d) => {
    if (d < today) return true;
    const dow = d.getDay(); 
    if (dow === 0 || dow === 1) return true;
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) return alert("Please select a date.");
    if (!selectedTime) return alert("Please choose a time slot.");
    if (name.trim().length < 2) return alert("Please enter your full name.");
    if (phone.trim().length < 7) return alert("Please enter a valid phone number.");

    const dateLabel = selectedDate.toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const message =
      `New Booking Request — Bella Hair\n` +
      `\n` +
      `Service: ${service}\n` +
      `Date: ${dateLabel}\n` +
      `Time: ${selectedTime}\n` +
      `\n` +
      `Name: ${name.trim()}\n` +
      `Phone: ${phone.trim()}\n` +
      (notes.trim() ? `Notes: ${notes.trim()}\n` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    alert("Opening WhatsApp to confirm your booking…");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const canPrev = view > startOfMonth(today);

  return (
    <>
    <Navbar />
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700">The Booking Ritual</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-none">
            Secure your <span className="italic">session.</span>
          </h1>
          <p className="text-gray-500 max-w-[50ch] mx-auto mt-6 text-sm leading-relaxed">
            Choose a date and time, share your details, and we'll receive your booking via WhatsApp. We confirm every appointment personally.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
          {/* Calendar */}
          <div className="bg-white p-6 md:p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-2xl">
                {MONTHS[view.getMonth()]} {view.getFullYear()}
              </h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={!canPrev}
                  onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                  aria-label="Previous month"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                <button
                  type="button"
                  onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-label="Next month"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-6">
              {DAY_LABELS.map((d) => (
                <div key={d} className="text-center text-[10px] font-medium text-gray-500 py-2">{d}</div>
              ))}
              {days.map((c, i) => {
                if (!c.date) return <div key={i} className="aspect-square" />;
                const unavailable = isUnavailable(c.date);
                const isSelected = selectedDate && sameDay(selectedDate, c.date);
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={unavailable}
                    onClick={() => { setSelectedDate(c.date); setSelectedTime(null); }}
                    className={[
                      "aspect-square flex items-center justify-center text-sm rounded-full transition-all",
                      unavailable ? "text-zinc-300 cursor-not-allowed line-through decoration-zinc-200" : "hover:bg-accent/10 hover:text-amber-700 cursor-pointer",
                      isSelected ? "bg-black text-white ring-1 ring-ink hover:bg-black hover:text-white" : "",
                    ].join(" ")}
                  >
                    {c.date.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
                {selectedDate
                  ? `Available slots — ${selectedDate.toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long" })}`
                  : "Select a date to see available times"}
              </span>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {TIME_SLOTS.map((t) => {
                  const active = selectedTime === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={!selectedDate}
                      onClick={() => setSelectedTime(t)}
                      className={[
                        "text-sm py-2.5 px-3 rounded-lg ring-1 transition-all",
                        active ? "bg-accent text-white ring-accent" : "ring-gray-200 hover:ring-accent hover:text-amber-600",
                        !selectedDate ? "opacity-40 cursor-not-allowed" : "",
                      ].join(" ")}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl ring-1 ring-gray-200">
            <h3 className="font-display text-2xl italic mb-6">Your details</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">Service</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setService(s)}
                      className={[
                        "py-2 text-xs uppercase tracking-[0.15em] rounded-full ring-1 transition-all",
                        service === s ? "bg-black text-white ring-ink" : "ring-gray-200 bg-white hover:ring-accent hover:text-amber-600",
                      ].join(" ")}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">Full name</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={80}
                  required
                  className="w-full bg-white px-4 py-3 rounded-lg ring-1 ring-gray-200 focus:ring-accent focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">Phone (WhatsApp)</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={20}
                  required
                  className="w-full bg-white px-4 py-3 rounded-lg ring-1 ring-gray-200 focus:ring-accent focus:outline-none transition"
                  placeholder="e.g. 082 123 4567"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">Notes (optional)</label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={400}
                  rows={3}
                  className="w-full bg-white px-4 py-3 rounded-lg ring-1 ring-gray-200 focus:ring-accent focus:outline-none transition resize-none"
                  placeholder="Hair length, preferred style, references…"
                />
              </div>

              <div className="bg-white rounded-lg p-4 ring-1 ring-gray-200 text-sm">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">Summary</div>
                <div className="flex justify-between"><span>Service</span><span className="font-medium">{service}</span></div>
                <div className="flex justify-between"><span>Date</span><span className="font-medium">{selectedDate ? selectedDate.toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" }) : "—"}</span></div>
                <div className="flex justify-between"><span>Time</span><span className="font-medium">{selectedTime ?? "—"}</span></div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-medium hover:bg-accent transition-colors"
              >
                Send Booking via WhatsApp
              </button>
              <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                Submitting opens WhatsApp with your booking pre-filled. Tap <strong>Send</strong> to deliver it to the atelier.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default BookingPage;