import Link from "next/link";
import MobileCarousel from "@/components/MobileCarousel"; 
import ImageCarousel from "@/components/ImageCarousel";

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
            B2B &#10072; SOFTWARE PLATFORM &#10072; PRODUCT DISCOVERY
            </p>
            <h1 className="text-4xl tracking-tight mb-6">Quotation Platform Product Discovery</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
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

                            <p className="text-sm text-gray-600 max-w-2xl">
                            Scrum Product Owner
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

                            <p className="text-sm text-gray-600 max-w-2xl">
                            Sales, Pricing & Quotation Operations, <br className="hidden sm:inline" />Regional Commercial Leadership teams, <br className="hidden sm:inline" />Product and UX teams
                            </p>
                        </div>

                    </div>
                    
                </div>
                <div className="w-fullsm:w-1/3 flex-none space-y-4 pr-8 "></div>
            </div>
        </section>
        <section className="space-y-6">
            <h2 className="text-2xl tracking-tight mb-6 tracking-tight">Project Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
            As the internal quotation platform matured, the team identified an opportunity to improve how quotation updates and follow-ups were managed across global sales and pricing operations. Rather than immediately introducing new features, we initiated a structured product discovery effort to better understand operational pain points and identify high-impact opportunities for future growth.</p>

            <p className="text-lg text-gray-600 max-w-2xl">Working closely with Sales Executives, Quote Desk teams, Pricing Executives, Trade Lane Managers, and Regional Pricing Managers, we conducted cross-functional discovery activities to uncover workflow inefficiencies, communication gaps, and areas where the product could better support business responsiveness.</p>

            <p className="text-lg text-gray-600 max-w-2xl">Although the proposed solutions were ultimately deprioritized due to shifting company goals, the initiative established a stronger product discovery practice within the team and provided valuable strategic insights for the platform's future direction.
            </p>
            <h2 className="text-2xl tracking-tight mb-6 tracking-tight">Problem</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Quotation updates and follow-ups relied heavily on manual coordination across multiple operational teams, resulting in communication delays, limited visibility, and inefficiencies in managing quote progress.</p>
            <p className="text-lg text-gray-600 max-w-2xl">As the platform expanded across global teams, the organization needed a clearer understanding of user workflows and operational bottlenecks before investing in the next phase of product development.</p>
            <h2 className="text-2xl tracking-tight mb-6">Discovery Goal</h2>
            <p className="text-lg text-gray-600 max-w-2xl font-semibold">North Star</p>
            <p className="text-lg text-gray-600 max-w-2xl">Understand how the product can better support internal teams in winning more business.</p>
            
            <h2 className="text-2xl tracking-tight mb-6">Creative Process</h2>
            <ul className="list-[upper-roman] list-outside text-lg text-gray-600 max-w-2xl pl-6">
                <li>Discovery & Research
                    <ul className="list-decimal list-outside text-lg text-gray-600 max-w-2xl pl-6">
                        <li>Conducted stakeholder interviews across sales, pricing, and operational teams</li>
                        <li>Shadowed intensive product users to understand day-to-day quotation workflows</li>
                        <li>Facilitated collaborative workshops to surface recurring operational pain points</li>
                        <li>Refined interview questions iteratively throughout the discovery process</li>
                    </ul>
                </li>
                <li>User Groups
                    <ul className="list-decimal list-outside text-lg text-gray-600 max-w-2xl pl-6">
                        <li>Sales Executives</li>
                        <li>Quote Desk / Pricing Executives</li>
                        <li>Trade Lane Managers</li>
                        <li>Regional Pricing Managers</li>
                    </ul>
                </li>
                <li>Insight Consolidation
                    <ul className="list-decimal list-outside text-lg text-gray-600 max-w-2xl pl-6">
                        <li>Synthesized recurring pain points and workflow inefficiencies</li>
                        <li>Mapped findings into opportunity areas and prioritization themes</li>
                        <li>Used Opportunity Solution Trees to visualize potential solution paths</li>
                    </ul>
                </li>
                <li>Solution Exploration
                    <ul className="list-decimal list-outside text-lg text-gray-600 max-w-2xl pl-6"  >
                        <li>Facilitated ideation sessions with stakeholders and operational experts</li>
                        <li>Explored concepts such as:
                            <ul className="list-[lower-alpha] list-outside text-lg text-gray-600 max-w-2xl pl-6">
                                <li>quotation messaging capabilities</li>
                                <li>quote file indicators and status alerts</li>
                                <li>workflow visibility improvements</li>
                            </ul>
                        </li>
                        <li>Prioritized opportunities collaboratively with stakeholders</li>
            
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl tracking-tight mb-6">Key Challenges</h2>
            <p className="text-lg text-gray-600 max-w-2xl font-semibold">Coordinating Global Stakeholders</p>
            <p className="text-lg text-gray-600 max-w-2xl">Scheduling discovery sessions across multiple regions and time zones required flexibility and close coordination with global operational teams.</p>
            <p className="text-lg text-gray-600 max-w-2xl font-semibold">Managing Discovery Scope</p>
            <p className="text-lg text-gray-600 max-w-2xl">Early interviews surfaced a wide range of opportunities, making prioritization and insight consolidation a critical part of the discovery process.</p>

            <h2 className="text-2xl tracking-tight mb-6">Outcome</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Although the proposed solutions were not ultimately implemented due to shifting business priorities, the discovery initiative helped establish a more structured, insight-driven approach to product planning within the organization.</p>

            <p className="text-lg text-gray-600 max-w-2xl">The project reinforced the value of validating operational problems early, aligning stakeholders around shared priorities, and using discovery to guide strategic product decisions before committing to development.</p>

            
        </section>
        {/* <section className="space-y-6">
            <h1 className="text-4xl tracking-tight mb-6">Visual Assets</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
            Placeholder for screenshots, wireframes, and other visual assets that illustrate the design and functionality of the returns platform.
            </p>    
            <MobileCarousel />
        </section> */}
        <ImageCarousel />
    </main>
  );
}