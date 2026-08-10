import Sidebar from "@/components/Sidebar";
import Intro from "@/components/Intro";
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
        <div className="space-y-4">
          <Intro>
            I&apos;m a Software Engineer based in {profile.location}, specializing
            in backend development and AI integration. I spend most of my time in
            Python: building APIs with FastAPI, designing the SQL models behind
            them, and integrating LLMs and agentic AI workflows with LangChain.
          </Intro>
          <Intro delay={0.15}>
            I&apos;ve also worked on payments: a Finix integration for card
            tokenization and webhook reconciliation, plus Oracle
            FLEXCUBE&apos;s core banking modules earlier in my career.
          </Intro>
        </div>
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
