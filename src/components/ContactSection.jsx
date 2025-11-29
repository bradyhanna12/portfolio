import { Linkedin, Mail, Phone, Map, Instagram, SendIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export const ContactSection = () => {
    return (
        <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project idea or want to learn more about me? Feel free to reach out.
                </p>

                <div className="flex flex-col items-center text-left">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="flex space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:bradyhanna04@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        bradyhanna04@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="tel:+15034491310" className="text-muted-foreground hover:text-primary transition-colors">
                                        +1 (503) 449-1310
                                    </a>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Map className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Portland, OR, United States of America
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/brady-hanna-8753902a8/" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/bradyhannaa/?hl=en" target="_blank">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
)}