export const certifications = [
  {
    id: "cert-1",
    title: "Google Professional: Crash Course in Python",
    issuer: "Google",
    date: "2024",
    icon: "certificate"
  },
  {
    id: "cert-2",
    title: "Google Skill Badges: Introduction to Generative AI",
    issuer: "Google",
    date: "2024",
    icon: "certificate"
  },
  {
    id: "cert-3",
    title: "Introduction to Vertex AI Studio",
    issuer: "Google",
    date: "2024",
    icon: "certificate"
  },
  {
    id: "cert-4",
    title: "Prompt Design in Vertex AI",
    issuer: "Google",
    date: "2024",
    icon: "certificate"
  },
  {
    id: "cert-5",
    title: "AI Agentic Design Patterns with AutoGen",
    issuer: "Microsoft",
    date: "2024",
    icon: "certificate"
  },
  {
    id: "cert-6",
    title: "Building Agentic RAG with LlamaIndex",
    issuer: "LlamaIndex",
    date: "2024",
    icon: "certificate"
  },
  {
    id: "cert-7",
    title: "Multi-AI Agent Systems with CrewAI",
    issuer: "CrewAI",
    date: "2024",
    icon: "certificate"
  },
  {
    id: "cert-8",
    title: "Building AI Voice Agents for Production",
    issuer: "DeepLearning.AI",
    date: "2024",
    icon: "certificate"
  },
  {
    id: "cert-9",
    title: "Machine Learning Specialization - Supervised Machine Learning: Regression & Classification",
    issuer: "Stanford / Coursera",
    date: "2024",
    icon: "certificate"
  }
];

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      {
        id: "python",
        name: "Python",
        level: "Advanced",
        icon: "python"
      },
      {
        id: "sql",
        name: "SQL",
        level: "Advanced",
        icon: "database"
      },
      {
        id: "javascript",
        name: "JavaScript/TypeScript",
        level: "Intermediate",
        icon: "javascript"
      }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: [
      {
        id: "pytorch",
        name: "PyTorch",
        icon: "pytorch"
      },
      {
        id: "tensorflow",
        name: "TensorFlow",
        icon: "tensorflow"
      },
      {
        id: "langchain",
        name: "LangChain",
        icon: "chain"
      },
      {
        id: "huggingface",
        name: "HuggingFace",
        icon: "huggingface"
      },
      {
        id: "scikit-learn",
        name: "Scikit-learn",
        icon: "scikit"
      },
      {
        id: "pandas",
        name: "Pandas",
        icon: "pandas"
      },
      {
        id: "numpy",
        name: "NumPy",
        icon: "numpy"
      },
      {
        id: "react",
        name: "React",
        icon: "react"
      },
      {
        id: "docker",
        name: "Docker",
        icon: "docker"
      }
    ]
  },
  {
    id: "ai-ml-specializations",
    title: "AI/ML Specializations",
    skills: [
      {
        id: "llm-finetuning",
        name: "LLM Fine-tuning",
        description: "Qwen, Phi, LLaMA",
        icon: "brain"
      },
      {
        id: "rag",
        name: "RAG",
        description: "Agentic Workflows",
        icon: "search"
      },
      {
        id: "nlp",
        name: "NLP & Multilingual ASR",
        icon: "message"
      },
      {
        id: "computer-vision",
        name: "Computer Vision",
        description: "LiDAR, Multi-sensor",
        icon: "eye"
      },
      {
        id: "data-eda",
        name: "Data EDA",
        icon: "chart"
      },
      {
        id: "model-benchmarking",
        name: "Model Benchmarking",
        icon: "speedometer"
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      {
        id: "git",
        name: "Git",
        icon: "git"
      },
      {
        id: "linux",
        name: "Linux",
        icon: "linux"
      },
      {
        id: "jupyter",
        name: "Jupyter",
        icon: "jupyter"
      },
      {
        id: "vscode",
        name: "VS Code",
        icon: "vscode"
      },
      {
        id: "xgboost",
        name: "XGBoost",
        icon: "tree"
      },
      {
        id: "randomforest",
        name: "RandomForest",
        icon: "forest"
      },
      {
        id: "vector-search",
        name: "Vector Search",
        icon: "vector"
      }
    ]
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    skills: [
      {
        id: "leadership",
        name: "Leadership"
      },
      {
        id: "collaboration",
        name: "Collaboration"
      },
      {
        id: "problem-solving",
        name: "Problem Solving"
      },
      {
        id: "adaptability",
        name: "Adaptability"
      },
      {
        id: "time-management",
        name: "Time Management"
      },
      {
        id: "technical-writing",
        name: "Technical Writing"
      },
      {
        id: "public-speaking",
        name: "Public Speaking"
      }
    ]
  }
];

// Helper function to get all skills flattened
export const getAllSkills = () => {
  return skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      category: category.title
    }))
  );
};

// Helper function to get skills by category
export const getSkillsByCategory = (categoryId) => {
  const category = skillCategories.find(cat => cat.id === categoryId);
  return category ? category.skills : [];
};
