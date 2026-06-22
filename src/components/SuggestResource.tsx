import { useState } from "react";
import { CheckCircle2, Lightbulb } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUBJECTS, TYPES, AGE_GROUPS } from "@/data/resources";

export function SuggestResource() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [type, setType] = useState("");

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      // reset after the dialog finishes closing
      setTimeout(() => {
        setSubmitted(false);
        setSubject("");
        setAgeGroup("");
        setType("");
      }, 200);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-coral/12 px-3.5 py-1.5 text-sm font-semibold text-coral">
          <Lightbulb className="h-4 w-4" />
          Help us grow
        </div>
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          Know a great STEM resource?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
          Share a video, course, book, website or community that inspires girls
          in STEM — we review every suggestion.
        </p>

        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-base font-bold text-coral-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:bg-coral/90"
            >
              <Lightbulb className="h-5 w-5" />
              Suggest a resource
            </button>
          </DialogTrigger>

          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-4 text-2xl font-black">Suggestion received</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks! We&apos;ll review your suggestion soon.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenChange(false)}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black">
                    Suggest a resource
                  </DialogTitle>
                  <DialogDescription>
                    Tell us about a STEM resource we should add to the library.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="mt-2 space-y-4 text-left">
                  <Field label="Resource name" htmlFor="sr-name">
                    <input
                      id="sr-name"
                      required
                      placeholder="e.g. Khan Academy"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-coral transition focus:ring-2"
                    />
                  </Field>

                  <Field label="URL" htmlFor="sr-url">
                    <input
                      id="sr-url"
                      type="url"
                      required
                      placeholder="https://…"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-coral transition focus:ring-2"
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <Field label="Subject" htmlFor="sr-subject">
                      <Select value={subject} onValueChange={setSubject} required>
                        <SelectTrigger id="sr-subject">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {SUBJECTS.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field label="Age group" htmlFor="sr-age">
                      <Select value={ageGroup} onValueChange={setAgeGroup} required>
                        <SelectTrigger id="sr-age">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {AGE_GROUPS.map((a) => (
                            <SelectItem key={a} value={a}>
                              {a}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field label="Type" htmlFor="sr-type">
                      <Select value={type} onValueChange={setType} required>
                        <SelectTrigger id="sr-type">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {TYPES.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Why you recommend it" htmlFor="sr-why">
                    <textarea
                      id="sr-why"
                      required
                      rows={4}
                      placeholder="What makes this resource great for girls in STEM?"
                      className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-coral transition focus:ring-2"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-coral px-6 py-3 text-base font-bold text-coral-foreground transition-colors hover:bg-coral/90"
                  >
                    Submit suggestion
                  </button>
                </form>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-bold text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
