export type Project = {
  title: string
  description: string
  link: string
  stack?: ReadonlyArray<string>
  imageUrl?: string
}

export const projectsData = [
  {
    title: "Hacker News Website",
    stack: ["Python", "Flask", "Auth0", "SQL", "NGINX", "Gunicorn"],
    description: "News website powered by the Hacker News API. Secure Auth0 sign-in lets users like/dislike stories, while an admin panel supports editing and deleting posts.",
    link: "https://github.com/torilee7935/python",
    imageUrl: "/images/newsApp.png",
  },
  {
    title: ".NET MAUI Canvas Model",
    stack: ["C#", ".NET MAUI", "Cross‑platform"],
    description:
      "Student/class management demo: enroll, add files, manage profiles with a clean, accessible UI.",
    link: "https://example.com/canvas-model",
  },
  {
    title: "Azure Blob → HaloPSA KB Auto‑Sync",
    stack: ["Azure", "Logic Apps", "HaloPSA", "APIs"],
    description:
      "Automation that creates/updates HaloPSA KB articles when docs land in Blob Storage.",
    link: "https://example.com/halo-kb-sync",
  },
  {
    title: "Zendesk ↔ HaloPSA Ticket Sync",
    stack: ["Node.js", "Webhooks", "REST"],
    description:
      "Bidirectional sync prototype for comments, attachments, and status across systems.",
    link: "https://example.com/zendesk-halo-sync",
  },
] satisfies ReadonlyArray<Project>
