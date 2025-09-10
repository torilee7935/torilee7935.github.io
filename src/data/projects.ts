export type Project = {
  title: string
  description: string
  link: string
  stack?: ReadonlyArray<string>
  imageUrl?: string
}

export const projectsData = [
  {
    title: "Online Portfolio Website",
    stack: ["React", "Typescript", "HTML", "CSS", "Vite", "GitHub Pages"],
    description: "My own personal portfolio website, showcasing my projects and skills. With a few little easter eggs, let me know if you can find them!",
    link: "https://github.com/torilee7935/torilee7935.github.io",
    imageUrl: "/images/portfolio.png",
  },
  {
    title: "Hacker News Website",
    stack: ["Python", "Flask", "Hosting", "Linode", "Ubuntu", "Auth0", "SQL", "NGINX", "Gunicorn"],
    description: "News website powered by the Hacker News API. Secure Auth0 sign-in lets users like/dislike stories, while an admin panel supports editing and deleting posts.",
    link: "https://github.com/torilee7935/python",
    imageUrl: "/images/newsApp.png",
  },
  {
    title: "Pixel Pummel",
    stack: ["Python", "Pygame", "Object-Oriented Programming", "Event Handling", "Game Design", "Sprite Animation"],
    description:
      "An arcade-style 8-bit street fighting game built with Pygame. Players control unique fighters with custom move sets, testing reflexes and strategy against opponents. Designed retro-style graphics, implemented collision detection, health bars, and game loop mechanics to deliver a nostalgic but polished gameplay experience.",
    link: "https://github.com/torilee7935/G7CapProj",
    imageUrl: "/images/pixelPummel.png",
  },
  {
    title: "Elevator Kernel Module",
    stack: [
      "C",
      "Linux Kernel Development",
      "Operating Systems",
      "System Calls",
      "Multithreading",
      "Synchronization",
      "Scheduling Algorithms"
    ],
    description:
      "A low-level systems project exploring Linux kernel programming. Implemented system-call tracing, a timer kernel module, and an elevator scheduling module using threads, mutexes, and linked lists. Gained hands-on experience in system calls, kernel modules, concurrency control, and custom scheduling algorithms.",
    link: "https://github.com/torilee7935/ElevatorKernel",
  },

  {
    title: ".NET MAUI Canvas Model",
    stack: ["C#", ".NET MAUI", "Cross-platform", "UI/UX"],
    description:
      "A cross-platform class management application inspired by Canvas. Built with .NET MAUI, it allows instructors to create classes, upload assignments, and manage student profiles, while students can enroll, access course materials, and track progress.",
    link: "https://github.com/torilee7935/CSharp",
  },
  {
    title: "Chess",
    stack: [ 
      "Java",   
      "Swing (GUI Development)",
      "Object-Oriented Programming",
      "Algorithm Design",
      "Game State Management",
      "User Input Validation",
    ],
    description:
      "A full chess game built in Java with GUI support. Implements all standard chess rules, including legal moves, captures, check, and checkmate. Features castling, pawn promotion, and invalid move validation with pop-up alerts, plus a user-friendly interface for selecting and moving pieces.",
    link: "https://github.com/torilee7935/JavaHWX",
  },
] satisfies ReadonlyArray<Project>
