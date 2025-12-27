export const workExperience = [
  {
    id: "scaai",
    title: "AI/ML Project Intern (Full-time)",
    organization: "SCAAI - Symbiosis Centre for Applied AI",
    location: "Pune, Maharashtra",
    startDate: "June 2024",
    endDate: "Present",
    current: true,
    description: "Developed and deployed machine learning, generative AI, and conversational AI solutions using Retrieval-Augmented Generation (RAG) pipelines and agentic workflows for enterprise applications.",
    highlights: [
      "Conducted computer vision research under an international grant, enhancing soybean weed classification accuracy via advanced data augmentation",
      "Worked with cross-functional teams to optimize models for production, improving inference speed, scalability, and reliability"
    ],
    techStack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "Deep Learning",
      "Computer Vision",
      "RAG",
      "LLMs"
    ]
  },
  {
    id: "newtuple",
    title: "Research Intern - Generative AI (Full-time)",
    organization: "Newtuple Technologies",
    location: "Pune, Maharashtra",
    startDate: "May 2025",
    endDate: "July 2025",
    current: false,
    description: "Conducted research and exploratory tasks in Generative AI, including literature reviews, experimentation, and model benchmarking and LLM Evals (DeepSeek, Qwen, Phi).",
    highlights: [
      "Developed document conversion pipelines for LLM parsing, improving data extraction efficiency from unstructured documents",
      "Contributed to prototype development and proof-of-concept AI solutions"
    ],
    techStack: [
      "Python",
      "LangChain",
      "Transformers",
      "Ollama",
      "LLaMA",
      "DeepSeek",
      "Qwen",
      "Phi",
      "OCR Tools"
    ]
  }
];

export const achievements = [
  {
    id: "imagenai",
    title: "3rd Place",
    event: "ImaGenAI",
    organization: "IIT Delhi",
    date: "2024",
    icon: "🥉",
    featured: true,
    description: "Secured 3rd place in IIT Delhi's prestigious ImaGenAI hackathon"
  },
  {
    id: "hack-a-league",
    title: "Best Team Collaboration",
    event: "Hack-A-League 3.0",
    date: "2024",
    icon: "🏆",
    description: "Awarded Best Team Collaboration at Hack-A-League 3.0"
  },
  {
    id: "nyd-hackathon",
    title: "Top 10",
    event: "NYD Hackathon (Multilingual RAG)",
    date: "2024",
    icon: "🔝",
    description: "Individual entry - Secured Top 10 position with Multilingual RAG system"
  },
  {
    id: "zenathon",
    title: "Top 7 Teams",
    event: "Zenathon: Code the Next AI Revolution",
    organization: "Oraczen",
    date: "2025",
    icon: "⭐",
    description: "Selected among Top 7 teams. Won merch and goodies."
  },
  {
    id: "yuvahan",
    title: "Project Selected",
    event: "Yuvahan 2025",
    organization: "ARAI-AMTIF",
    date: "2025",
    icon: "🚀",
    description: "Selected among 16 teams out of 300+, receiving mentorship to develop the project into a startup"
  },
  {
    id: "amd-ai-sprint",
    title: "Selected for Development",
    event: "AMD's AI Sprint Hackathon",
    organization: "IIT Bombay",
    date: "2024",
    icon: "💻",
    description: "Selected out of 6000+ participants for development phase"
  }
];

export const workshops = [
  {
    id: "ai-tools-workshop",
    title: "AI Tools Workshop",
    description: "Hosted and presented to an audience of 800+ students and dignitaries, helping first-year students and members of the newly established SAII explore practical AI applications",
    attendees: "800+",
    date: "2024"
  },
  {
    id: "ai-session-professionals",
    title: "AI Session with Dr. Shruti Patil, Rithikaa Redde, and Sharvari Godbole",
    description: "Conducted hands-on AI session for a Pune-based real estate team, guiding professionals in leveraging AI for tasks like automated presentations, meeting transcriptions, and workflow optimization",
    date: "2024"
  }
];

export const leadership = [
  {
    id: "ai-club",
    title: "Co-Head of AI Club",
    organization: "Symbiosis Institute of Technology",
    startDate: "Feb 2024",
    endDate: "Present",
    current: true,
    icon: "🤖",
    description: "Leading the AI Club, organizing workshops, hackathons, and technical sessions"
  },
  {
    id: "ted-mun",
    title: "Core Team Member - Ted Club/MUN Society",
    organization: "Symbiosis Institute of Technology",
    startDate: "August 2023",
    endDate: "Present",
    current: true,
    icon: "🎤",
    description: "Core team member organizing TEDx events and Model United Nations conferences"
  },
  {
    id: "mun",
    title: "Model United Nations",
    icon: "🏅",
    description: "Multiple awards and Executive Board roles; represented SIT & St. Edward's School at national-level MUN events"
  },
  {
    id: "debate",
    title: "Debate",
    icon: "🎙️",
    description: "Winner, SIT Clash '24; participated in the 25th Annual Slater's Debate (Bishop Cotton School)"
  },
  {
    id: "sports",
    title: "Sports",
    icon: "🏀",
    description: "Multiple district and inter-school basketball championships and runner-up finishes"
  }
];

// Helper functions
export const getCurrentExperience = () => {
  return workExperience.filter(exp => exp.current);
};

export const getFeaturedAchievements = () => {
  return achievements.filter(achievement => achievement.featured);
};

export const getAllExperience = () => {
  return {
    work: workExperience,
    achievements,
    workshops,
    leadership
  };
};
