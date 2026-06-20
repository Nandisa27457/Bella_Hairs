import {Link} from "react-router-dom";

function AboutPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-mute">The Atelier</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-none text-balance">
            Quiet rooms. <br />
            <span className="italic">Considered</span> hands.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div className="overflow-hidden rounded-[12px] outline outline-1 -outline-offset-1 outline-black/5">
            <img
              src="src/assets/about-atelier.jpg"
              alt="Inside the Bella Hair atelier — brushed brass, marble and a single velvet chair"
              width={1200}
              height={1536}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="space-y-6 text-mute leading-relaxed text-[15px] lg:pt-12">
            <p>
              Bella Hair began as a private practice — one chair, one client, one undivided hour.
              It remains so today. We do not run a salon floor. We run an atelier, where every
              guest is met by name and every service is built on the integrity of your hair, your
              skin, your time.
            </p>
            <p>
              Our specialty is the full vocabulary of Black hair and beauty: precision cuts, silk
              presses, weaves and wig installs, sculptural nails, hand-mapped lashes and
              architectural brows. Nothing is rushed. Nothing is borrowed.
            </p>
            <p>
              We believe restraint is a luxury — fewer products, finer technique, longer-lasting
              results. That is the Bella standard.
            </p>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-hairline">
              {[
                { k: "Est.", v: "Johannesburg" },
                { k: "Format", v: "By appointment" },
                { k: "Capacity", v: "One guest / hour" },
              ].map((m) => (
                <div key={m.k}>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-accent">{m.k}</div>
                  <div className="font-display text-xl mt-2">{m.v}</div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex gap-4 flex-wrap">
              <div
                // to="/booking"
                className="bg-ink text-canvas text-xs uppercase tracking-[0.25em] py-3.5 px-7 rounded-full hover:bg-accent transition-colors"
              >
                Reserve a Visit
              </div>
              <div
                // to="/contact"
                className="text-xs uppercase tracking-[0.25em] py-3.5 px-2 border-b border-ink hover:text-accent hover:border-accent transition-colors text-ink"
              >
                Get in touch
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;