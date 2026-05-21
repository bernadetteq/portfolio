export default function AboutPage() {
  return (
    //<main className="py-24 max-w-3xl">
    <main className="py-24 space-y-20">
      <h1 className="text-4xl tracking-tight mb-8">About me</h1>
        <section className="space-y-6">
            <p className="text-lg leading-8 text-gray-500">
                With over a decade of expertise in the e-commerce industry, I practice agile methodologies, particularly Scrum and Kanban, to help businesses create value-driven outcomes. As a Certified Scrum Master and Scrum Product Owner, my work is deeply rooted in these methodologies. I have a strong background in web development and user experience design, and my passion lies in creating web products that are both financially successful and customer-centric, consistently surpassing assigned Key Performance Indicator (KPI) targets.
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
                <div className="border rounded-2xl p-6">
                    <h3 className="text-xl tracking-tight">Product Management</h3>
                    <p className="text-gray-500 mt-2">
                    I started my Product Management journey in 2017 and have continued growing ever since, constantly developing new skills and learning through each experience along the way.”
                    </p>
                </div>
                <div className="border rounded-2xl p-6">
                    <h3 className="text-xl tracking-tight">UX Design</h3>
                    <p className="text-gray-500 mt-2">
                    During my time in front-end development, I naturally gravitated toward UX design, which has been incredibly valuable in my journey as a Product Owner. Combined with my experience in back-end development and web design, it’s given me a well-rounded perspective on building user-centered products.
                    </p>
                </div>
                <div className="border rounded-2xl p-6">
                    <h3 className="text-xl tracking-tight">Web Development</h3>
                    <p className="text-gray-500 mt-2">
                    One of my core strengths is web development, backed by more than six years of experience, including two years focused on back-end development and web design.
                    </p>
                </div>
            </div>
        </section>
    </main>
  );
}