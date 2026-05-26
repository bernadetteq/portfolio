import Link from "next/link";
const certifications = [
  {
    logo: "/images/sa-csm-600.png",
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    link: "https://www.scrumalliance.org/members/1397795",
  },
  {
    logo: "/images/sa-cspo-600.png",
    title: "Certified Scrum Product Owner",
    issuer: "Scrum Alliance",
    link: "https://www.scrumalliance.org/members/1397795",
  },
  {
    logo: "/images/baymard-ux-professional.png",
    title: "Baymard Institute UX Professional",
    issuer: "Baymard Institute",
    link: "https://baymard.com/certified/ffd6",
  },
  {
    logo: "/images/duke-university.png",
    title: "AI Produt Management",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/AW1HS7MSSJX6",
  },

  {
    logo: "/images/aipmm.png",
    title: "Certified Product Manager",
    issuer: "Association of International Product Marketing & Management",
    link: "https://certificates.aipmm.com/44810342-7961-47d0-ab59-b49be3d04027#acc.zC7jk5cI",
  },
  {
    logo: "/images/freecodecamp.png",
    title: "Legacy Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/fcc84a02b8a-8eae-4633-90ce-b61de8c35fd0/responsive-web-design",
  },
  
];
export default function AboutPage() {
  return (
    //<main className="py-24 max-w-3xl">
    <main className="py-24 space-y-20">
      <h1 className="text-4xl tracking-tight mb-8">About me</h1>
        <section className="space-y-6">
            <p className="text-lg leading-8 text-gray-500">
                With over a decade of experience in product development across e-commerce and B2B environments, I help organizations build scalable, customer-centric digital products that drive measurable business outcomes. My approach combines agile product practices, cross-functional collaboration, and a strong foundation in web development and user experience design to deliver solutions that balance customer needs with business goals.
            </p>
            <p className="text-lg leading-8 text-gray-500">
                As a Certified Scrum Master and Product Owner, I have led initiatives spanning product discovery, operational optimization, workflow automation, and digital experience improvements which consistently focusing on delivering value, improving efficiency, and exceeding key business metrics.
            </p>
            <p className="text-lg leading-8 text-gray-500 mt-6">
                Skills that help me in my daily Product journey
            </p>
            <ul className="list-disc list-inside text-lg leading-8 text-gray-500 mt-4">
                <li>Data Analysis</li>
                <li>User Experience</li>
                <li>Leading Cross-Functional Teams</li>
                <li>Project Management</li>
                <li>Good Communication Skills</li>
                <li>Interpersonal Skills</li>
                <li>Defining KPIs</li>
                <li>Voice of Customer</li>
                <li>Research</li>
                <li>Agile, Scrum</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>User Stories</li>
            </ul>
            <p className="text-lg leading-8 text-gray-500 mt-6">
                Tools that I use on my Product crusade
            </p>
            <ul className="list-disc list-inside text-lg leading-8 text-gray-500 mt-4">
                <li>JIRA</li>
                <li>Confluence</li>
                <li>Microsoft Office</li>
                <li>Google Drive</li>
                <li>Spreadsheets</li>
                <li>Google Analytics, PowerBI</li>
                <li>Adobe Analytics</li>
                <li>Adobe Creative Suite</li>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>Slack, MS Teams, Zoom</li>
                <li>Sketch, Figma</li>
            </ul>
            <p className="text-lg leading-8 text-gray-500 mt-6">Front-end Development in my repertoire</p>
            <ul className="list-disc list-inside text-lg leading-8 text-gray-500 mt-4">
                <li>HTML, HTML5</li>
                <li>CSS, CSS3, Tailwind</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>React, Next.js</li>
                <li>Responsive Web Development</li>
                <li>Curiosity and courage to learn new technologies</li>
            </ul>
        </section>
        {/* FEATURED WORK */}
        <section className="space-y-8">
            <h2 className="text-4xl tracking-tight mb-8">My Superpowers</h2>

            <div className="space-y-6">
                <div className="border rounded-2xl p-6 hover:translate-x-[10px] transition-transform duration-300">
                    <h3 className="text-xl tracking-tight">Product Management</h3>
                    <p className="text-gray-500 mt-2">
                    I started my Product Management journey in 2017 and have continued growing ever since, constantly developing new skills and learning through each experience along the way.”
                    </p>
                </div>
                <div className="border rounded-2xl p-6 hover:translate-x-[10px] transition-transform duration-300">
                    <h3 className="text-xl tracking-tight">UX Design</h3>
                    <p className="text-gray-500 mt-2">
                    During my time in front-end development, I naturally gravitated toward UX design, which has been incredibly valuable in my journey as a Product Owner. Combined with my experience in back-end development and web design, it's given me a well-rounded perspective on building user-centered products.
                    </p>
                </div>
                <div className="border rounded-2xl p-6 hover:translate-x-[10px] transition-transform duration-300">
                    <h3 className="text-xl tracking-tight">Web Development</h3>
                    <p className="text-gray-500 mt-2">
                    One of my core strengths is web development, backed by more than six years of experience, including two years focused on back-end development and web design.
                    </p>
                </div>
            </div>
        </section>
        <section className="space-y-8">

            {/* SECTION HEADER */}
            <h2 className="text-4xl tracking-tight mb-8">Certifications</h2>

            {/* FLEX WRAP LAYOUT */}
            <div
                className="
                flex
                flex-wrap
                justify-center
                gap-6
                "
            >

                {certifications.map((cert, index) => (

                <Link
                    key={index}
                    href={cert.link}
                    target="_blank"
                    className="
                    w-full
                    sm:w-[200px] 
                    flex
                    flex-col
                    items-center
                    text-center
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    "
                >

                    {/* BADGE */}
                    <div
                    className="
                        w-50
                        h-50
                        flex
                        items-center
                        justify-center

                        overflow-hidden

                        mb-5
                    "
                    >

                    <img
                        src={cert.logo}
                        alt={cert.title}
                        className="
                        w-40
                        h-40
                        object-contain
                        "
                    />

                    </div>

                    {/* TITLE */}
                    <h3
                    className="
                        text-sm
                        font-semibold
                        leading-snug
                    "
                    >
                    {cert.title}
                    </h3>

                    {/* ISSUER */}
                    <p
                    className="
                        text-xs
                        text-zinc-500
                        mt-2
                    "
                    >
                    {cert.issuer}
                    </p>

                </Link>

                ))}

            </div>

        </section>

    </main>
  );
}