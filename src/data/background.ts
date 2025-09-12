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
      "• Partner with clients pre- and post-sale to ensure smooth onboarding and long-term adoption",
      "• Build trusted relationships with executives to identify expansion opportunities and ensure renewals",
      "• Configure, customize, and train clients on Halo PSA, ensuring workflows, roles, and permissions are optimized",
      "• Designing and implementing automation workflows in Halo PSA to streamline client operations"
    ]
  },
  {
    title: "Program Assistant",
    company: "Florida State University International Programs · Valencia, Spain",
    dates: "Sep 2024 – Dec 2024",
    bullets: [
      "• Mentored and supported students during cultural immersion in Valencia",
      "• Assisted in coordination of large group trips maintaining clear communication with students and staff",
      "• Streamlined operations by organizing schedules and delivering announcements",
      "• Primary contact for student concerns while fostering a supportive inclusive environment"
    ]
  },
  {
    title: "DevOps Intern",
    company: "Siemens Med-Lab",
    dates: "Jul 2023 – Aug 2023",
    bullets: [
      "• Collaborated closely with the DevOps team to understand and assist in the software development lifecycle",
      "• Participated in daily Scrum meetings, contributing to sprint planning, retrospectives, and stand-ups, gaining valuable insights into Agile methodologies",
      "• Engaged in quality assurance testing, ensuring the reliability and efficiency of software products",
      "• Assisted in the development and execution of test cases and reported findings to the development team for improvements"
    ]
  },
  {
    title: "Manager / Bartender",
    company: "Red Ginger Asian Bistro Restaurant",
    dates: "August 2019 – May 2025 (Intermittent)",
    bullets: [
      "• Supported the General Manager in implementing policies and achieving business goals",
      "• Oversaw staff performance, provided training, and ensured adherence to restaurant standards",
      "• Handled customer inquiries and complaints with professionalism, fostering strong guest relationships",
      "• Delivered high-quality service as a bartender, creating a welcoming and memorable dining experience"
    ]
  }
];

export const EDUCATION = {
  degree: "B.A. in Computer Science",
  org: "Florida State University",
  extra: [
    "Mentor, Women in Computer Science",
  ]
};
