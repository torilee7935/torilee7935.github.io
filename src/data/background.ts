export type Experience = {
  title: string;
  company: string;
  location?: string;
  dates: string;
  bullets: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    title: "Technical Account Manager",
    company: "Kinetix Solutions",
    dates: "May 2025 – Present",
    bullets: [
      "Main point of contact for clients; manage IT support needs and satisfaction.",
      "Customize and maintain Halo PSA (roles, permissions, KB structure, workflow automation).",
      "Develop and integrate AI chatbot with Halo API + Azure to streamline support and reduce tickets.",
      "Create internal docs and training to improve onboarding and efficiency.",
      "Identify automation opportunities from support trends and user behavior."
    ]
  },
  {
    title: "Program Assistant",
    company: "Florida State University International Programs · Valencia, Spain",
    dates: "Sep 2024 – Dec 2024",
    bullets: [
      "Mentored and supported students during cultural immersion in Valencia.",
      "Coordinated large group trips; kept clear comms with students and staff.",
      "Streamlined operations by organizing schedules and delivering announcements.",
      "Primary contact for student concerns; fostered a supportive environment."
    ]
  },
  {
    title: "Intern",
    company: "Siemens Med-Lab",
    dates: "Jul 2023 – Aug 2023",
    bullets: [
      "Collaborated with DevOps and learned SDLC practices.",
      "Participated in daily Scrum, sprint planning, retros, and stand-ups.",
      "Performed QA testing to ensure reliability and efficiency.",
      "Wrote/ran test cases and reported findings to dev teams."
    ]
  },
  {
    title: "Manager",
    company: "Red Ginger Asian Bistro Restaurant",
    dates: "Aug 2019 – May 2025 (Intermittent)",
    bullets: [
      "Worked with GM to implement policy and hit business goals.",
      "Oversaw staff performance; trained team and enforced procedures.",
      "Handled customer inquiries and escalations to ensure great experience."
    ]
  }
];

export const EDUCATION = {
  degree: "B.A. in Computer Science",
  org: "Florida State University",
  extra: "Mentor, Women in Computer Science",
};
