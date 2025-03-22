

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
                <a className="underline font-bold text-lg" href="https://svy-stuff.s3.us-west-2.amazonaws.com/SamYoung_2025_CV_SeniorSoftwareEngineer.pdf">DOWNLOAD MY RESUME</a>
            </p>
            <p>
                Thanks for coming! Here you will find projects I've done since I was a wee starter engineer, until now. 
            </p>
            <p>
                I am a full stack developer and I love to discover new technolgoies. My latest obsession: AI and LLMs - currently playing with prompt engineering with OpenAI and other models (Llama, Gemini, Anthropic).
            </p>
            <p>
                Please explore! I have a few work in progress projects that I am looking forward to complete. Don't hesitate to ask me about them when we get a chance to connect!
            </p>
            <h4 className="text-lg font-bold pb-3">Technologies</h4>
            <div>
                <strong>Front-end:</strong> {frontEnd.map(fe => <span className={pillCss}>{fe}</span>)}
            </div>
            <div>
                <strong>Back-end:</strong> {backEnd.map(be => <span className={pillCss}>{be}</span>)}
            </div>
        </div>
    )
}