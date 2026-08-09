import Sidebar from "@/components/Sidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl lg:flex">
      <Sidebar />
      <main className="flex-1 px-6 py-10 lg:ml-[380px] lg:max-w-2xl lg:px-12 lg:py-16">
        <p className="text-muted text-sm leading-relaxed">
          I&apos;m a backend developer based in {profile.location}. I spend most
          of my time in Python: building APIs with FastAPI, designing the SQL
          models behind them, and wiring up the background workers and AI
          features that sit next to them.
        </p>
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
