import Link from "next/link";
import MobileCarousel from "@/components/MobileCarousel";

export default function ProjectsPage() {
  return (
    <main className="py-24 space-y-20">
        <div className="space-y-8">
                <Link href="/projects" className="transition hover:text-[#dc8a8a] transition-colors duration-300">
                ← Back to Projects
                </Link>
            </div>
        <section className="space-y-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">
            E-COMMERCE
            </p>
            <h1 className="text-4xl tracking-tight mb-6">Digitizing the Returns Experience</h1>
            <p className="text-lg text-gray-500 max-w-2xl">
            Built a self-service returns platform that addressed rising support demand, streamlined operations, and improved the end-to-end customer experience.
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
            Growing return volumes exposed the limitations of a phone-dependent support model, creating operational bottlenecks and a fragmented customer experience. A scalable self-service solution was needed to streamline returns while reducing reliance on the contact center.
            </p>
            <h2 className="text-2xl tracking-tight mb-6">Creative Process</h2>

            <ul className="list-decimal list-outside text-lg text-gray-500 max-w-2xl pl-6">
                <li>Discover: Understand customer pain points, operational bottlenecks, and business goals through research and stakeholder collaboration.</li>
                <li>Prioritize: Identify the highest-impact opportunities based on value, feasibility, and urgency.</li>
                <li>Execute: Work closely with design and engineering teams to deliver iterative solutions efficiently.</li>
                <li>Optimize: Measure outcomes, gather feedback, and continuously improve the returns process after launch.</li>
            </ul>
            <h2 className="text-2xl tracking-tight mb-6">Outcome</h2>
            <div className="sm:grid sm:grid-cols-3 sm:gap-6 items-stretch">

                <div className="h-full border rounded-2xl p-6 mb-8 sm:mb-0">
                    <p className="text-5xl tracking-tight mb-4">+100%+</p>
                    <p className="text-gray-500">YoY increase in online return submissions through the introduction of a self-service returns platform.</p>
                </div>

                <div className="h-full border rounded-2xl p-6 mb-8 sm:mb-0">
                    <p className="text-5xl tracking-tight mb-4">+50%</p>
                    <p className="text-gray-500">Reduction in inbound return support calls due to the introduction of a self-service returns platform.</p>
                </div>

            </div>
            <h2 className="text-2xl tracking-tight mb-6">Key Takeaway</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
            This project reinforced the importance of balancing speed, scope, and customer value. Originally planned for a single-quarter release, shifting business conditions required rapid reprioritization mid-development. To deliver value on time, I made the decision to strategically reduce scope and focus on the highest-impact functionality, an important lesson in practical product leadership.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">It also highlighted the value of simplifying complex user experiences. By reevaluating a lengthy returns flow with 10+ fields and extensive questionnaires, we streamlined the process into a lightweight experience centered around a few key questions, photo uploads, and optional customer comments. The result was a faster, more intuitive journey that reduced friction for users while maintaining operational needs.</p>
            
        </section>
        <section className="space-y-6">
            <h2 className="text-2xl tracking-tight mb-6">Visual Assets</h2>
            <p className="text-lg text-gray-500 max-w-2xl">
            Placeholder for screenshots, wireframes, and other visual assets that illustrate the design and functionality of the returns platform.
            </p>    
            <MobileCarousel />
        </section>
    </main>
  );
}