
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mb-3 text-slate-700">{description}</p>

      <p className="text-sm text-slate-600">
        <span className="font-semibold">Technologies:</span>{" "}
        {technologies.join(", ")}
      </p>

      {link ? (
        <p className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-700 underline underline-offset-4"
          >
            View project
          </a>
        </p>
      ) : null}
    </article>
  );
}
