import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Set users default theme to their preference
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    })

    // Toggle theme when changing
    const toggleTheme = () => {
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        // Change theme on click
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}
        >
            {" "}
            {isDarkMode ? ( // Add icons to specific theme page
                <Sun className="h-6 w-6 text-yellow-300 hover:text-yellow-600 transition-colors duration-200 cursor-pointer"/> 
            ) : ( 
                <Moon className="h-6 w-6 text-blue-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer"/>
            )}
        </button>
    );
};