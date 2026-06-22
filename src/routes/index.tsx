import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, Sparkles, X } from "lucide-react";
import { RESOURCES } from "@/data/resources";
import { ResourceCard } from "@/components/ResourceCard";
import { FilterBar, type Filters } from "@/components/FilterBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StemHer Library — World-class STEM resources for girls" },
      {
        name: "description",
        content:
          "A free, searchable library of world-class STEM resources for girls aged 8–18. Filter by subject, age, type and find videos, courses, books and communities.",
      },
      { property: "og:title", content: "StemHer Library" },
      {
        property: "og:description",
        content:
          "Every girl deserves a world-class STEM education. Explore curated STEM resources for girls aged 8–18.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const DEFAULT_FILTERS: Filters = {
  subjects: [],
  ageGroup: "all",
  type: "all",
  freeOnly: false,
};

function Index() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter((r) => {
      if (q) {
        const haystack =
          `${r.title} ${r.description} ${r.subjects.join(" ")} ${r.type}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (
        filters.subjects.length > 0 &&
        !filters.subjects.some((s) => r.subjects.includes(s))
      )
        return false;
      if (filters.ageGroup !== "all" && !r.ageGroups.includes(filters.ageGroup))
        return false;
      if (filters.type !== "all" && r.type !== filters.type) return false;
      if (filters.freeOnly && !r.free) return false;
      return true;
    });
  }, [query, filters]);

  const hasActiveFilters =
    query.trim() !== "" ||
    filters.subjects.length > 0 ||
    filters.ageGroup !== "all" ||
    filters.type !== "all" ||
    filters.freeOnly;

  const reset = () => {
    setQuery("");
    setFilters(DEFAULT_FILTERS);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold backdrop-blur">
            <Sparkles className="h-4 w-4" />
            StemHer Library
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Every girl deserves a world-class STEM education
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            Discover curated videos, courses, books and communities to spark
            curiosity in maths, coding and science — for ages 8 to 18.
          </p>

          <div className="mt-8 max-w-xl">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources, subjects, topics…"
                className="w-full rounded-full border-0 bg-background py-4 pl-12 pr-4 text-base text-foreground shadow-lg outline-none ring-2 ring-transparent transition focus:ring-coral"
              />
            </label>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-5 py-8 sm:py-10">
        <FilterBar filters={filters} onChange={setFilters} />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-muted-foreground">
            Showing{" "}
            <span className="font-bold text-primary">{results.length}</span> of{" "}
            <span className="font-bold text-foreground">{RESOURCES.length}</span>{" "}
            resources
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-coral/40 hover:text-coral"
            >
              <X className="h-4 w-4" />
              Clear filters
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-lg font-bold text-foreground">
              No resources match your filters
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try removing a filter or searching for something else.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Reset all filters
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-border py-8">
        <p className="mx-auto max-w-6xl px-5 text-center text-sm text-muted-foreground">
          StemHer Library · Curated STEM resources for girls aged 8–18
        </p>
      </footer>
    </div>
  );
}
