import Link from "next/link";
import MobileCarousel from "@/components/MobileCarousel";

export default function ProjectsPage() {
  return (
    <main className="py-24 space-y-20">
        <div className="space-y-8">
                <Link href="/projects">
                ← Back to Projects
                </Link>
            </div>
        <section className="space-y-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">
            E-COMMERCE
            </p>
            <h1 className="text-4xl tracking-tight mb-6">Scaling Return Operations Through Automation</h1>
            <p className="text-lg text-gray-500 max-w-2xl">
            Led the transition from manual return processing to a rules-based automated workflow, reducing operational overhead and accelerating customer resolutions.
            </p>    

            
        </section>
        <section className="space-y-6">
            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 flex-none space-y-4 pr-8 mb-6 sm:mb-0">
                    <div className="flex items-center gap-4">

                        {/* SVG Icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-600 rounded-xl shrink-0">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>



                        </div>

                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-semibold tracking-tight">
                            Role
                            </p>

                            <p className="text-sm text-gray-500 max-w-2xl">
                            Product Manager
                            </p>
                        </div>

                        </div>
                    
                </div>
                <div className="w-fullsm:w-1/3 flex-none space-y-4 pr-8">
                    <div className="flex items-center gap-4">

                        {/* SVG Icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-600 rounded-xl shrink-0">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>

        
                        </div>

                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-semibold tracking-tight">
                            Teams
                            </p>

                            <p className="text-sm text-gray-500 max-w-2xl">
                            Contact Center, Data Science, Scrum Team
                            </p>
                        </div>

                    </div>
                    
                </div>
                <div className="w-fullsm:w-1/3 flex-none space-y-4 pr-8 "></div>
            </div>
        </section>
        <section className="space-y-6">
            <h2 className="text-2xl tracking-tight mb-6 tracking-tight">Problem</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
            Although customers could already submit returns online, the backend return processing workflow remained heavily manual. Support teams were required to review requests, validate eligibility, approve returns, and coordinate customer communications, creating operational bottlenecks as return volumes increased.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">The business needed a scalable solution that could automate repetitive workflows, reduce turnaround times, and improve the overall customer experience without disrupting the existing self-service journey.</p>
            
            <h2 className="text-2xl tracking-tight mb-6">Creative Process</h2>

            <ul className="list-decimal list-outside text-lg text-gray-500 max-w-2xl pl-6">
                <li>Identified operational bottlenecks within the manual return processing workflow through data analysis and stakeholder interviews.</li>
                <li>Analyzed repetitive support tasks to determine automation opportunities</li>
                <li>Collaborated with operations, support, and engineering teams to define business rules and approval logic</li>
                <li>Prioritized scalable automation flows while maintaining operational control for exceptions</li>
                <li>Preserved the existing customer-facing experience to minimize friction and retraining</li>
                <li>Streamlined backend workflows including eligibility checks, approvals, and customer notifications</li>
                <li>Focused on reducing manual intervention, accelerating turnaround times, and improving scalability</li>
                <li>Delivered an iterative solution that balanced customer experience, business efficiency, and technical feasibility</li>
            </ul>
            <h2 className="text-2xl tracking-tight mb-6">Outcome</h2>
            <div className="sm:grid sm:grid-cols-3 sm:gap-6 items-stretch">

                <div className="h-full border rounded-2xl p-6 mb-8 sm:mb-0">
                    <p className="text-5xl tracking-tight mb-4">+13%</p>
                    <p className="text-gray-500">Online Returns driven by faster and more scalable self-service return processing</p>
                </div>

                <div className="h-full border rounded-2xl p-6 mb-8 sm:mb-0">
                    <p className="text-5xl tracking-tight mb-4">37 NPS</p>
                    <p className="text-gray-500">Achieved through a faster and more streamlined returns journey</p>
                </div>

            </div>
            <h2 className="text-2xl tracking-tight mb-6">Key Takeaway</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
            This project reinforced the importance of operational scalability after achieving product adoption. While the initial challenge was enabling customers to complete returns online, the next challenge was ensuring the business could efficiently support growing demand behind the scenes.

            </p>
            <p className="text-lg text-gray-500 max-w-2xl">I learned that successful self-service experiences extend beyond the user interface and they also require resilient operational systems, clear automation logic, and cross-functional alignment to scale effectively.</p>
            
        </section>
    </main>
  );
}