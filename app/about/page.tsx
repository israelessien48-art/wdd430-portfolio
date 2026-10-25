
import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          About Me
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          I am a software development student working to improve my
          programming skills through practical projects. I enjoy learning how
          websites work and building useful applications. My goal is to keep
          learning and grow into a professional software developer.
        </p>
      </section>

      <SkillCard
        title="My Technical Skills"
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "Git",
          "GitHub",
          "React",
          "Next.js",
          "TypeScript",
        ]}
      />
    </main>
  );
}
