import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-600">
      <div className="max-w-4xl mx-auto py-12 max-sm:px-6">
        <footer className="flex flex-col sm:flex-row">
            <div className="sm:w-1/4 flex-auto space-y-4 pr-8">
              <h5 className="text-lg font-bold tracking-tight uppercase text-[#cccccc]">About Me</h5>
              <p className="max-w-2xl sm:py-0 pb-12 text-[#aaaaaa]">
                With over a decade of expertise in the e-commerce industry, I practice agile methodologies, particularly Scrum and Kanban, to help businesses create value-driven outcomes. I have a strong background in web development and user experience design, and my passion lies in creating web products that are both financially successful and customer-centric, consistently surpassing assigned Key Performance Indicator (KPI) targets.
              </p>
            </div>
              <div className="sm:w-1/2 flex-none sm:mt-5 md:mt-0">
                <h5 className="text-lg font-bold tracking-tight uppercase text-[#cccccc]">Featured Certifications</h5>
                <Link
                  href="https://www.scrumalliance.org/members/1397795"
                  target="_blank"
                  className="
                    block
                    mt-4
                  "
                >

                  <div className="flex items-start gap-4">

                    {/* LOGO */}
                    <div
                      className="
                        flex-shrink-0
                        w-14
                        h-14
                        rounded-2xl
                        bg-zinc-100
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                    >
                      <img
                        src="/images/sa-csm-600.png"
                        alt="Certified Scrum Master Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0">

                      <h3
                        className="
                          text-lg
                          tracking-tight
                          text-[#cccccc]
                        "
                      >
                        Certified Scrum Master
                      </h3>

                      <p
                        className="
                          text-sm
                          text-[#1a1a1a]
                          mt-1
                        "
                      >
                        Issued by Scrum Alliance
                      </p>

                    </div>

                  </div>

                </Link>

                <Link
                  href="https://www.scrumalliance.org/members/1397795"
                  target="_blank"
                  className="
                    block
                    pt-8
                    pb-8
                  "
                >

                  <div className="flex items-start gap-4">

                    {/* LOGO */}
                    <div
                      className="
                        flex-shrink-0
                        w-14
                        h-14
                        rounded-2xl
                        bg-zinc-100
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                    >
                      <img
                        src="/images/sa-cspo-600.png"
                        alt="Certified Scrum Product Owner Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0">

                      <h3
                        className="
                          text-lg
                          tracking-tight
                          
                        "
                      >
                        Certified Scrum Product Owner
                      </h3>

                      <p
                        className="
                          text-sm
                          text-[#1a1a1a]
                          mt-1
                        "
                      >
                        Issued by Scrum Alliance
                      </p>

                    </div>

                  </div>

                </Link>

                <Link
                  href="https://baymard.com/certified/ffd6"
                  target="_blank"
                  className="
                    block
                  "
                >

                  <div className="flex items-start gap-4">

                    {/* LOGO */}
                    <div
                      className="
                        flex-shrink-0
                        w-14
                        h-14
                        rounded-2xl
                        bg-zinc-100
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                    >
                      <img
                        src="/images/baymard-ux-professional.png"
                        alt="Certified UX Professional Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0">

                      <h3
                        className="
                          text-lg
                          tracking-tight
                          text-[#cccccc]
                        "
                      >
                        Certified UX Professional
                      </h3>

                      <p
                        className="
                          text-sm
                          text-[#1a1a1a]
                          mt-1
                        "
                      >
                        Issued by Baymard Institute
                      </p>

                    </div>

                  </div>

                </Link>

            </div>
              
            
        </footer>
      </div>
    </div>
    
  );
}