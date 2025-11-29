// Add pictures from projects to ../public/projects

import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Hika",
        description: `- Engineered a cross-platform gamified hiking application using React Native, NativeWind, TypeScript, and Expo for socialization.\n
                    - Designed and implemented a Firebase NoSQL database (Cloud Firestore + Auth) for real-time user data synchronization.\n
                    - Developed a data pipeline ingesting 10,000+ OpenStreetMap trails with Overpass API to power interactive tracking on Leaflet.`,
        image: "/projects/hika.png",
        tags: ["React Native, NativeWind, OpenStreetMap, Overpass API, Leaflet, Cloud Firestore, Firebase Auth, Expo"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Fantasy Football Prediction model",
        description: `- Engineered a predictive model using Python libraries NumPy, Pandas, and scikit-learn to forecast weekly and yearly fantasy football player performance, processing 20+ seasons of historical data and over 2,500+ NFL player statistics through an ETL pipeline.\n
                    - Cross-validated Random Forest, Linear Regression, and Gradient Boosting algorithms to reduce prediction error by 12-20%.\n
                    - Implemented a feature-engineering pipeline that generated 10+ performance metrics increasing predictive stability by 15%.`,
        image: "/projects/fantasyfootball.png",
        tags: ["Python, NumPy, Pandas, Matplotlib, scikit-learn"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Chart Creator Application",
        description: `- Built using SvelteKit/Svelte and QuickChart API to dynamically generate charts and data visualizations for user interactivity.\n
                - Ensured full feature reliability and robust application performance by designing a GitHub Actions CI/CD pipeline and 50+ comprehensive tests, including unit tests, integration tests, and end-to-end tests using Vitest and Playwright.\n
                - Utilized Agile/Scrum workflow practices and Jira task boards to organize sprint planning and feature implementation.`,
        image: "/projects/chartcreator.png",
        tags: ["Svelte/Sveltekit, Quickchart API, Github Actions, Vitest, Playwright, Agile Scrum, Jira"],
        demoUrl: "#",
        githubUrl: "#"
    },
]

export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured<span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img 
                                // src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.demoUrl} 
                                        target="_blank" 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    target="_blank"
                    href="https://github.com/bradyhanna12" 
                >
                    Check my Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}