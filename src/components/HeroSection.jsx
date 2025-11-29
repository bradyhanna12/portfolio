import { ArrowDown } from "lucide-react"

export const HeroSection = () => {

    return <section 
                id="hero" 
                className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >

                {/* Background images */}
                <img
                    src="/images/me1.jpeg"
                    alt="Background 1"
                    className="absolute top-15 left-5 w-72 h-72 opacity-33 z-0 object-cover rounded-full"
                />
                <img
                    src="/images/me2.jpeg"
                    alt="Background 2"
                    className="absolute hidden md:block top-15 right-45 w-80 h-80 opacity-33 z-0 object-cover rounded-full"
                />
                <img
                    src="/images/me3.jpeg"
                    alt="Background 3"
                    className="absolute bottom-5 left-45 w-80 h-80 opacity-33 z-0 object-cover rounded-full"
                />
                <img
                    src="/images/me4.jpeg"
                    alt="Background 4"
                    className="absolute hidden md:block bottom-10 right-10 w-72 h-72 opacity-33 z-0 object-cover rounded-full"
                />

                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                                {" "} 
                                Brady
                            </span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-2"> 
                                {" "} 
                                Hanna
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4"> 
                            I create full-stack software using modern technologies. 
                        </p>

                        <div>
                            <a href="#experience" className="cosmic-button opacity-0 animate-fade-in-delay-4">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </section>
}