import type { Competition, Education, Experience, PersonalInfo, Project, SkillCategory } from "@/models/portfolio";
import profile1 from "@/assets/profile_1.png";
import profile2 from "@/assets/profile_2.jpg";
import apalImage1 from "@/assets/apal_1.png";
import apalImage2 from "@/assets/apal_2.png";
import apalImage3 from "@/assets/apal_3.png";
import apalImage4 from "@/assets/apal_4.png";
import movieImage1 from "@/assets/movie_1.png";
import movieImage2 from "@/assets/movie_2.png";
import eventgenda1 from "@/assets/eventgenda_1.png";
import eventgenda2 from "@/assets/eventgenda_2.png";
import eventgenda3 from "@/assets/eventgenda_3.png";
import tdlsImage from "@/assets/tdls.png";
import walletImage1 from "@/assets/wallet_1.png";
import walletImage2 from "@/assets/wallet_2.png";

export const personalInfo: PersonalInfo = {
  name: "Tanathip Pona",
  title: "Software Developer/ Backend Developer",
  bio: "Fourth year Computer Engineering student at KMITL specializing in .NET backend development. Hands-on experience building production-grade systems. Also capable of full-stack development with React. Detail-oriented and eager to grow in a collaborative engineering team.",
  email: "tanathip.pona@gmail.com",
  github: "https://github.com/p3tchtanathip",
  linkedin: "https://linkedin.com/in/tanathip-pona",
  resume: "https://p3tchtanathip.github.io/resume/tanathip_resume.pdf",
  profiles: [profile1, profile2],
  location: "Bangkok, Thailand",
};

export const educations: Education[] = [
  {
    institution: "King mongkut's institute of technology ladkrabang",
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    period: "2022 - 2026",
    gpa: 3.11
  },
  {
    institution: "The Demonstration School of Bansomdejchaopraya Rajabhat University",
    degree: "High School Diploma",
    field: "Math - Science",
    period: "2016 - 2022",
    gpa: 3.60
  }
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Stream I.T. Consulting Ltd.",
    period: "Apr 2025 - Aug 2025",
    description: ["Contributed to 3 production enterprise systems across the full SDLC, including an internal audit platform for the Rubber Authority of Thailand", "Built a 3-5 level approval workflow with automatic routing, replacing a manual paper-based process", "Wrote stored procedures for complex multi-table queries with conditional logic"]
  },
  {
    role: "Freelance",
    company: "AISIN AUTOPARTS (THAILAND) Co., Ltd.",
    period: "Sep 2025 - Feb 2026",
    description: ["Designed and shipped a high-performance manufacturing monitoring dashboard aggregating data from 5+ nut-tightening controllers per line across 2 factory sites", "Implemented auto-reconnect with retry and heartbeat logic, eliminating data loss during interruptions"]
  },
];

export const projects: Project[] = [
  {
    title: "Adaptive Programming Lab Management and Interactive Learning Platform (APAL)",
    description: "Built an automated grading platform with real-time feedback and classroom polls, a hybrid RBAC/ABAC permission model, and load testing via Grafana k6 before a live pilot with 25+ students at KMITL.",
    role: "Full-stack Developer",
    period: "2025 - 2026",
    tags: ["React (TypeScript)", "Go", "WebSocket", "PostgreSQL", "Redis", "MinIO", "Kafka"],
    images: [apalImage1, apalImage2, apalImage3, apalImage4]
  },
  {
    title: "MicroWallet",
    description: " Multi-currency wallet with AI-driven transaction categorization and a financial assistant. Built with Clean Architecture and CQRS, deployed on Kubernetes (k3s) via Docker and GCE with Redis caching for performance at scale.",
    role: "Backend Developer",
    period: "2026",
    tags: ["ASP.NET Core", "PostgreSQL", "Redis", "xUnit", "Moq", "Google Cloud Engine (GCE)", "Kubernetes"],
    images: [walletImage1, walletImage2]
  },
  {
    title: "Movie2Free",
    description: "Developed a web app enabling users to search for friends and schedule movie-watching sessions together, with a real-time group chat feature.",
    role: "Full-stack Developer",
    period: "2024",
    tags: ["C#", "ASP.NET Core MVC", "SignalR"],
    images: [movieImage1, movieImage2]
  },
  {
    title: "Eventgenda",
    description: "Built a full-stack web platform for hackathon event management, including participant registration, event listing, and a structured funding system.",
    role: "Back-end Developer",
    period: "2024",
    tags: ["Next.js", "Express.js", "MongoDB"],
    images: [eventgenda1, eventgenda2, eventgenda3]
  },
  {
    title: "TDLS Monitor",
    description: "Developed a machine monitoring dashboard using .NET (WinForms) and AntdUI, integrating multiple nut-tightening controllers to collect and display torque and angle production data. Designed data storage with SQL Server and Entity Framework Core, enabling status tracking and historical traceability for quality control in an automated assembly line.",
    role: "Developer",
    period: "2025",
    tags: ["C#", ".NET WinForms", "SQL Server", "EF Core"],
    images: [tdlsImage]
  },
];

export const competitions: Competition[] = [
  {
    title: "1st Place Winner - Tech Tournament Day 2026 #1",
    description: "Demonstrated strong problem-solving skills by solving software engineering and algorithmic challenges judged by engineers from Bangkok Bank under time pressure",
    period: "Apr 2026"
  },
  {
    title: "ICPC Thailand National Competition Contest",
    description: "Represented KMITL Computer Engineering in Thailand's ICPC regional programming contest",
    period: "Sep 2024"
  },
  {
    title: "Hackathon by Digital Youth Network",
    description: "Develop my public speaking skills through pitching practice. I have experience in designing prototypes using Figma in grand final round.",
    period: "August 2023"
  },
]

export const skills: SkillCategory[] = [
  { category: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "MUI"] },
  { category: "Backend", items: ["C#", "ASP.NET Core", "Go", "Node.js", "Express.js", "Entity Framework", "REST APIs", "SignalR", "WebSocket", "Redis", "MinIO", "Kafka"] },
  { category: "Database", items: ["SQL Server", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "Kubernetes", "Google Cloud Platform (GCP)", "Grafana k6", "Figma"] },
];
