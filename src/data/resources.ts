export type Subject =
  | "Maths"
  | "Coding"
  | "Biology"
  | "Physics"
  | "Chemistry"
  | "Engineering";

export type ResourceType = "Video" | "Course" | "Book" | "Website" | "Community";

export type AgeGroup = "Under 10" | "10–13" | "14–17" | "18+";

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: ResourceType;
  subjects: Subject[];
  ageGroups: AgeGroup[];
  free: boolean;
  description: string;
}

export const SUBJECTS: Subject[] = [
  "Maths",
  "Coding",
  "Biology",
  "Physics",
  "Chemistry",
  "Engineering",
];

export const TYPES: ResourceType[] = [
  "Video",
  "Course",
  "Book",
  "Website",
  "Community",
];

export const AGE_GROUPS: AgeGroup[] = ["Under 10", "10–13", "14–17", "18+"];

export const RESOURCES: Resource[] = [
  {
    id: "khan-academy",
    title: "Khan Academy",
    url: "https://www.khanacademy.org/",
    type: "Course",
    subjects: ["Maths", "Biology", "Physics", "Chemistry"],
    ageGroups: ["Under 10", "10–13", "14–17", "18+"],
    free: true,
    description:
      "Free, world-class lessons across maths and science with practice exercises and progress tracking for every level.",
  },
  {
    id: "code-org",
    title: "Code.org",
    url: "https://code.org/",
    type: "Course",
    subjects: ["Coding"],
    ageGroups: ["Under 10", "10–13", "14–17"],
    free: true,
    description:
      "Hands-on coding courses and Hour of Code activities that make computer science fun and accessible for beginners.",
  },
  {
    id: "girls-who-code",
    title: "Girls Who Code",
    url: "https://girlswhocode.com/",
    type: "Community",
    subjects: ["Coding"],
    ageGroups: ["10–13", "14–17", "18+"],
    free: true,
    description:
      "Clubs, summer programs, and a global sisterhood working to close the gender gap in technology.",
  },
  {
    id: "crash-course",
    title: "Crash Course",
    url: "https://www.youtube.com/user/crashcourse",
    type: "Video",
    subjects: ["Biology", "Physics", "Chemistry", "Engineering"],
    ageGroups: ["14–17", "18+"],
    free: true,
    description:
      "Fast-paced, beautifully animated YouTube series covering biology, physics, chemistry and more.",
  },
  {
    id: "black-girls-code",
    title: "Black Girls CODE",
    url: "https://www.blackgirlscode.com/",
    type: "Community",
    subjects: ["Coding", "Engineering"],
    ageGroups: ["Under 10", "10–13", "14–17"],
    free: true,
    description:
      "Workshops and programs introducing girls of colour to technology and computer science in a supportive community.",
  },
  {
    id: "nasa-stem",
    title: "NASA STEM Engagement",
    url: "https://www.nasa.gov/learning-resources/",
    type: "Website",
    subjects: ["Physics", "Engineering", "Maths"],
    ageGroups: ["Under 10", "10–13", "14–17", "18+"],
    free: true,
    description:
      "Activities, challenges and real space-science projects straight from NASA to spark a love of exploration.",
  },
  {
    id: "scratch",
    title: "Scratch",
    url: "https://scratch.mit.edu/",
    type: "Website",
    subjects: ["Coding"],
    ageGroups: ["Under 10", "10–13"],
    free: true,
    description:
      "MIT's block-based programming playground where kids create games, stories and animations they can share.",
  },
  {
    id: "brilliant",
    title: "Brilliant",
    url: "https://brilliant.org/",
    type: "Course",
    subjects: ["Maths", "Physics", "Coding"],
    ageGroups: ["14–17", "18+"],
    free: false,
    description:
      "Interactive problem-solving courses in maths, science and computer science that build deep intuition.",
  },
  {
    id: "ck12",
    title: "CK-12 Foundation",
    url: "https://www.ck12.org/",
    type: "Website",
    subjects: ["Maths", "Biology", "Physics", "Chemistry"],
    ageGroups: ["10–13", "14–17"],
    free: true,
    description:
      "Free interactive textbooks, simulations and adaptive practice aligned to school science and maths curricula.",
  },
  {
    id: "national-geographic-kids",
    title: "National Geographic Kids",
    url: "https://kids.nationalgeographic.com/",
    type: "Website",
    subjects: ["Biology"],
    ageGroups: ["Under 10", "10–13"],
    free: true,
    description:
      "Wildlife facts, science articles and videos that turn curiosity about the natural world into discovery.",
  },
  {
    id: "phet",
    title: "PhET Interactive Simulations",
    url: "https://phet.colorado.edu/",
    type: "Website",
    subjects: ["Physics", "Chemistry", "Maths", "Biology"],
    ageGroups: ["10–13", "14–17", "18+"],
    free: true,
    description:
      "Free research-based science and maths simulations from the University of Colorado Boulder.",
  },
  {
    id: "edx-girls-stem",
    title: "edX STEM Courses",
    url: "https://www.edx.org/",
    type: "Course",
    subjects: ["Coding", "Engineering", "Maths", "Chemistry"],
    ageGroups: ["14–17", "18+"],
    free: false,
    description:
      "University-level courses from MIT, Harvard and more — audit many for free or earn a verified certificate.",
  },
  {
    id: "hidden-figures-book",
    title: "Hidden Figures (Young Readers' Edition)",
    url: "https://www.harpercollins.com/products/hidden-figures-young-readers-edition-margot-lee-shetterly",
    type: "Book",
    subjects: ["Maths", "Engineering", "Physics"],
    ageGroups: ["10–13", "14–17"],
    free: false,
    description:
      "The true story of the Black women mathematicians who helped launch America into space.",
  },
  {
    id: "minecraft-education",
    title: "Minecraft Education",
    url: "https://education.minecraft.net/",
    type: "Course",
    subjects: ["Coding", "Engineering", "Chemistry"],
    ageGroups: ["Under 10", "10–13", "14–17"],
    free: false,
    description:
      "Game-based learning that teaches coding, chemistry and problem-solving inside the world of Minecraft.",
  },
  {
    id: "amy-poehler-smart-girls",
    title: "Amy Poehler's Smart Girls",
    url: "https://amysmartgirls.com/",
    type: "Community",
    subjects: ["Coding", "Biology", "Engineering"],
    ageGroups: ["10–13", "14–17", "18+"],
    free: true,
    description:
      "An online community celebrating intelligence and curiosity, encouraging girls to be their authentic selves in STEM.",
  },
];
