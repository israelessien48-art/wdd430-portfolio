
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Task Reminder Mobile App",
    description:
      "A mobile application project for managing tasks and reminders.",
    technologies: ["Mobile Development", "Task Management"],
    link: "https://github.com/israelessien48-art/task-reminder-mobile-app",
  },
  {
    title: "SleepOutside E-Commerce Website",
    description:
      "An e-commerce web project that helped me practice building an online shopping experience.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/israelessien48-art/wdd330-sleepoutside",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          Welcome to My Portfolio
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          I am learning software development and building projects to improve
          my skills. Here are two projects I have worked on.
        </p>
      </section>

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        My Projects
      </h2>

      <ProjectList projects={projects} />
    </main>
  );
}
