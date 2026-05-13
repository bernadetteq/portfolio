import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="py-24">
      <h1 className="text-4xl tracking-tight mb-6">Projects</h1>

      <div className="space-y-8">
        <Link href="/projects/digitizing-returns">
          <div className="border rounded-2xl p-6 mb-8">
            <h3 className="text-xl tracking-tight">Digitizing the Returns Experience</h3>
            <p className="text-gray-600 mt-2">
              Built a self-service returns platform that addressed rising support demand, streamlined operations, and improved the end-to-end customer experience.
            </p>
          </div>
        </Link>
        <Link href="/projects/scaling-return-operations">
          <div className="border rounded-2xl p-6 mb-8">
            <h3 className="text-xl tracking-tight">Scaling Return Operations Through Automation</h3>
            <p className="text-gray-600 mt-2">
              Introduced automated return tracking and notifications to reduce operational overhead and accelerate customer access to real-time return information.
            </p>
          </div>
        </Link>
        <Link href="/projects/quotation-platform-product-discovery">
          <div className="border rounded-2xl p-6">
            <h3 className="text-xl tracking-tight">Shaping the Next Phase of an Internal Quotation Tool</h3>
            <p className="text-gray-600 mt-2">
              Used research, stakeholder interviews, and workflow analysis to identify high-impact enhancements and inform future product direction.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}