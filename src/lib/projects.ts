export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  year: number;
  proprietary?: boolean;
}

export const projects: Project[] = [
  {
    title: "Neural Style Transfer",
    slug: "neural-style-transfer",
    description:
      "Implementation of Gatys et al.'s 'A Neural Algorithm of Artistic Style'. Transfers the artistic style of one image onto another using CNNs.",
    tags: ["Python", "PyTorch", "Computer Vision"],
    github: "https://github.com/amolbudhiraja/styletransfer",
    featured: true,
    year: 2024,
  },
  {
    title: "Neural Radiance Fields (NeRF)",
    slug: "neural-radiance-fields",
    description:
      "Implementation of the original NeRF paper for novel view synthesis. Reconstructs 3D scenes from 2D images using volumetric rendering and MLPs.",
    tags: ["Python", "PyTorch", "Computer Vision"],
    demo: "#",
    featured: true,
    year: 2024,
  },
  {
    title: "SpaceGPT",
    slug: "spacegpt",
    description:
      "LLM-powered interface for IoT device control via natural language. Built on the digiSpace framework, enabling no-code device programming.",
    tags: ["Python", "ML", "Research"],
    github: "https://github.com/amolbudhiraja/digi",
    featured: true,
    year: 2023,
  },
  {
    title: "Sudoku Solver",
    slug: "sudoku-solver",
    description:
      "C++ application that uses computer vision to detect and solve any Sudoku board from a camera feed in real time.",
    tags: ["C++", "Computer Vision"],
    github: "https://github.com/amolbudhiraja/sodukusolver",
    featured: false,
    year: 2023,
  },
  {
    title: "Genvest",
    slug: "genvest",
    description:
      "Financial education mobile app providing real-time market insights, personalized investment breakdowns, and interactive learning modules.",
    tags: ["React Native", "Mobile"],
    featured: false,
    year: 2023,
  },
  {
    title: "PintOS",
    slug: "pintos",
    description:
      "Full operating system implementation with file systems, multi-threading, dynamic memory allocation, virtual memory, and system calls.",
    tags: ["C", "Systems"],
    featured: false,
    year: 2023,
    proprietary: true,
  },
  {
    title: "RookieDB",
    slug: "rookiedb",
    description:
      "Java-based DBMS with multi-granularity locking, concurrency control, B+ tree indexes, and cost-based query optimization.",
    tags: ["Java", "Systems"],
    featured: false,
    year: 2023,
    proprietary: true,
  },
  {
    title: "RISC-V CPU",
    slug: "risc-v-cpu",
    description:
      "Full RISC-V CPU implementation with ALU, DRAM, L1/L2 cache, TLB, and pipelining. Built from scratch in Logisim.",
    tags: ["Systems"],
    featured: false,
    year: 2022,
    proprietary: true,
  },
];

export const filterTags = ["ML", "Computer Vision", "Systems", "Mobile", "Research"];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
