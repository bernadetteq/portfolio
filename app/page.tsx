import Link from "next/link";

export default function Home() {
  return (
    <main className="py-24 space-y-20">

      {/* HERO SECTION */}
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Product Manager &#10072; Certified Scrum Master &#10072; Certified UX Professional
        </p>

        <h1 className="text-5xl tracking-tight">
          {/* I design and build digital products with a focus on clarity, user
          needs, and thoughtful decision-making. */}
          {/* Product Owner with 10+ years of experience across B2C and B2B products, combining product strategy, user experience design, and technical execution. */}
          Product Owner with 10+ years of experience building digital products across B2C and B2B environments.
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl">
          {/* Focused on building customer-centered digital products that balance usability, business impact, and measurable outcomes. Currently exploring AI and machine learning to shape future product experiences. */}
          Combining product strategy, UX thinking, and technical fluency to create intuitive experiences that drive measurable business outcomes. Currently exploring AI and machine learning applications in product development.
        </p>
      </section>

      {/* FEATURED WORK */}
      <section className="space-y-8">
        <h2 className="text-4xl tracking-tight mb-6">Featured Projects</h2>

        <div className="space-y-6">
          <Link href="/projects/digitizing-returns">
            <div className="border rounded-2xl p-6 mb-8">
              <h3 className="text-xl tracking-tight">Digitizing the Returns Experience</h3>
              <p className="text-gray-500 mt-2">
                Built a self-service returns platform that addressed rising support demand, streamlined operations, and improved the end-to-end customer experience.
              </p>
            </div>
          </Link>
          <Link href="/projects/scaling-return-operations">
            <div className="border rounded-2xl p-6 mb-8">
              <h3 className="text-xl tracking-tight">Scaling Return Operations Through Automation</h3>
              <p className="text-gray-500 mt-2">
                Introduced automated return tracking and notifications to reduce operational overhead and accelerate customer access to real-time return information.
              </p>
            </div>
          </Link>
          <Link href="/projects/quotation-platform-product-discovery">
            <div className="border rounded-2xl p-6">
              <h3 className="text-xl tracking-tight">Shaping the Next Phase of an Internal Quotation Tool</h3>
              <p className="text-gray-500 mt-2">
                Used research, stakeholder interviews, and workflow analysis to identify high-impact enhancements and inform future product direction.
              </p>
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}