import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  SUBJECTS,
  TYPES,
  AGE_GROUPS,
  type Subject,
  type ResourceType,
  type AgeGroup,
} from "@/data/resources";
import { cn } from "@/lib/utils";

export interface Filters {
  subjects: Subject[];
  ageGroup: AgeGroup | "all";
  type: ResourceType | "all";
  freeOnly: boolean;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export function FilterBar({ filters, onChange }: FilterBarProps) {
  const toggleSubject = (subject: Subject) => {
    const subjects = filters.subjects.includes(subject)
      ? filters.subjects.filter((s) => s !== subject)
      : [...filters.subjects, subject];
    onChange({ ...filters, subjects });
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm font-bold text-foreground">Subject</span>
        {SUBJECTS.map((subject) => {
          const active = filters.subjects.includes(subject);
          return (
            <button
              key={subject}
              type="button"
              onClick={() => toggleSubject(subject)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-all",
                active
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {subject}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="flex flex-col gap-1.5 sm:w-44">
          <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Age Group
          </label>
          <Select
            value={filters.ageGroup}
            onValueChange={(v) =>
              onChange({ ...filters, ageGroup: v as AgeGroup | "all" })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All ages</SelectItem>
              {AGE_GROUPS.map((a) => (
                <SelectItem key={a} value={a}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5 sm:w-44">
          <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Type
          </label>
          <Select
            value={filters.type}
            onValueChange={(v) =>
              onChange({ ...filters, type: v as ResourceType | "all" })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              {TYPES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-3 sm:ml-auto sm:self-end sm:pb-1.5">
          <Switch
            id="free-only"
            checked={filters.freeOnly}
            onCheckedChange={(checked) =>
              onChange({ ...filters, freeOnly: checked })
            }
          />
          <label
            htmlFor="free-only"
            className="cursor-pointer text-sm font-bold text-foreground"
          >
            Free only
          </label>
        </div>
      </div>
    </div>
  );
}
