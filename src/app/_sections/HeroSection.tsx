import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex flex-col min-h-screen mt-24 ">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
          Hello Visitor, I&apos;m{" "}
          <span className="text-blue-500">Devendra</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-500">
          A hands-on programmer and tech geek with a knack for building secure,
          scalable systems that just work —sometimes like a symphony, sometimes
          like a riddle.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/_.stillbones._/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://x.com/problematicByte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/devs-den/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/Trex-Hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
