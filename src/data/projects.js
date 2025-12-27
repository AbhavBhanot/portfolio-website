export const projects = [
  {
    id: "vru-detection",
    title: "Enhancing Autonomous Vehicle Safety - VRU Detection",
    shortDescription: "Deep learning system for detecting, tracking, and forecasting Vulnerable Road Users using multi-sensor fusion",
    longDescription: "Developed an advanced deep learning system designed to enhance autonomous vehicle safety by detecting, tracking, and forecasting Vulnerable Road Users (VRUs) such as pedestrians and cyclists. The system leverages multi-sensor fusion, combining LiDAR and camera data to achieve robust real-time detection in diverse environmental conditions.",
    category: "Computer Vision",
    featured: true,
    status: "Ongoing",
    date: "2026",
    image: "/projects/vru-detection.jpg",
    techStack: [
      "Python",
      "Computer Vision",
      "Deep Learning",
      "LiDAR",
      "Sensor Fusion",
      "PyTorch",
      "Object Detection",
      "Tracking Algorithms"
    ],
    highlights: [
      "Multi-sensor fusion combining LiDAR and camera data for robust detection",
      "Real-time tracking and trajectory forecasting of vulnerable road users",
      "Advanced deep learning models optimized for autonomous vehicle applications",
      "Comprehensive testing in diverse environmental conditions"
    ],
    github: "https://github.com/abhavbhanot/vru-detection",
    liveDemo: null
  },
  {
    id: "med-ai-care",
    title: "Med AI Care (Multimodal Healthcare Diagnostic Platform)",
    shortDescription: "Scalable system processing voice, image, and text symptoms in 11+ languages with fine-tuned medical LLMs",
    longDescription: "Built a comprehensive multimodal healthcare diagnostic platform that processes patient symptoms through voice, image, and text inputs across 11+ languages. The system utilizes fine-tuned medical LLMs to provide accurate preliminary diagnoses and health recommendations, making healthcare more accessible globally.",
    category: "Healthcare AI",
    featured: false,
    status: "Completed",
    date: "June 2025",
    image: "/projects/med-ai-care.jpg",
    techStack: [
      "React",
      "LLMs",
      "Computer Vision",
      "NLP",
      "Vercel",
      "Telegram API",
      "Multilingual ASR",
      "Medical AI"
    ],
    highlights: [
      "Multimodal input processing: voice, image, and text",
      "Support for 11+ languages with multilingual ASR",
      "Fine-tuned medical LLMs for accurate diagnostics",
      "Deployed on Vercel with Telegram bot integration",
      "Scalable architecture for global healthcare access"
    ],
    github: "https://github.com/abhavbhanot/mod-ai-care",
    liveDemo: "https://med-ai-care.vercel.app"
  },
  {
    id: "recruitedge-ai",
    title: "RecruitEdge AI (Recruitment Automation Platform)",
    shortDescription: "End-to-end platform with AI-driven parsing, skill matching, interview scheduling, and project assignment",
    longDescription: "Developed a comprehensive recruitment automation platform that streamlines the entire hiring process. The system features AI-driven resume parsing, intelligent skill matching, automated interview scheduling, and project assignment capabilities, significantly reducing time-to-hire and improving candidate experience.",
    category: "Enterprise AI",
    featured: false,
    status: "Completed",
    date: "February 2025",
    image: "/projects/recruitedge-ai.jpg",
    techStack: [
      "React",
      "AI",
      "NLP",
      "Calendar Integration",
      "Resume Parsing",
      "Machine Learning",
      "REST APIs"
    ],
    highlights: [
      "AI-powered resume parsing and information extraction",
      "Intelligent skill matching algorithm for candidate-job fit",
      "Automated interview scheduling with calendar integration",
      "Project assignment system based on candidate skills",
      "End-to-end recruitment workflow automation"
    ],
    github: "https://github.com/abhavbhanot/recruitedge-ai",
    liveDemo: "https://recruitedge-ai.vercel.app"
  },
  {
    id: "sql-genius",
    title: "SQL Genius (LLM-powered SQL Generator)",
    shortDescription: "LLM-powered SQL generator using SQLCoder with LangChain RAG pipeline for dynamic schema retrieval",
    longDescription: "Created an intelligent SQL query generator powered by fine-tuned LLMs (SQLCoder) and LangChain RAG pipeline. The system dynamically retrieves database schemas and generates optimized SQL queries from natural language descriptions, making database interactions accessible to non-technical users.",
    category: "Data Tools",
    featured: false,
    status: "Completed",
    date: "January 2025",
    image: "/projects/sql-genius.jpg",
    techStack: [
      "Python",
      "LangChain",
      "Transformers",
      "Ollama",
      "LLaMA",
      "DeepSeek",
      "Qwen",
      "Phi",
      "SQLCoder",
      "RAG"
    ],
    highlights: [
      "Natural language to SQL query generation",
      "LangChain RAG pipeline for dynamic schema retrieval",
      "Support for multiple LLM backends (LLaMA, DeepSeek, Qwen, Phi)",
      "Optimized query generation with SQLCoder",
      "Context-aware query suggestions"
    ],
    github: "https://github.com/abhavbhanot/sql-genius",
    liveDemo: "https://sqlgenius.vercel.app"
  },
  {
    id: "multilingual-rag",
    title: "Multilingual RAG System",
    shortDescription: "Advanced RAG system supporting multiple languages for document retrieval and question answering",
    longDescription: "Developed a sophisticated Retrieval-Augmented Generation system that supports multiple languages for document retrieval and question answering. The system combines vector search with multilingual embeddings to provide accurate responses across language barriers.",
    category: "NLP",
    featured: false,
    status: "Completed",
    date: "December 2024",
    image: "/projects/multilingual-rag.jpg",
    techStack: [
      "Python",
      "LangChain",
      "Vector Search",
      "Multilingual Embeddings",
      "RAG",
      "HuggingFace",
      "FAISS"
    ],
    highlights: [
      "Support for multiple languages in retrieval and generation",
      "Advanced vector search with multilingual embeddings",
      "Efficient document chunking and indexing strategies",
      "Context-aware response generation",
      "Top 10 finish in NYD Hackathon"
    ],
    github: "https://github.com/abhavbhanot/multilingual-rag",
    liveDemo: null
  },
  {
    id: "soybean-weed-classification",
    title: "Soybean Weed Classification System",
    shortDescription: "Computer vision system for accurate soybean weed classification using advanced data augmentation",
    longDescription: "Conducted computer vision research under an international grant to develop an accurate soybean weed classification system. Enhanced classification accuracy through advanced data augmentation techniques and deep learning models optimized for agricultural applications.",
    category: "Computer Vision",
    featured: false,
    status: "Completed",
    date: "2024",
    image: "/projects/soybean-weed.jpg",
    techStack: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Data Augmentation",
      "Deep Learning",
      "Image Classification"
    ],
    highlights: [
      "Research conducted under international grant",
      "Advanced data augmentation techniques for improved accuracy",
      "Optimized deep learning models for agricultural use",
      "Real-world deployment for precision agriculture",
      "Significant improvement in weed detection accuracy"
    ],
    github: "https://github.com/abhavbhanot/soybean-weed-classification",
    liveDemo: null
  }
];

// Helper function to get featured project
export const getFeaturedProject = () => {
  return projects.find(project => project.featured);
};

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Helper function to get related projects (excluding current project)
export const getRelatedProjects = (currentProjectId, limit = 3) => {
  return projects
    .filter(project => project.id !== currentProjectId)
    .slice(0, limit);
};
