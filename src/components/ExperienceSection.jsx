// Add pictures from projects to ../public/projects

import { ArrowRight, ExternalLink, Github } from "lucide-react"

const experience = [
    {
        id: 1,
        title: `Computer Science Peer Educator
                Oregon State University`,
        location_time: "Corvallis, Oregon | November 2025 - Current",
        description: `-Assisted 50+ students in understanding core concepts including data structures, algorithms, and object-oriented programming.
                    - Facilitated tutoring sessions for C++, C, Python, JavaScript, and SQL to help students debug code, optimize runtime complexity, and improve implementations of common data structure and algorithms, boosting code maintainability and readability.`,
        image: "/experience/oregonstate.png",
        tags: ["Data Structures, Algorithms, Object Oriented Programming, Databases, Operating Systems, Python, C, C++, SQL"],
    },
    {
        id: 2,
        title: `Computer Science Learning Assistant
                Oregon State University`,
        location_time: "Corvallis, Oregon | September 2025 - Current",
        description: `- Assisted instructor in grading 200+ assignments, labs, and exams for Python courses focused on object-oriented programming.
                    - Led 50+ office hours and 100+ lab hours, providing support for over 100 students on OOP concepts and debugging techniques.`,
        image: "/experience/oregonstate.png",
        tags: ["Python, NumPy, Pandas, Matplotlib, scikit-learn"],
    },
    {
        id: 3,
        title: `Data Analyst Intern
                Wheelcog Consultants`,
        location_time: "Remote | December 2024 - April 2025",
        description: `- Performed detailed data entry and vendor analysis on over 50 companies using Bonfire public sector procurement software.
                    - Designed a data-processing pipeline in Python using NumPy, Pandas, and Matplotlib that cleaned, aggregated, and visualized procurement records, generating 20+ visualizations that exposed trend patterns and supplier performance metrics for consultants.`,
        image: "/experience/wheelcog.png",
        tags: ["Python, NumPy, Pandas, Matplotlib, Bonfire"],
    },
]

export const ExperienceSection = () => {

    return <section id="experience" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Work<span className="text-primary"> Experience</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experience.map((exp, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={exp.image} 
                                alt={exp.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-1">
                                {exp.title.split("\n").map((line, i) => (
                                    <span key={i}>
                                    {line}
                                    <br />
                                    </span>
                                ))}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {exp.location_time} </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {exp.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-muted-foreground text-sm mb-4">
                                {exp.description.split("\n").map((line, i) => (
                                    <span key={i}>
                                    {line}
                                    <br />
                                    </span>
                                ))}
                            </p>
                            <div className="flex justify-between items-center">
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    target="_blank"
                    href="https://linkedin.com/in/bradyhanna12" 
                >
                    Check my LinkedIn <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}