import { ExternalLink } from "lucide-react";
import type { Resource } from "@/data/resources";
import { cn } from "@/lib/utils";

const typeBadgeStyles: Record<Resource["type"], string> = {
  Video: "bg-coral/12 text-coral",
  Course: "bg-primary/12 text-primary",
  Book: "bg-accent text-accent-foreground",
  Website: "bg-primary/10 text-primary",
  Community: "bg-coral/12 text-coral",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide",
            typeBadgeStyles[resource.type],
          )}
        >
          {resource.type}
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-bold",
            resource.free
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground",
          )}
        >
          {resource.free ? "Free" : "Paid"}
        </span>
      </div>

      <h3 className="mt-3 text-xl font-bold leading-snug">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-start gap-1.5 text-foreground decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          {resource.title}
          <ExternalLink className="mt-1.5 h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {resource.subjects.map((s) => (
          <span
            key={s}
            className="rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs font-medium text-muted-foreground">
        Ages: {resource.ageGroups.join(" · ")}
      </p>
    </article>
  );
}
