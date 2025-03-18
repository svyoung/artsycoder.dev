import { useEffect, useState } from "react";
import githubLogo from "../assets/github-mark.svg";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GIT_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `
                    {
                        user(login: "svyoung") {
                            pinnedItems(first: 6, types: REPOSITORY) {
                                nodes {
                                    ... on Repository {
                                        name
                                        description
                                        url
                                    }
                                }
                            }
                        }
                    }
                `
            })
        })
        .then((res) => res.json())
        .then((data) => setProjects(data.data.user.pinnedItems.nodes))
        .catch((err) => console.error(err));
    }, []);

    console.log("projects", projects);
    const linkCss = `font-bold underline`;

    return (
        <>
            <div>
                <h3 className="text-xl font-bold pb-3">Projects</h3>
                <p>Github projects from the latest to oldies. Check out my <a className={linkCss} href="https://github.com/svyoung/">github profile</a> to see the rest.</p>
            </div>
            <ul>
            {projects.map(project => (
                <li key={project.id} className="py-3">
                    <div className="flex flex-row">
                        <img src={githubLogo} width="20px" className="mr-2" alt="repository" />
                        <span className=""><a className={linkCss} href={project.url}>{project.name}</a></span>
                    </div>
                    <div>{project.description}</div>
                </li>
            ))}
            </ul>
        </>
    )
}