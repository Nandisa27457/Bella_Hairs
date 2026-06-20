const menu = [
    {
        n: "01",
        name: "Hair",
        blurb: "Precision cuts, silk presses and health-focused treatments designed for the integrity of natural texture.",
        items: [
            { label: "Signature Wash & Style", price: "from R 450" },
            { label: "Silk Press", price: "from R 750" },
            { label: "Deep Conditioning Ritual", price: "R 380" },
            { label: "Trim & Shape", price: "R 220" },
        ],
    },
    {
        n: "02",
        name: "Weaves",
        blurb: "Seamless, weightless installations using premium, ethically sourced fibre — built to last.",
        items: [
            { label: "Full Sew-In Install", price: "from R 1 200" },
            { label: "Closure / Frontal Install", price: "from R 1 600" },
            { label: "Glueless Wig Install", price: "from R 950" },
            { label: "Maintenance & Refresh", price: "R 550" },
        ],
    },
    {
        n: "03",
        name: "Nails",
        blurb: "Sculptural forms and medical-grade care for the natural nail bed. Gel, acrylic, structured manicure.",
        items: [
            { label: "Structured Gel Manicure", price: "R 380" },
            { label: "Acrylic Full Set", price: "from R 520" },
            { label: "Gel Refill", price: "R 320" },
            { label: "Pedicure with Polish", price: "R 350" },
        ],
    },
    {
        n: "04",
        name: "Lashes",
        blurb: "Individually mapped extensions that mimic organic growth patterns. Classic, hybrid, volume.",
        items: [
            { label: "Classic Set", price: "R 450" },
            { label: "Hybrid Set", price: "R 600" },
            { label: "Mega Volume Set", price: "R 780" },
            { label: "Refill (2–3 wks)", price: "from R 280" },
        ],
    },
    {
        n: "05",
        name: "Brows",
        blurb: "Architectural shaping and tinting to frame the gaze. Drawn, never carved.",
        items: [
            { label: "Brow Shape & Tint", price: "R 220" },
            { label: "Brow Lamination", price: "R 380" },
            { label: "Henna Brows", price: "R 280" },
            { label: "Tint Only", price: "R 120" },
        ],
    },
];

function ServicesPage() {
    return (
        <section className="px-6 py-24 bg-white">
            {" "}
            <div className="max-w-5xl mx-auto">
                {" "}
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                    The Menu{" "}
                </span>
                ```
                <h1 className="text-5xl md:text-7xl mt-4 mb-6 leading-none font-serif">
                    A curated <span className="italic">service</span> list.
                </h1>
                <p className="text-gray-500 max-w-[55ch] mb-20 leading-relaxed">
                    Pricing is indicative. Final quotes are confirmed during
                    consultation based on hair length, density, and product
                    selection. All services are by appointment only.
                </p>
                <div className="space-y-20">
                    {menu.map((service) => (
                        <article
                            key={service.n}
                            className="grid md:grid-cols-[120px_1fr] gap-8 pb-16 border-b border-gray-200 last:border-b-0">
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                                    {service.n}
                                </div>

                                <h2 className="text-4xl mt-3 italic font-serif">
                                    {service.name}
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-500 max-w-[55ch] mb-8 leading-relaxed">
                                    {service.blurb}
                                </p>

                                <ul className="divide-y divide-gray-200">
                                    {service.items.map((item) => (
                                        <li
                                            key={item.label}
                                            className="flex justify-between items-center py-4 text-sm">
                                            <span>{item.label}</span>

                                            <span className="text-gray-500">
                                                {item.price}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-20 text-center">
                    <div className="inline-flex cursor-pointer bg-black text-white text-xs uppercase tracking-[0.25em] py-4 px-8 rounded-full hover:bg-gray-800 transition-colors">
                        Book a Service
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesPage;
