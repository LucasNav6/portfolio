// SocialButtons.jsx
import React from "react";
import { Button } from "../atoms/button"; // componente React
import LinkedIn from "@/icons/Linkedin";
import GitHub from "@/icons/Github";


export default function SocialButtons() {
  return (
    <div className="absolute w-full flex gap-4 justify-center pt-5">
        <Button asChild variant="outline" className="dark:bg-background/80 w-32" aria-label="linkedin link">
          <a href="https://www.linkedin.com/in/lucasnav/" aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-normal">
            <LinkedIn className="size-4" />
            LinkedIn
          </a>
        </Button>

      <Button asChild variant="outline" className="dark:bg-background/80 w-32" aria-label="github link">
        <a href="https://github.com/LucasNav6" aria-label="github" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-normal">
          <GitHub className="size-4" />
          GitHub
        </a>
      </Button>
    </div>
  );
}
