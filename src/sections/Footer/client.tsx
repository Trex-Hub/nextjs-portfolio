import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterClient() {
  return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Devendra. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/Trex-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5 hover:text-blue-500" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/devs-den/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5 hover:text-blue-500" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/problematicByte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5 hover:text-blue-500" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
  );
}
