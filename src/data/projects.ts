export const projectsData = [
  {
    title: "News Website (Hacker News Aggregator)",
    stack: ["Python", "Flask", "Auth0", "SQL", "NGINX", "Gunicorn"],
    description:
      "Interactive news app with auth, profiles, and admin panel. Deployed with NGINX + Gunicorn; stores user prefs & interactions in SQL.",
    link: "https://example.com/news-app",
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
] as const
