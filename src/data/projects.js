export const projects = [
  {
    id: "vru-detection",
    title: "Enhancing Autonomous Vehicle Safety - VRU Detection",
    shortDescription: "Deep learning system for detecting, tracking, and forecasting Vulnerable Road Users using multi-sensor fusion",
    longDescription: "Developed an advanced deep learning system designed to enhance autonomous vehicle safety by detecting, tracking, and forecasting Vulnerable Road Users (VRUs) such as pedestrians and cyclists. The system leverages multi-sensor fusion, combining LiDAR and camera data to achieve robust real-time detection in diverse environmental conditions.",
    category: "Computer Vision",
    featured: false,
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
    featured: true,
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
    github: null,
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
    github: null,
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
    github: null,
    liveDemo: "https://sqlgenius.vercel.app"
  },
  {
    id: "multilingual-rag",
    title: "RAG Chatbot — Full Stack Cloud Deployment",
    shortDescription: "Multilingual Retrieval-Augmented Generation system for the Bhagavad Gita, containerised with Docker and deployed globally",
    longDescription: "Built a multilingual Retrieval-Augmented Generation system for document retrieval and question answering over Bhagavad Gita texts. Containerized the full stack using Docker and deployed globally via Netlify (frontend) and Hugging Face Spaces (backend), enabling zero-downtime scaling. The system combines vector search with multilingual embeddings to provide accurate responses across language barriers.",
    category: "NLP",
    featured: false,
    status: "Completed",
    date: "December 2024",
    image: "/projects/multilingual-rag.jpg",
    techStack: [
      "Python",
      "LangChain",
      "Docker",
      "Vector Search",
      "Multilingual Embeddings",
      "RAG",
      "HuggingFace",
      "FAISS",
      "Netlify",
      "Hugging Face Spaces"
    ],
    highlights: [
      "Full-stack containerised deployment with Docker for zero-downtime scaling",
      "Global deployment: Netlify (frontend) + Hugging Face Spaces (backend)",
      "Support for multiple languages in retrieval and generation",
      "Advanced vector search with multilingual embeddings",
      "Top 10 finish in NYD Hackathon"
    ],
    github: "https://github.com/AbhavBhanot/Bhagavad-Gita-Summarization-and-Verse-Retrieval-RAG-",
    liveDemo: "https://indian-mythology-chatbot.netlify.app"
  },
  {
    id: "speech-style-transfer",
    title: "Speech Style Transfer System",
    shortDescription: "Low-resource speech style transfer converting neutral speech to target speaking styles using prosody-based conditioning",
    longDescription: "A low-resource speech style transfer system that converts neutral speech to target speaking styles such as 'news anchor' and 'podcast energy' using prosody-based conditioning. The system features a dual-channel architecture combining wav2vec2 feature extraction with HiFi-GAN vocoder, supporting CPU-friendly inference under 4GB RAM. Includes synthetic prosody augmentation for data efficiency, a streaming mode for long audio, and an extensible style registry for custom speaking styles.",
    category: "Speech AI",
    featured: false,
    status: "Completed",
    date: "2025",
    image: "/projects/speech-style-transfer.jpg",
    techStack: [
      "Python",
      "PyTorch",
      "wav2vec2",
      "HiFi-GAN",
      "Transformers",
      "Librosa",
      "ONNX",
      "Speech Processing",
      "Prosody Analysis"
    ],
    highlights: [
      "Prosody-based style transfer for low-resource languages",
      "Synthetic prosody augmentation achieving 10x data efficiency",
      "CPU-friendly inference with < 4GB RAM requirement",
      "Streaming mode for processing long audio files",
      "Extensible style registry supporting custom speaking styles",
      "Command-line interface and Python API for flexible integration"
    ],
    github: "https://github.com/AbhavBhanot/speech-style-transfer",
    liveDemo: null
  },
  {
    id: "hrtem-lattice-classifier",
    title: "HRTEM Bravais Lattice Classifier",
    shortDescription: "Physics-informed deep learning pipeline classifying 14 Bravais lattice types from SAED/HRTEM diffraction patterns",
    longDescription: "A physics-informed deep learning pipeline that classifies the crystallographic structure of rare-earth orthoferrite materials from simulated SAED and HRTEM diffraction patterns. The system identifies all 14 Bravais lattice types (in Pearson notation) through a three-stage approach: physically accurate SAED pattern synthesis (5,488 patterns across 14 classes), self-supervised pre-training of a dual-channel ResNet encoder (4.66M parameters) using SimCLR with NT-Xent contrastive loss, and fine-tuning with a physics feature fusion module incorporating d-spacing ratios, inter-spot angles, fold symmetry, and crystallographic residuals. Achieves 61.9% validation accuracy with F1 scores of 0.85–0.95 on high-symmetry cubic lattices.",
    category: "Scientific AI",
    featured: false,
    status: "Completed",
    date: "2025",
    image: "/projects/hrtem-lattice-classifier.jpg",
    techStack: [
      "Python",
      "PyTorch",
      "ResNet",
      "SimCLR",
      "Self-Supervised Learning",
      "Streamlit",
      "Computer Vision",
      "Crystallography",
      "Physics-Informed ML"
    ],
    highlights: [
      "Classifies all 14 Bravais lattice types from electron diffraction patterns",
      "Dual-channel ResNet encoder (4.66M parameters) pre-trained with SimCLR contrastive learning",
      "Physics feature fusion using d-spacing ratios, inter-spot angles, and fold symmetry",
      "Synthesized 5,488 physically accurate SAED patterns at ~16ms per pattern",
      "Best SSL loss of 0.0314 over 50 epochs on 5,320 training patterns",
      "80.30% confidence on real SAED image inference (oP classification)"
    ],
    github: "https://github.com/KushbuAgrawal05/HRTEMlatticeclassifier",
    liveDemo: "https://hrtemlatticeclassifier-cuudrhxsmatza2cmlktkt8.streamlit.app"
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
