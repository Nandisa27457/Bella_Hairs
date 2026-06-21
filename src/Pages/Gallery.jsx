import nude from "../assets/nude.jpg";
import sparkle from "../assets/sparkle.jpg";
import nails from "../assets/nails-done.jpg";
import weave from "../assets/Weave.jpg";
import sewin from "../assets/Sew-in.jpg";
import curls from "../assets/curls.jpg";
import brows from "../assets/Brows-shoot.jpg";
import threads from "../assets/thread-brows.jpg";
import brow from "../assets/brow.jpg";
import lashes from "../assets/lashes-done.jpg";
import lash from "../assets/lashes-nat.jpg";
import lash2 from "../assets/lashes-make.jpg";
import wash from "../assets/Hair-wash.jpg";
import braids from "../assets/braids.jpg";
import hair from "../assets/hair-sew.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const sections = [
    {
        id: "nails",
        number: "01",
        title: "The",
        italic: "Nails.",
        intro: "Sculpted, structured, signed off in gloss.",
        body: "Every set begins with a thorough dry manicure, cuticles tidied, nail plate prepped, length and shape mapped to the hand. We work in builder gels and soft gels for a natural, lightweight finish that wears for three to four weeks without lifting. Choose from almond, oval, square or stiletto; finished in classic French, milky chrome, glazed nude, or a custom art moment for the occasion.",
        items: [
            {
                src: nude,
                label: "Almond Nude",
                caption: "Builder gel · soft glaze",
                aspect: "aspect-[3/4]",
                span: "md:row-span-2",
            },
            {
                src: sparkle,
                label: "Pearl French",
                caption: "Glitter ombré tip",
                aspect: "aspect-[4/3]",
            },
            {
                src: nails,
                label: "Nail Finish",
                caption: "Mirror finish · custom length",
                aspect: "aspect-[4/3]",
            },
        ],
    },
    {
        id: "weaves",
        number: "02",
        title: "The",
        italic: "Weaves.",
        intro: "Seamless installs, custom blended, photographed in daylight.",
        body: "From sew-ins and closures to full frontals and quick weaves. We measure, prep and braid the natural hair for a flat, comfortable foundation, then install bundles matched to your texture and density. Lace is tinted, plucked and laid undetectable. Every install closes with a steam, cut and style so you walk out finished, not just fitted.",
        items: [
            {
                src: weave,
                label: "Closure Install",
                caption: "Body wave · 18 in",
                aspect: "aspect-[3/4]",
                span: "md:row-span-2",
            },
            {
                src: sewin,
                label: "Sew-In Install",
                caption: "Frontal · cut & curled",
                aspect: "aspect-[4/3]",
            },
            {
                src: curls,
                label: "Deep Curl",
                caption: "Quick weave · 22 in",
                aspect: "aspect-[4/3]",
            },
        ],
    },
    {
        id: "brows",
        number: "03",
        title: "The",
        italic: "Brows.",
        intro: "Mapped to the face. Drawn, never copied.",
        body: "Brows are measured against your bone structure first, never to a trend or a stencil. We offer threading, waxing, tinting and brow lamination, and we finish with a feathered fill that follows the natural hair pattern. The result is a brow that frames the eye without announcing itself: defined, balanced, and entirely yours.",
        items: [
            {
                src: brows,
                label: "Drawn Brow",
                caption: "Mapped · tinted · set",
                aspect: "aspect-[3/4]",
                span: "md:row-span-2",
            },
            {
                src: threads,
                label: "Sculpted Arch",
                caption: "Wax & thread combo",
                aspect: "aspect-[4/3]",
            },
            {
                src: brow,
                label: "Brushed Up",
                caption: "Lamination · 6 wk wear",
                aspect: "aspect-[4/3]",
            },
        ],
    },
    {
        id: "lashes",
        number: "04",
        title: "The",
        italic: "Lashes.",
        intro: "Light on the lid. Open on the eye.",
        body: "Classic, hybrid and volume sets, each fan hand-crafted at the chair and isolated to a single natural lash. We map the eye for length, curl and weight so the set lifts the gaze instead of dragging it. Retention is two to four weeks; refills are kept short and clean. Lash lifts and tints are available for those who prefer their own.",
        items: [
            {
                src: lashes,
                label: "Hybrid Set",
                caption: "Mixed classic & volume",
                aspect: "aspect-[3/4]",
                span: "md:row-span-2",
            },
            {
                src: lash,
                label: "Natural Volume",
                caption: "0.07 · 11 mm",
                aspect: "aspect-[4/3]",
            },
            {
                src: lash2,
                label: "Mega Volume",
                caption: "Wispy · cat-eye map",
                aspect: "aspect-[4/3]",
            },
        ],
    },
    {
        id: "hair",
        number: "05",
        title: "The",
        italic: "Hair.",
        intro: "Treatments, presses and styling for your own.",
        body: "Wash days are slow on purpose, scalp massaged, hair detangled with conditioner through, deep treatments steamed in. We silk press for movement and shine without heat damage, sculpt updos for events, and braid for everyday wear. Bring a reference if you have one; bring nothing if you don't.",
        items: [
            {
                src: wash,
                label: "Glossy Silk Wash",
                caption: "Wash, treat & press",
                aspect: "aspect-[3/4]",
                span: "md:row-span-2",
            },
            {
                src: braids,
                label: "Sculpted Braids",
                caption: "Event styling",
                aspect: "aspect-[4/3]",
            },
            {
                src: hair,
                label: "Mirror Finish",
                caption: "Steam treatment",
                aspect: "aspect-[4/3]",
            },
        ],
    },
];

function GalleryPage() {
    return (
        <>
         <Navbar />
            <section className="px-6 pt-20 pb-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-mute">
                                The Archive
                            </span>
                            <h1 className="font-display text-5xl md:text-7xl mt-4 leading-none">
                                A visual <span className="italic">record.</span>
                            </h1>
                        </div>
                        <p className="text-mute max-w-[44ch] text-sm leading-relaxed">
                            Selected work from the chair, organised by service.
                            Photographed in available light, retouched only for
                            colour. What you see is what you book.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-x-6 gap-y-2 border-t border-black/10 pt-6 text-[11px] uppercase tracking-[0.25em] text-mute">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="hover:text-ink transition-colors">
                                {s.number} — {s.italic.replace(".", "")}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="px-6 py-16 border-t border-black/5 scroll-mt-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-12 gap-8 mb-10">
                            <div className="md:col-span-5">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-mute">
                                    {section.number} — Service
                                </span>
                                <h2 className="font-display text-4xl md:text-6xl mt-4 leading-none">
                                    {section.title}{" "}
                                    <span className="italic">
                                        {section.italic}
                                    </span>
                                </h2>
                            </div>
                            <div className="md:col-span-7 md:pt-3">
                                <p className="font-display italic text-2xl md:text-3xl text-ink/80 leading-snug mb-4">
                                    {section.intro}
                                </p>
                                <p className="text-mute text-[15px] leading-relaxed max-w-[62ch]">
                                    {section.body}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[260px]">
                            {section.items.map((it, i) => (
                                <figure
                                    key={i}
                                    className={`group relative overflow-hidden rounded-[12px] outline outline-1 -outline-offset-1 outline-black/5 ${it.span ?? ""}`}>
                                    <img
                                        src={it.src}
                                        alt={it.label}
                                        loading="lazy"
                                        width={1024}
                                        height={1024}
                                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${it.aspect ?? "aspect-[4/3]"}`}
                                    />
                                    <figcaption className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent text-canvas opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="font-display text-xl italic">
                                            {it.label}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-[0.25em]">
                                            {it.caption}
                                        </span>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
            <Footer />
        </>
    );
}

export default GalleryPage;
