

export default function AboutMe() {
    const frontEnd = [
        "JavaScript", "TypeScript", "React", "Redux", "NextJS", "HTML", "CSS", "GraphQL", "WebSockets", "RESTful", "API", "Jest/RTL/Cypress"
    ];
    const backEnd = [
        "Node", "Python", "MySQL", "MongoDB (NoSQL)", "AI", "LLMs", "OpenAI", "AWS EC2/S3/RDS", "CI/CD", "Netlify"
    ];
    const pillCss = `bg-[#8bafa3] text-white inline-block px-2 py-1 m-1 rounded-lg shadow-xs text-xs`;
    return (
        <div>
            <h3 className="text-xl font-bold pb-3">About</h3>
            <p>
                I am a software engineer with 10+ years and manager with 3+ years of experience building and scaling enterprise and SaaS applications. My industry experience includes healthcare, finance, entertainment, world news, and data mining. I have a passion for new technologies and solving complex problems. I am currently exploring AI and LLMs to see how they can be applied to real-world applications.
            </p>
            <p>
                My technical background includes: JavaScript, TypeScript, React, Node & anything web related, Python, PostgreSQL, Mongo, Cloud computing (AWS, GCP), CICD, Docker, IaC with Terraform, and more.
            </p>
            <h3 className="text-xl font-bold pb-3">Resume</h3> <span>Last updated: Oct 2025</span>
            <p>
                <a className="underline font-bold text-lg" href={import.meta.env.VITE_S3_PDF_URI}>DOWNLOAD RESUME</a>
            </p>

            <div className="py-2">
                <strong>ENGINEERING MANAGER</strong> - FNTech - Remote <span><em>(3/2023 - Present)</em></span>
                <ul className="space-y-1 list-disc list-inside">
                    <li>Grew a 7-engineer to 12 local and offshore team across multiple client projects, setting priorities, defining deliverables, and ensuring high-quality, on-time delivery.</li>
                    <li>Conducted biweekly 1:1s focused on career development, feedback, and removing blockers to maintain high engagement and retention.</li>
                    <li>Collaborated with cross-functional stakeholders to balance resources and technical priorities with business
                    goals.</li>
                    <li>Defined system architecture for scalable AI (LLM + RAG + Python + Postgres) and client-facing applications.</li>
                    <li>Developed a ticketing platform with React/TypeScript, Tailwind, Redux, and Node, REST APIs directly
                    supporting client revenue goals.</li>
                    <li>Streamlined CI/CD pipelines via GitHub Actions and Terraform, reducing release time by 27%.</li>
                    <li>Drove AWS and GCP cloud adoption, improving infrastructure efficiency.</li>
                </ul>
            </div>
            <div className="py-2">
                <strong>SOFTWARE ENGINEER LEAD</strong> - Tealium - Remote <span><em>(2/2022 - 7/2023)</em></span>
                <ul className="space-y-1 list-disc list-inside">
                    <li>Improved feature delivery speed by 21% by migrating a tags dashboard from jQuery to React with modern
                    hooks and state management.</li>
                    <li>Mentored 5 developers on design patterns and structured reviews, reducing defects and raising code quality.</li>
                    <li>Partnered with stakeholders to convert requirements into technical specs and prioritize high-impact features.</li>
                    <li>Designed and maintained APIs in Spring Boot and Node, handling thousands of daily requests while ensuring
                    security and scalability.</li>
                    <li>Shipped user-centric SaaS features from Figma prototypes via automated CI/CD pipelines.</li>
                </ul>
            </div>
            <div className="py-2">
                <strong>SENIOR SOFTWARE ENGINEER </strong> - The Washington Post - Remote <span><em>(9/2019 - 2/2022)</em></span>
                <ul className="space-y-1 list-disc list-inside">
                    <li>Integrated internal React-based CMS (Arc XP) into external backend systems (Java, Node, PHP), streamlining production/editorial workflows.</li>
                    <li>Optimized dynamic content rendering, improving performance and responsiveness with GraphQL, REST, and Node.js.</li>
                    <li>Implemented robust unit and regression testing with Jest, Enzyme, and Cypress to ensure reliability and
                    prevent regressions.</li>
                </ul>
            </div>
            <div className="py-2">
                <strong>SOFTWARE ENGINEER </strong> - APM Music - <span><em>(8/2017 - 9/2019)</em></span>
                <ul className="space-y-1 list-disc list-inside">
                    <li>Designed and implemented new JavaScript features for the music search application, boosting site traffic by
                    22%.</li>
                    <li>Developed internal reporting tools using third-party RESTful APIs, enabling data-driven business decisions.</li>
                </ul>
            </div>
            <div className="py-2">
                <strong>SOFTWARE ENGINEER </strong> - INT Inc - <span><em>(2/2016 - 11/2016)</em></span>
                <ul className="space-y-1 list-disc list-inside">
                    <li>Enhanced custom CRM platform for fuel and oil dealers by migrating backend logic to Yii (PHP), improving
                    user functionality.</li>
                    <li>Built and maintained backend systems for user account management using PHP, MongoDB, and internal
                    APIs.</li>
                </ul>
            </div>
        </div>
    )
}