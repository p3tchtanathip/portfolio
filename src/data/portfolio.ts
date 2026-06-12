import type { Activity, Education, Experience, PersonalInfo, Project, SkillCategory } from "@/models/portfolio";
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
import versus1 from "@/assets/versus_1.png";
import versus2 from "@/assets/versus_2.png";
import versus3 from "@/assets/versus_3.png";

export const roles = [
  "Software Developer",
  "Software Engineer",
  ".NET Developer",
  "Back End Developer",
  "Full-stack Developer",
]

export const personalInfo: PersonalInfo = {
  name: "Tanathip Pona",
  title: "Software Developer/ Backend Developer",
  bio: "Fresh Computer Engineering graduate from KMITL with hands-on experience building production systems in C# and ASP.NET Core. Comfortable across the stack with React on the frontend. Have worked on real projects from internship through freelance.",
  email: "tanathip.pona@gmail.com",
  github: "https://github.com/p3tchtanathip",
  linkedin: "https://linkedin.com/in/tanathip-pona",
  resume: "https://p3tchtanathip.github.io/resume",
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
    description: ["Built an approval workflow for the Rubber Authority of Thailand's audit platform, replacing a paper-based process with automatic routing to the next approver", "Developed REST APIs and stored procedures for complex multi-table queries across 3 production enterprise systems"]
  },
  {
    role: "Freelance",
    company: "AISIN AUTOPARTS (THAILAND) Co., Ltd.",
    period: "Sep 2025 - Feb 2026",
    description: ["Designed and shipped a manufacturing monitoring dashboard aggregating data from 5+ nut-tightening controllers per line across 2 factory sites", "Implemented auto-reconnect with retry and heartbeat logic, eliminating data loss during interruptions"]
  },
];

export const projects: Project[] = [
  {
    title: "Versus",
    description: "Versus is a crowd-sourced ranking platform where users battle-vote across four categories (movies, series, music, and sports) to build tier lists shaped by collective opinion. It uses a smart pairing algorithm to surface the most meaningful matchups first, so rankings converge faster the more people play. Content is pulled live from TMDB, Last.fm, and TheSportsDB, and users need no account since identity is handled through browser session tokens. The more people vote, the more accurate the rankings get.",
    role: "Full-stack Developer",
    period: "2026",
    tags: ["ASP.NET Core", "React", "TypeScript", "SQL Server", "Docker", "Azure"],
    images: [versus1, versus2, versus3]
  },
  {
    title: "MicroWallet",
    description: "Developed a multi-currency digital wallet backend using CQRS, idempotent transactions, and optimistic concurrency control via PostgreSQL with Redis-cached exchange rates. Integrated an LLM-powered financial assistant (Groq/Llama 3.3) that auto-categorizes transactions and answers natural-language spending queries, with rate limiting and prompt-injection safeguards.",
    role: "Back-end Developer",
    period: "2026",
    tags: ["ASP.NET Core", "PostgreSQL", "Redis", "xUnit", "Moq", "Google Cloud Platform (GCP)"],
    images: [walletImage1, walletImage2]
  },
  {
    title: "Adaptive Programming Lab Management and Interactive Learning Platform (APAL)",
    description: "Built a full-stack automated grading platform that processes submissions through Kafka and returns grades via WebSocket, with real-time classroom polls for live student interaction. Designed a hybrid RBAC/ABAC with org/team-level access control, pilot with 25+ students at KMITL.",
    role: "Full-stack Developer",
    period: "2025 - 2026",
    tags: ["React (TypeScript)", "Go", "WebSocket", "PostgreSQL", "Redis", "MinIO", "Kafka"],
    images: [apalImage1, apalImage2, apalImage3, apalImage4]
  },
  {
    title: "Movie2Free",
    description: "Built a real-time collaborative web app for coordinating movie plans with integrated group chat. Implemented SignalR-based chat rooms with automatic expiration managed by a background service.",
    role: "Full-stack Developer",
    period: "2024",
    tags: ["C#", "ASP.NET Core MVC", "SignalR", "PostgreSQL"],
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

export const activities: Activity[] = [
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
    title: "AI Thailand Hackathon 2024 - AI Cooking",
    description: "Explored machine translation for Thai dialects by fine-tuning Typhoon (Thai LLM) on a curated corpus using the LANTA supercomputer",
    period: "Jun 2024"
  },
  {
    title: "42 Bangkok × AWS Hackathon - Future x Smart Hub, Smart Technology using Al",
    description: "Researched and designed a concept for a Smart Football Glasses Assistant using OpenCV and YOLO for real-time player and space detection",
    period: "August 2023"
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
  { category: "Tools", items: ["Git", "Docker", "Google Cloud Platform (GCP)", "Figma"] },
];
