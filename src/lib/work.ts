export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
  current?: boolean;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Meta",
    role: "Software Engineer",
    period: "Aug 2025 – Present",
    current: true,
    description: [
      "Building AI infrastructure for Meta's ads systems — architecting the systems that power ad delivery and developing tooling to measure, model, and improve infrastructure efficiency at massive scale.",
    ],
  },
  {
    company: "Meta",
    role: "Software Engineer Intern",
    period: "Jun 2024 – Aug 2024",
    description: [
      "Built a new platform for businesses to configure LLM-based AI agents to fully automate customer service on Messenger and WhatsApp — using Hack, React, GraphQL, and the Ent framework to ship a scalable, multi-threaded system with 2x speedup across billions of users.",
      "Overhauled the platform's caching infrastructure and integrated it into Messenger's AI-driven response systems, enabling efficient high-frequency messaging and real-time RAG from business product catalogs.",
    ],
  },
  {
    company: "Apple",
    role: "Software Engineer Intern",
    period: "May 2023 – Aug 2023",
    description: [
      "Built a Vision Pro application using Swift, PyTorch, and OpenCV to extract and visualize user discomfort metrics via gaussian probability distributions and Bayesian inference. Fine-tuned YOLO, ResNet, and 25+ CV algorithms for real-time object classification.",
      "Achieved a 3x speedup via Image Pyramid analysis and preprocessing techniques (gaussian filtering, contour detection, edge detection). Shipped to production — a cornerstone in workflows across 10+ teams at Apple.",
    ],
  },
  {
    company: "Alecto AI",
    role: "Software Engineer Intern",
    period: "Jan 2023 – May 2023",
    description: [
      "Architected and built the startup's real-time messaging and notification infrastructure from scratch.",
      "Optimized the facial recognition pipeline and overhauled the admin dashboard, improving system performance and operational visibility.",
    ],
  },
  {
    company: "Sacramento Municipal Utilities District",
    role: "Software Engineer Intern",
    period: "Jun 2022 – Sep 2022",
    description: [
      "Built a meter data management system in Flask to handle smart meter allocation across residential and commercial properties.",
      "Integrated the backends and frontends of enterprise energy trading applications using Java Spring Boot and SQL Server.",
    ],
  },
];
