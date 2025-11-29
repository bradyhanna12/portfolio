import { ArrowDown } from "lucide-react"

export const HeroSection = () => {

    return <section 
                id="hero" 
                className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >

                {/* Background images */}
                <div className="absolute inset-0 z-0 grid grid-cols-2 grid-rows-2 p-8 opacity-66">
                    <img src="/images/selfie_viet.jpeg" alt="Background 1" className="hidden md:block w-full h-full object-cover" style={{ objectPosition: "40% 50%" }}/>
                    <img src="/images/me_oahu.jpeg" alt="Background 2" className="hidden md:block w-full h-full object-cover "  style={{ objectPosition: "40% 60%" }} />
                    <img src="/images/suits.jpeg" alt="Background 3" className="hidden md:block w-full h-full object-cover object-left"  style={{ objectPosition: "40% 50%" }}/>
                    <img src="/images/htc.jpeg" alt="Background 4" className="hidden md:block w-full h-full object-cover" style={{ objectPosition: "40% 50%" }}/>
                </div>

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
                            I am a software engineer with an interest in AI/ML and Data Science. 
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