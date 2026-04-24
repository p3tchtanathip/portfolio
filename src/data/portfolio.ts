import type { Competition, Education, Experience, PersonalInfo, Project, SkillCategory } from "@/models/portfolio";
import profile1 from "@/assets/profile_1.jpg";
import profile2 from "@/assets/profile_2.jpg";
import apalImage1 from "@/assets/apal_1.png";
import apalImage2 from "@/assets/apal_2.png";
import apalImage3 from "@/assets/apal_3.png";
import apalImage4 from "@/assets/apal_4.png";
import eventgenda1 from "@/assets/eventgenda_1.png";
import eventgenda2 from "@/assets/eventgenda_2.png";
import eventgenda3 from "@/assets/eventgenda_3.png";
import tdlsImage from "@/assets/tdls.png";

export const personalInfo: PersonalInfo = {
  name: "Tanathip Pona",
  title: "Software Developer",
  bio: "Fourth year Computer Engineering student at KMITL specializing in .NET backend development. Hands-on experience building production-grade systems. Also capable of full-stack development with React. Detail-oriented and eager to grow in a collaborative engineering team.",
  email: "tanathip.pona@gmail.com",
  github: "https://github.com/p3tchtanathip",
  linkedin: "https://linkedin.com/in/tanathip-pona-289589192",
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
    description: "Built multi-level approval workflows with complex business rules, developed reusable reporting modules, and optimized large-scale data queries using SQL Stored Procedures.",
  },
  {
    role: "Freelance Developer",
    company: "AISIN AUTOPARTS (THAILAND) Co., Ltd.",
    period: "Sep 2025 - Feb 2026",
    description: "Built a real-time monitoring dashboard in .NET (WinForms) integrating industrial controllers to stream production data.",
  },
];

export const projects: Project[] = [
  {
    title: "Adaptive Programming Lab Management and Interactive Learning Platform",
    description: "Built a real-time interactive learning platform with WebSocket supporting live engagement features. Designed an realtime quiz system with configurable difficulty and timing.",
    role: "Full-stack Developer",
    period: "2025 - 2026",
    tags: ["React (TypeScript)", "Go", "WebSocket", "PostgreSQL", "Redis", "MinIO", "Kafka"],
    images: [apalImage1, apalImage2, apalImage3, apalImage4]
  },
  {
    title: "Movie2Free",
    description: "Developed a web app enabling users to search for friends and schedule movie-watching sessions together, with a real-time group chat feature.",
    role: "Full-stack Developer",
    period: "2024",
    tags: ["C#", "ASP.NET Core MVC", "SignalR"],
    images: [""]
  },
  {
    title: "Eventgenda",
    description: "Built a full-stack web platform for hackathon event management, including participant registration, event listing, and a structured funding system.",
    role: "Back-end Developer",
    period: "2024",
    tags: ["Node.js", "Express.js", "MongoDB"],
    images: [eventgenda1, eventgenda2, eventgenda3]
  },
  {
    title: "TDLS Monitor",
    description: "Built a real-time monitoring dashboard in .NET (WinForms) integrating industrial controllers to stream production data. Designed data layer with SQL Server and Entity Framework Core for traceability and quality auditing.",
    role: "Developer",
    period: "2025",
    tags: ["C#", ".NET WinForms", "SQL Server", "EF Core"],
    images: [tdlsImage]
  },
];

export const competitions: Competition[] = [
  {
    title: "ICPC Thailand National Competition",
    description: "Represented Computer Engineering at KMITL in the ICPC Thailand National Competition.",
    period: "Sep 2024"
  },
  {
    title: "Top 20 Finalist, Digital Youth Network Hackathon",
    description: "Designed a web application prototype (Figma) addressing cyberbullying, enabling online mental health consultation.",
    period: "Aug 2023"
  }
]

export const skills: SkillCategory[] = [
  { category: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "MUI"] },
  { category: "Backend", items: ["ASP.NET Core", "Node.js", "Express.js", "Entity Framework", "REST APIs", "WebSocket", "Redis", "MinIO", "Kafka"] },
  { category: "Database", items: ["SQL Server", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "Grafana k6", "Figma"] },
];