// Add pictures from projects to ../public/projects

import { ArrowRight, ExternalLink, Github } from "lucide-react"

const experience = [
    {
        id: 1,
        title: "Computer Science Peer Educator | Oregon State University",
        location_time: "Corvallis, Oregon | November 2025 - Current",
        description: `-Assisted 50+ students in understanding core concepts including data structures, algorithms, and object-oriented programming.\n
                    - Facilitated tutoring sessions for C++, C, Python, JavaScript, and SQL to help students debug code, optimize runtime complexity, and improve implementations of common data structure and algorithms, boosting code maintainability and readability.`,
        tags: ["Data Structures, Algorithms, Object Oriented Programming, Databases, Operating Systems, Python, C, C++, SQL"],
    },
    {
        id: 2,
        title: "Computer Science Learning Assistant | Oregon State University",
        location_time: "Corvallis, Oregon | September 2025 - Current",
        description: `- Engineered a predictive model using Python libraries NumPy, Pandas, and scikit-learn to forecast weekly and yearly fantasy football player performance, processing 20+ seasons of historical data and over 2,500+ NFL player statistics through an ETL pipeline.\n
                    - Cross-validated Random Forest, Linear Regression, and Gradient Boosting algorithms to reduce prediction error by 12-20%.\n
                    - Implemented a feature-engineering pipeline that generated 10+ performance metrics increasing predictive stability by 15%.`,
        tags: ["Python, NumPy, Pandas, Matplotlib, scikit-learn"],
    },
    {
        id: 3,
        title: "Data Analyst Intern | Wheelcog Consultants",
        location_time: "Remote | December 2024 - April 2025",
        description: `- Performed detailed data entry and vendor analysis on over 50 companies using Bonfire public sector procurement software.\n
                    - Designed a data-processing pipeline in Python using NumPy, Pandas, and Matplotlib that cleaned, aggregated, and visualized procurement records, generating 20+ visualizations that exposed trend patterns and supplier performance metrics for consultants.`,
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
                        <div className="p-6">
                        
                            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4"> {exp.location_time} </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {exp.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-muted-foreground text-sm mb-4">
                                {exp.description}
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