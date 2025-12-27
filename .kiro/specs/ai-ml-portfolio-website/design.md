# Design Document

## Overview

The AI/ML Portfolio Website is a multi-page application built with modern web technologies to showcase Abhav Bhanot's professional profile, projects, and achievements. The design blends contemporary minimalism with rustic, warm elements—combining clean tech aesthetics with organic textures, earthy tones, and handcrafted details suitable for a memorable, professional portfolio.

### Technology Stack

- **Frontend Framework**: React with React Router for multi-page navigation
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: CSS Modules with CSS custom properties for theming
- **Animations**: Framer Motion for smooth, performant page transitions and animations
- **Icons**: React Icons library
- **Deployment**: Static hosting (Vercel, Netlify, or GitHub Pages)

### Design Principles

1. **Minimalist Foundation**: Clean layouts with generous whitespace and clear hierarchy
2. **Warm Accents**: Subtle warm color palette (amber, brown) without overwhelming the design
3. **Restrained Rustic**: Minimal texture and vintage touches—just enough for character
4. **Typography Focus**: Let typography create visual interest (serif headings, clean body text)
5. **Accessibility**: WCAG 2.1 AA compliance with semantic HTML and ARIA labels
6. **Performance**: Optimized images, lazy loading, and minimal JavaScript
7. **Responsiveness**: Mobile-first approach with breakpoints at 640px, 768px, 1024px, and 1280px

### Site Structure (Multi-Page)

```
/                    → Home (Hero + Brief Intro)
/about              → About Me (Background, Interests, Education)
/projects           → Projects Grid (All Projects)
/projects/:id       → Individual Project Detail Page
/skills             → Skills & Technologies
/experience         → Experience, Achievements, Hackathons
/contact            → Contact Form & Information
```

## Architecture

### Component Structure

```
src/
├── pages/
│   ├── Home.jsx              → Landing page with hero
│   ├── About.jsx             → About page with education & interests
│   ├── Projects.jsx          → Projects grid page
│   ├── ProjectDetail.jsx     → Individual project page
│   ├── Skills.jsx            → Skills & technologies page
│   ├── Experience.jsx        → Experience & achievements page
│   └── Contact.jsx           → Contact page
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   ├── About/
│   │   ├── AboutContent.jsx
│   │   ├── Education.jsx
│   │   └── About.module.css
│   ├── Projects/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGrid.jsx
│   │   ├── FeaturedProject.jsx
│   │   ├── ProjectDetailView.jsx
│   │   └── Projects.module.css
│   ├── Skills/
│   │   ├── SkillCategory.jsx
│   │   ├── SkillBadge.jsx
│   │   └── Skills.module.css
│   ├── Experience/
│   │   ├── Timeline.jsx
│   │   ├── TimelineItem.jsx
│   │   ├── AchievementCard.jsx
│   │   └── Experience.module.css
│   ├── Contact/
│   │   ├── ContactInfo.jsx
│   │   ├── ContactForm.jsx
│   │   └── Contact.module.css
│   ├── Layout/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── PageTransition.jsx
│   │   └── Layout.module.css
│   └── UI/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       └── UI.module.css
├── data/
│   ├── projects.js           → Project data from GitHub
│   ├── skills.js             → Skills from resume
│   ├── experience.js         → Experience from resume
│   └── personal.js           → Personal info & bio
├── hooks/
│   ├── useTheme.js
│   └── usePageTransition.js
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── textures.css          → Rustic texture styles
├── assets/
│   ├── textures/             → Paper, wood grain textures
│   └── images/               → Project images, profile photo
├── utils/
│   ├── animations.js
│   └── routes.js
├── App.jsx
└── main.jsx
```

## Components and Interfaces

### 1. Home Page - Hero Section

**Purpose**: Create immediate impact with name, title, and call-to-action buttons that navigate to different pages

**Component Structure**:
```jsx
<HomePage>
  <Hero>
    <HeroContent>
      <Name>Abhav Bhanot</Name>
      <Title>AI/ML Engineering Student | Machine Learning Enthusiast | Tech Innovator</Title>
      <Introduction>
        Symbiosis Institute of Technology student passionate about building 
        intelligent systems that solve real-world problems through AI, Machine 
        Learning, and Deep Learning.
      </Introduction>
      <CTAButtons>
        <Button primary to="/projects">View Projects</Button>
        <Button secondary onClick={downloadResume}>Download Resume</Button>
      </CTAButtons>
    </HeroContent>
    <HeroVisual>
      {/* Animated neural network visualization with rustic overlay */}
    </HeroVisual>
  </Hero>
  
  <QuickLinks>
    <QuickLinkCard to="/about" icon={<UserIcon />}>
      <CardTitle>About Me</CardTitle>
      <CardDesc>Background & Interests</CardDesc>
    </QuickLinkCard>
    <QuickLinkCard to="/skills" icon={<CodeIcon />}>
      <CardTitle>Skills</CardTitle>
      <CardDesc>Technologies & Tools</CardDesc>
    </QuickLinkCard>
    <QuickLinkCard to="/experience" icon={<TrophyIcon />}>
      <CardTitle>Experience</CardTitle>
      <CardDesc>Achievements & Work</CardDesc>
    </QuickLinkCard>
    <QuickLinkCard to="/contact" icon={<MailIcon />}>
      <CardTitle>Contact</CardTitle>
      <CardDesc>Get In Touch</CardDesc>
    </QuickLinkCard>
  </QuickLinks>
</HomePage>
```

**Design Details**:
- Full viewport height hero with textured background (subtle paper grain)
- Warm color overlay on animated neural network visualization
- Handwritten-style accent font for name (mixed with clean sans-serif)
- Buttons with subtle texture and shadow depth
- Quick links section with card grid below hero
- Fade-in and slide-up animations on load
- Typography: Large heading (48-64px), subtitle (20-24px), body (16-18px)
- Rustic elements: Torn paper edges on cards, vintage color palette

### 2. About Page

**Purpose**: Provide detailed background, education, interests, and personal story

**Component Structure**:
```jsx
<AboutPage>
  <PageHeader>
    <PageTitle>About Me</PageTitle>
    <PageSubtitle>Background, Education & Interests</PageSubtitle>
  </PageHeader>
  
  <AboutContent>
    <ProfileSection>
      <ProfileImage src="/profile.jpg" alt="Abhav Bhanot" />
      <Bio>
        <p>
          I'm an AI/ML Engineering student at Symbiosis Institute of Technology, 
          passionate about leveraging artificial intelligence to solve complex 
          real-world problems. My journey in tech began with a curiosity about 
          how machines can learn and adapt, leading me to explore deep learning, 
          computer vision, and natural language processing.
        </p>
        <p>
          Beyond academics, I've participated in numerous hackathons, securing 
          top positions at IIT Delhi's ImaGenAI and other prestigious competitions. 
          I believe in learning by building, which is why I focus on creating 
          deployable AI solutions that make a tangible impact.
        </p>
      </Bio>
    </ProfileSection>
    
    <Education>
      <SectionTitle>Education</SectionTitle>
      <EducationCard>
        <SchoolName>Symbiosis Institute of Technology</SchoolName>
        <Degree>Bachelor of Technology - Artificial Intelligence and Machine Learning</Degree>
        <Duration>August 2023 - June 2027</Duration>
        <GPA>GPA: 8.04</GPA>
        <Courses>
          <CourseTag>DSA</CourseTag>
          <CourseTag>EDA</CourseTag>
          <CourseTag>Machine Learning</CourseTag>
          <CourseTag>Deep Learning</CourseTag>
          <CourseTag>NLP</CourseTag>
          <CourseTag>Image Processing</CourseTag>
          <CourseTag>Databases</CourseTag>
          <CourseTag>ML Ops</CourseTag>
        </Courses>
      </EducationCard>
      
      <EducationCard>
        <SchoolName>St. Edward's School</SchoolName>
        <Degree>CBSE - Class X & XII</Degree>
        <Duration>March 2009 - April 2023</Duration>
        <Achievement>Percentage: 94 and 82.4 respectively</Achievement>
      </EducationCard>
    </Education>
    
    <Interests>
      <SectionTitle>Technical Interests</SectionTitle>
      <InterestGrid>
        <InterestCard icon={<BrainIcon />}>
          <InterestTitle>Artificial Intelligence</InterestTitle>
          <InterestDesc>Building intelligent systems that learn and adapt</InterestDesc>
        </InterestCard>
        <InterestCard icon={<NetworkIcon />}>
          <InterestTitle>Machine Learning</InterestTitle>
          <InterestDesc>Developing predictive models and algorithms</InterestDesc>
        </InterestCard>
        <InterestCard icon={<LayersIcon />}>
          <InterestTitle>Deep Learning</InterestTitle>
          <InterestDesc>Neural networks and advanced architectures</InterestDesc>
        </InterestCard>
        <InterestCard icon={<MessageIcon />}>
          <InterestTitle>Natural Language Processing</InterestTitle>
          <InterestDesc>Language models and conversational AI</InterestDesc>
        </InterestCard>
        <InterestCard icon={<EyeIcon />}>
          <InterestTitle>Computer Vision</InterestTitle>
          <InterestDesc>Image recognition and visual understanding</InterestDesc>
        </InterestCard>
        <InterestCard icon={<CloudIcon />}>
          <InterestTitle>Cloud Deployments</InterestTitle>
          <InterestDesc>Scalable AI solutions in production</InterestDesc>
        </InterestCard>
      </InterestGrid>
    </Interests>
    
    <CoreStrengths>
      <SectionTitle>Core Strengths</SectionTitle>
      <StrengthsList>
        <StrengthItem>Leadership</StrengthItem>
        <StrengthItem>Teamwork</StrengthItem>
        <StrengthItem>Problem Solving</StrengthItem>
        <StrengthItem>Communication</StrengthItem>
        <StrengthItem>Rapid Prototyping</StrengthItem>
        <StrengthItem>AI/ML Systems</StrengthItem>
      </StrengthsList>
    </CoreStrengths>
  </AboutContent>
</AboutPage>
```

**Design Details**:
- Clean layout with warm background color
- Profile image with simple border (no frame effects)
- Two-column layout on desktop (image/bio left, education/interests right)
- Single column on mobile
- Education cards with clean design and subtle shadow
- Interest cards with icons and minimal hover lift effect
- Section titles in serif font (Playfair Display)
- Slide-in animations from different directions
- Minimal rustic touches: Warm colors, simple borders

### 3. Projects Page

**Purpose**: Showcase best AI/ML projects with featured project and grid layout, with navigation to individual project pages

**Component Structure**:
```jsx
<ProjectsPage>
  <PageHeader>
    <PageTitle>Projects</PageTitle>
    <PageSubtitle>AI/ML Solutions & Innovations</PageSubtitle>
  </PageHeader>
  
  <FeaturedProject project={featuredProject}>
    <FeaturedBadge>Featured Project</FeaturedBadge>
    <ProjectImage src={project.image} alt={project.title} />
    <ProjectInfo>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <TechStack>
        {project.techStack.map(tech => <TechBadge>{tech}</TechBadge>)}
      </TechStack>
      <ProjectLinks>
        <Button to={`/projects/${project.id}`}>View Details</Button>
        {project.liveDemo && (
          <Button href={project.liveDemo} target="_blank">Live Demo</Button>
        )}
        <Button href={project.github} target="_blank">GitHub</Button>
      </ProjectLinks>
    </ProjectInfo>
  </FeaturedProject>
  
  <ProjectGrid>
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </ProjectGrid>
</ProjectsPage>

<ProjectCard project={project}>
  <CardImage src={project.image} alt={project.title} />
  <CardOverlay>
    <ViewDetailsButton to={`/projects/${project.id}`}>
      View Details
    </ViewDetailsButton>
  </CardOverlay>
  <CardContent>
    <CardTitle>{project.title}</CardTitle>
    <CardDescription>{project.description}</CardDescription>
    <TechStack>
      {project.techStack.slice(0, 4).map(tech => <TechBadge>{tech}</TechBadge>)}
    </TechStack>
  </CardContent>
  <CardActions>
    {project.liveDemo && (
      <IconButton href={project.liveDemo} target="_blank" title="Live Demo">
        <ExternalLinkIcon />
      </IconButton>
    )}
    <IconButton href={project.github} target="_blank" title="GitHub">
      <GitHubIcon />
    </IconButton>
  </CardActions>
</ProjectCard>
```

**Design Details**:
- Featured project banner with clean design and subtle border
- Grid layout: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Cards with white/surface background and soft shadow
- Image with subtle dark overlay and "View Details" button on hover
- Smooth hover effects: lift card slightly, show overlay
- Staggered fade-in animation on page load
- Tech stack badges with minimal styling
- Warm color accents used sparingly

**Projects to Showcase** (from resume):

1. **Enhancing Autonomous Vehicle Safety - VRU Detection** (Featured)
   - Description: Deep learning system for detecting, tracking, and forecasting Vulnerable Road Users using multi-sensor fusion
   - Tech: Python, Computer Vision, Sensor Fusion, LiDAR, Deep Learning
   - Status: Ongoing (2026)
   - GitHub: Link from profile

2. **Mod AI Care (Multimodal Healthcare Diagnostic Platform)**
   - Description: Scalable system processing voice, image, and text symptoms in 11+ languages with fine-tuned medical LLMs
   - Tech: React, LLMs, Computer Vision, NLP, Vercel, Telegram API
   - Date: June 2025
   - GitHub: Link from profile

3. **RecruitEdge AI (Recruitment Automation Platform)**
   - Description: End-to-end platform with AI-driven parsing, skill matching, interview scheduling, and project assignment
   - Tech: React, AI, NLP, Calendar Integration
   - Date: February 2025
   - GitHub: Link from profile

4. **SQL Genius (LLM-powered SQL Generator)**
   - Description: LLM-powered SQL generator using SQLCoder with LangChain RAG pipeline for dynamic schema retrieval
   - Tech: Python, LangChain, Transformers, Ollama, LLaMA, DeepSeek, Qwen, Phi
   - Date: January 2025
   - GitHub: Link from profile

5-8. Additional projects from GitHub based on relevance and impact

### 4. Project Detail Page

**Purpose**: Provide comprehensive information about individual projects

**Component Structure**:
```jsx
<ProjectDetailPage>
  <ProjectHero>
    <BackButton to="/projects">← Back to Projects</BackButton>
    <ProjectTitle>{project.title}</ProjectTitle>
    <ProjectMeta>
      <MetaItem><CalendarIcon /> {project.date}</MetaItem>
      <MetaItem><CategoryIcon /> {project.category}</MetaItem>
    </ProjectMeta>
  </ProjectHero>
  
  <ProjectContent>
    <ProjectImage src={project.image} alt={project.title} />
    
    <ProjectDescription>
      <SectionTitle>Overview</SectionTitle>
      <p>{project.longDescription}</p>
    </ProjectDescription>
    
    <ProjectHighlights>
      <SectionTitle>Key Features</SectionTitle>
      <HighlightsList>
        {project.highlights.map(highlight => (
          <HighlightItem>{highlight}</HighlightItem>
        ))}
      </HighlightsList>
    </ProjectHighlights>
    
    <TechStackSection>
      <SectionTitle>Technologies Used</SectionTitle>
      <TechGrid>
        {project.techStack.map(tech => (
          <TechCard>
            <TechIcon src={`/icons/${tech}.svg`} />
            <TechName>{tech}</TechName>
          </TechCard>
        ))}
      </TechGrid>
    </TechStackSection>
    
    <ProjectLinks>
      {project.liveDemo && (
        <Button primary href={project.liveDemo} target="_blank">
          <ExternalLinkIcon /> View Live Demo
        </Button>
      )}
      <Button secondary href={project.github} target="_blank">
        <GitHubIcon /> View on GitHub
      </Button>
    </ProjectLinks>
  </ProjectContent>
  
  <RelatedProjects>
    <SectionTitle>More Projects</SectionTitle>
    <ProjectGrid>
      {relatedProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ProjectGrid>
  </RelatedProjects>
</ProjectDetailPage>
```

**Design Details**:
- Full-width hero with project title and metadata
- Large project image with simple border
- Detailed description with multiple sections
- Tech stack displayed as simple badges with icons
- Highlights as clean bulleted list
- Related projects grid at bottom
- Minimal rustic touches: Warm colors, clean typography
- Smooth page transitions when navigating

### 5. Skills Page

**Purpose**: Display comprehensive technical skills organized by category with visual appeal

**Component Structure**:
```jsx
<SkillsPage>
  <PageHeader>
    <PageTitle>Skills & Technologies</PageTitle>
    <PageSubtitle>Technical Expertise & Tools</PageSubtitle>
  </PageHeader>
  
  <SkillsContent>
    <SkillCategory>
      <CategoryTitle>Languages</CategoryTitle>
      <SkillGrid>
        <SkillCard>
          <SkillIcon><PythonIcon /></SkillIcon>
          <SkillName>Python</SkillName>
          <SkillLevel>Advanced</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillIcon><SQLIcon /></SkillIcon>
          <SkillName>SQL</SkillName>
          <SkillLevel>Advanced</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillIcon><JSIcon /></SkillIcon>
          <SkillName>JavaScript/TypeScript</SkillName>
          <SkillLevel>Intermediate</SkillLevel>
        </SkillCard>
      </SkillGrid>
    </SkillCategory>
    
    <SkillCategory>
      <CategoryTitle>Frameworks & Libraries</CategoryTitle>
      <SkillGrid>
        <SkillCard>
          <SkillIcon><PyTorchIcon /></SkillIcon>
          <SkillName>PyTorch</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><TFIcon /></SkillIcon>
          <SkillName>TensorFlow</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><HuggingFaceIcon /></SkillIcon>
          <SkillName>HuggingFace</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><LangChainIcon /></SkillIcon>
          <SkillName>LangChain</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><ScikitIcon /></SkillIcon>
          <SkillName>Scikit-learn</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><PandasIcon /></SkillIcon>
          <SkillName>Pandas</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><NumPyIcon /></SkillIcon>
          <SkillName>NumPy</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><ReactIcon /></SkillIcon>
          <SkillName>React</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><DockerIcon /></SkillIcon>
          <SkillName>Docker</SkillName>
        </SkillCard>
      </SkillGrid>
    </SkillCategory>
    
    <SkillCategory>
      <CategoryTitle>AI/ML Specializations</CategoryTitle>
      <SkillGrid>
        <SkillCard>
          <SkillIcon><BrainIcon /></SkillIcon>
          <SkillName>LLM Fine-tuning</SkillName>
          <SkillDesc>Qwen, Phi, LLaMA</SkillDesc>
        </SkillCard>
        <SkillCard>
          <SkillIcon><SearchIcon /></SkillIcon>
          <SkillName>RAG</SkillName>
          <SkillDesc>Agentic Workflows</SkillDesc>
        </SkillCard>
        <SkillCard>
          <SkillIcon><MessageIcon /></SkillIcon>
          <SkillName>NLP & Multilingual ASR</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><EyeIcon /></SkillIcon>
          <SkillName>Computer Vision</SkillName>
          <SkillDesc>LiDAR, Multi-sensor</SkillDesc>
        </SkillCard>
        <SkillCard>
          <SkillIcon><ChartIcon /></SkillIcon>
          <SkillName>Data EDA</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><ModelIcon /></SkillIcon>
          <SkillName>Model Benchmarking</SkillName>
        </SkillCard>
      </SkillGrid>
    </SkillCategory>
    
    <SkillCategory>
      <CategoryTitle>Tools & Platforms</CategoryTitle>
      <SkillGrid>
        <SkillCard>
          <SkillIcon><GitIcon /></SkillIcon>
          <SkillName>Git</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><LinuxIcon /></SkillIcon>
          <SkillName>Linux</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><JupyterIcon /></SkillIcon>
          <SkillName>Jupyter</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><VSCodeIcon /></SkillIcon>
          <SkillName>VS Code</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><XGBoostIcon /></SkillIcon>
          <SkillName>XGBoost</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><RandomForestIcon /></SkillIcon>
          <SkillName>RandomForest</SkillName>
        </SkillCard>
        <SkillCard>
          <SkillIcon><VectorIcon /></SkillIcon>
          <SkillName>Vector Search</SkillName>
        </SkillCard>
      </SkillGrid>
    </SkillCategory>
    
    <SkillCategory>
      <CategoryTitle>Soft Skills</CategoryTitle>
      <SoftSkillsList>
        <SoftSkillItem>Leadership</SoftSkillItem>
        <SoftSkillItem>Collaboration</SoftSkillItem>
        <SoftSkillItem>Problem Solving</SoftSkillItem>
        <SoftSkillItem>Adaptability</SoftSkillItem>
        <SoftSkillItem>Time Management</SoftSkillItem>
        <SoftSkillItem>Technical Writing</SoftSkillItem>
        <SoftSkillItem>Public Speaking</SoftSkillItem>
      </SoftSkillsList>
    </SkillCategory>
  </SkillsContent>
</SkillsPage>
```

**Design Details**:
- Clean grid layout for skill categories
- Each category in a simple card with clean header
- Skill cards with icons and names (minimal descriptions)
- Hover effects: subtle lift
- Staggered fade-in animation on page load
- Minimal styling: Clean backgrounds, warm accent colors
- Soft skills displayed as simple badges
- Skills from resume: Python, SQL, JS/TS, PyTorch, TensorFlow, LangChain, HuggingFace, Scikit-learn, Pandas, NumPy, React, Docker, LLM Fine-tuning, RAG, NLP, Computer Vision, Data EDA, Model Benchmarking

### 6. Experience Page

**Purpose**: Showcase internships, hackathons, achievements, certifications, and leadership roles

**Component Structure**:
```jsx
<ExperiencePage>
  <PageHeader>
    <PageTitle>Experience & Achievements</PageTitle>
    <PageSubtitle>Professional Journey & Accomplishments</PageSubtitle>
  </PageHeader>
  
  <ExperienceContent>
    <WorkExperience>
      <SectionTitle>Work Experience</SectionTitle>
      <Timeline>
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <ItemTitle>AI/ML Project Intern (Full-time)</ItemTitle>
            <ItemOrg>SCAAI - Symbiosis Centre for Applied AI</ItemOrg>
            <ItemLocation>Pune, Maharashtra</ItemLocation>
            <ItemDate>June 2024 - Present</ItemDate>
            <ItemDescription>
              <p>Developed and deployed machine learning, generative AI, and conversational AI solutions using Retrieval-Augmented Generation (RAG) pipelines and agentic workflows for enterprise applications.</p>
            </ItemDescription>
            <ItemHighlights>
              <HighlightItem>Conducted computer vision research under an international grant, enhancing soybean weed classification accuracy via advanced data augmentation</HighlightItem>
              <HighlightItem>Worked with cross-functional teams to optimize models for production, improving inference speed, scalability, and reliability</HighlightItem>
            </ItemHighlights>
            <ItemTags>
              <Tag>Python</Tag>
              <Tag>PyTorch</Tag>
              <Tag>TensorFlow</Tag>
              <Tag>LangChain</Tag>
              <Tag>Deep Learning</Tag>
              <Tag>Computer Vision</Tag>
              <Tag>RAG</Tag>
              <Tag>LLMs</Tag>
            </ItemTags>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <ItemTitle>Research Intern - Generative AI (Full-time)</ItemTitle>
            <ItemOrg>Newtuple Technologies</ItemOrg>
            <ItemLocation>Pune, Maharashtra</ItemLocation>
            <ItemDate>May 2023 - Aug 2025</ItemDate>
            <ItemDescription>
              <p>Conducted research and exploratory tasks in Generative AI, including literature reviews, experimentation, and model conversions using Qwen, Phi, and LLaMA.</p>
            </ItemDescription>
            <ItemHighlights>
              <HighlightItem>Developed document conversion pipelines for LLM parsing, improving data extraction efficiency from unstructured documents</HighlightItem>
              <HighlightItem>Contributed to prototype development and proof-of-concept AI solutions</HighlightItem>
            </ItemHighlights>
            <ItemTags>
              <Tag>Python</Tag>
              <Tag>LangChain</Tag>
              <Tag>Transformers</Tag>
              <Tag>Ollama</Tag>
              <Tag>LLaMA</Tag>
              <Tag>DeepSeek</Tag>
              <Tag>Qwen</Tag>
              <Tag>Phi</Tag>
              <Tag>OCR Tools</Tag>
            </ItemTags>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </WorkExperience>
    
    <Achievements>
      <SectionTitle>Competitions & Hackathons</SectionTitle>
      <AchievementsGrid>
        <AchievementCard featured>
          <AchievementIcon>🥉</AchievementIcon>
          <AchievementTitle>3rd Place</AchievementTitle>
          <AchievementEvent>ImaGenAI</AchievementEvent>
          <AchievementOrg>IIT Delhi</AchievementOrg>
          <AchievementDate>2024</AchievementDate>
        </AchievementCard>
        
        <AchievementCard>
          <AchievementIcon>🏆</AchievementIcon>
          <AchievementTitle>Best Team Collaboration</AchievementTitle>
          <AchievementEvent>Hack-A-League 3.0</AchievementEvent>
          <AchievementDate>2024</AchievementDate>
        </AchievementCard>
        
        <AchievementCard>
          <AchievementIcon>🔝</AchievementIcon>
          <AchievementTitle>Top 10</AchievementTitle>
          <AchievementEvent>NYD Hackathon (Multilingual RAG)</AchievementEvent>
          <AchievementDesc>Individual entry</AchievementDesc>
        </AchievementCard>
        
        <AchievementCard>
          <AchievementIcon>⭐</AchievementIcon>
          <AchievementTitle>Top 7 Teams</AchievementTitle>
          <AchievementEvent>Zenathon: Code the Next AI Revolution</AchievementEvent>
          <AchievementOrg>Oraczen (2025)</AchievementOrg>
          <AchievementDesc>Qualified - Smart India Hackathon</AchievementDesc>
        </AchievementCard>
        
        <AchievementCard>
          <AchievementIcon>🚀</AchievementIcon>
          <AchievementTitle>Project Selected</AchievementTitle>
          <AchievementEvent>Yuvahan 2025</AchievementEvent>
          <AchievementDesc>Selected among 16 teams out of 300+, organized by ARAI-AMTIF, receiving mentorship to develop the project into a startup</AchievementDesc>
        </AchievementCard>
        
        <AchievementCard>
          <AchievementIcon>💻</AchievementIcon>
          <AchievementTitle>Selected for Development</AchievementTitle>
          <AchievementEvent>AMD's AI Sprint Hackathon</AchievementEvent>
          <AchievementOrg>IIT Bombay</AchievementOrg>
          <AchievementDesc>Out of 6000+</AchievementDesc>
        </AchievementCard>
      </AchievementsGrid>
    </Achievements>
    
    <WorkshopsOutreach>
      <SectionTitle>Workshops & Outreach</SectionTitle>
      <OutreachList>
        <OutreachItem>
          <OutreachTitle>AI Tools Workshop</OutreachTitle>
          <OutreachDesc>Hosted and presented to an audience of 800+ students and dignitaries, helping first-year students and members of the newly established SAII explore practical AI applications</OutreachDesc>
        </OutreachItem>
        <OutreachItem>
          <OutreachTitle>AI Session with Dr. Shruti Patil, Rithikaa Redde, and Sharvari Godbole</OutreachTitle>
          <OutreachDesc>Conducted hands-on AI session for a Pune-based real estate team, guiding professionals in leveraging AI for tasks like automated presentations, meeting transcriptions, and workflow optimization</OutreachDesc>
        </OutreachItem>
      </OutreachList>
    </WorkshopsOutreach>
    
    <OtherExperience>
      <SectionTitle>Leadership & Activities</SectionTitle>
      <ExperienceGrid>
        <ExperienceCard>
          <CardIcon>🤖</CardIcon>
          <CardTitle>Co-Head of AI Club</CardTitle>
          <CardDate>Feb 2024 - Present</CardDate>
        </ExperienceCard>
        
        <ExperienceCard>
          <CardIcon>🎤</CardIcon>
          <CardTitle>Core Team Member - Ted Club/MUN Society</CardTitle>
          <CardDate>August 2023 - Present</CardDate>
        </ExperienceCard>
        
        <ExperienceCard>
          <CardIcon>🏅</CardIcon>
          <CardTitle>Model United Nations</CardTitle>
          <CardDesc>Multiple awards and Executive Board roles; represented SIT & St. Edward's School at national-level MUN events</CardDesc>
        </ExperienceCard>
        
        <ExperienceCard>
          <CardIcon>🎙️</CardIcon>
          <CardTitle>Debate</CardTitle>
          <CardDesc>Winner, SIT Clash '24; participated in the 25th Annual Slater's Debate (Bishop Cotton School)</CardDesc>
        </ExperienceCard>
        
        <ExperienceCard>
          <CardIcon>🏀</CardIcon>
          <CardTitle>Sports</CardTitle>
          <CardDesc>Multiple district and inter-school basketball championships and runner-up finishes</CardDesc>
        </ExperienceCard>
      </ExperienceGrid>
    </OtherExperience>
    
    <Certifications>
      <SectionTitle>Certifications</SectionTitle>
      <CertificationsList>
        <CertificationItem>
          <CertIcon><GoogleIcon /></CertIcon>
          <CertTitle>Google Professional: Crash Course in Python</CertTitle>
        </CertificationItem>
        <CertificationItem>
          <CertIcon><GoogleIcon /></CertIcon>
          <CertTitle>Google Skill Badges: Introduction to Generative AI</CertTitle>
        </CertificationItem>
        <CertificationItem>
          <CertIcon><GoogleIcon /></CertIcon>
          <CertTitle>Introduction to Vertex AI Studio</CertTitle>
        </CertificationItem>
        <CertificationItem>
          <CertIcon><GoogleIcon /></CertIcon>
          <CertTitle>Prompt Design in Vertex AI</CertTitle>
        </CertificationItem>
        <CertificationItem>
          <CertIcon><MicrosoftIcon /></CertIcon>
          <CertTitle>Microsoft: AI Agentic Design Patterns with AutoGen</CertTitle>
        </CertificationItem>
        <CertificationItem>
          <CertIcon><LlamaIndexIcon /></CertIcon>
          <CertTitle>LlamaIndex: Building Agentic RAG with LlamaIndex</CertTitle>
        </CertificationItem>
        <CertificationItem>
          <CertIcon><CrewAIIcon /></CertIcon>
          <CertTitle>CrewAI: Multi-AI Agent Systems with CrewAI</CertTitle>
        </CertificationItem>
        <CertificationItem>
          <CertIcon><DeepLearningIcon /></CertIcon>
          <CertTitle>DeepLearning.AI: Building AI Voice Agents for Production</CertTitle>
        </CertificationItem>
        <CertificationItem>
          <CertIcon><CourseraIcon /></CertIcon>
          <CertTitle>Stanford / Coursera: Machine Learning Specialization - Supervised Machine Learning: Regression & Classification</CertTitle>
        </CertificationItem>
      </CertificationsList>
    </Certifications>
  </ExperienceContent>
</ExperiencePage>
```

**Design Details**:
- Clean vertical timeline for work experience
- Achievement cards in grid layout with simple icons
- Clean certification list with minimal styling
- Minimal rustic touches: Warm colors, simple borders
- Hover effects on cards: subtle lift
- Staggered animations on scroll
- Leadership roles displayed as simple cards
- Workshop/outreach section with clean cards
- Tags for technologies used in each role

### 7. Contact Page

**Purpose**: Provide multiple contact methods and a simple form for direct communication

**Component Structure**:
```jsx
<ContactPage>
  <PageHeader>
    <PageTitle>Get In Touch</PageTitle>
    <PageSubtitle>Let's Connect & Collaborate</PageSubtitle>
  </PageHeader>
  
  <ContactContent>
    <ContactInfo>
      <InfoCard>
        <CardIcon><EmailIcon /></CardIcon>
        <CardTitle>Email</CardTitle>
        <CardLink href="mailto:abhavbhanot28@gmail.com">
          abhavbhanot28@gmail.com
        </CardLink>
        <CardDesc>For professional inquiries and opportunities</CardDesc>
      </InfoCard>
      
      <InfoCard>
        <CardIcon><PhoneIcon /></CardIcon>
        <CardTitle>Mobile</CardTitle>
        <CardLink href="tel:+917876445994">
          +91-7876445994
        </CardLink>
        <CardDesc>Available for calls and messages</CardDesc>
      </InfoCard>
      
      <InfoCard>
        <CardIcon><LinkedInIcon /></CardIcon>
        <CardTitle>LinkedIn</CardTitle>
        <CardLink href="https://linkedin.com/in/abhav-bhanot" target="_blank">
          Abhav Bhanot
        </CardLink>
        <CardDesc>Connect professionally</CardDesc>
      </InfoCard>
      
      <InfoCard>
        <CardIcon><GitHubIcon /></CardIcon>
        <CardTitle>GitHub</CardTitle>
        <CardLink href="https://github.com/AbhavBhanot" target="_blank">
          AbhavBhanot
        </CardLink>
        <CardDesc>Explore my code and projects</CardDesc>
      </InfoCard>
      
      <InfoCard>
        <CardIcon><ResumeIcon /></CardIcon>
        <CardTitle>Resume</CardTitle>
        <Button onClick={downloadResume}>Download PDF</Button>
        <CardDesc>View my complete professional profile</CardDesc>
      </InfoCard>
    </ContactInfo>
    
    <ContactFormSection>
      <FormTitle>Send a Message</FormTitle>
      <FormDescription>
        Have a project in mind or want to discuss opportunities? 
        Drop me a message and I'll get back to you soon!
      </FormDescription>
      
      <ContactForm onSubmit={handleSubmit}>
        <FormRow>
          <FormField>
            <Label htmlFor="name">Name *</Label>
            <Input 
              id="name"
              type="text" 
              placeholder="Your name" 
              required
            />
          </FormField>
          
          <FormField>
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="your.email@example.com" 
              required
            />
          </FormField>
        </FormRow>
        
        <FormField>
          <Label htmlFor="subject">Subject</Label>
          <Input 
            id="subject"
            type="text" 
            placeholder="What's this about?" 
          />
        </FormField>
        
        <FormField>
          <Label htmlFor="message">Message *</Label>
          <Textarea 
            id="message"
            placeholder="Your message..." 
            rows={6}
            required
          />
        </FormField>
        
        <FormActions>
          <Button type="submit" primary>
            <SendIcon /> Send Message
          </Button>
        </FormActions>
        
        {submitStatus === 'success' && (
          <SuccessMessage>
            ✓ Message sent successfully! I'll get back to you soon.
          </SuccessMessage>
        )}
        
        {submitStatus === 'error' && (
          <ErrorMessage>
            ✗ Something went wrong. Please try again or email me directly.
          </ErrorMessage>
        )}
      </ContactForm>
    </ContactFormSection>
  </ContactContent>
  
  <SocialLinks>
    <SocialTitle>Find Me Online</SocialTitle>
    <SocialGrid>
      <SocialLink href="https://linkedin.com/in/abhav-bhanot" target="_blank">
        <LinkedInIcon />
      </SocialLink>
      <SocialLink href="https://github.com/AbhavBhanot" target="_blank">
        <GitHubIcon />
      </SocialLink>
    </SocialGrid>
  </SocialLinks>
</ContactPage>
```

**Design Details**:
- Two-column layout: contact info cards left, form right (desktop)
- Stacked layout on mobile
- Contact info cards with icons and simple borders
- Form with clean white/surface background
- Validation and success/error states with inline messages
- Hover effects on contact cards and social links
- Fade-in animation on page load
- Minimal styling: Clean design, warm accent colors
- Social links with icon buttons at bottom

### 8. Layout Components

#### Header/Navigation

```jsx
<Header>
  <Logo to="/">
    <LogoText>Abhav Bhanot</LogoText>
    <LogoSubtext>AI/ML Engineer</LogoSubtext>
  </Logo>
  
  <Nav>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/skills">Skills</NavLink>
    <NavLink to="/experience">Experience</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </Nav>
  
  <HeaderActions>
    <ThemeToggle />
    <MobileMenuButton onClick={toggleMobileMenu}>
      <MenuIcon />
    </MobileMenuButton>
  </HeaderActions>
  
  <MobileMenu isOpen={mobileMenuOpen}>
    <MobileNavLink to="/" onClick={closeMobileMenu}>Home</MobileNavLink>
    <MobileNavLink to="/about" onClick={closeMobileMenu}>About</MobileNavLink>
    <MobileNavLink to="/projects" onClick={closeMobileMenu}>Projects</MobileNavLink>
    <MobileNavLink to="/skills" onClick={closeMobileMenu}>Skills</MobileNavLink>
    <MobileNavLink to="/experience" onClick={closeMobileMenu}>Experience</MobileNavLink>
    <MobileNavLink to="/contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
  </MobileMenu>
</Header>
```

**Design Details**:
- Fixed/sticky header with semi-transparent backdrop blur
- Logo with handwritten font (Caveat) for name only
- Navigation links with active state highlighting (simple underline)
- Mobile hamburger menu with slide-in animation
- Clean design with warm accent colors
- Smooth page transitions when navigating

#### Theme Toggle

```jsx
<ThemeToggle>
  <ToggleButton onClick={toggleTheme} aria-label="Toggle dark mode">
    <ToggleTrack isDark={isDark}>
      <ToggleThumb isDark={isDark}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </ToggleThumb>
    </ToggleTrack>
  </ToggleButton>
</ThemeToggle>
```

**Design Details**:
- Toggle switch with sun/moon icons
- Smooth transition animation
- Persist preference in localStorage
- Smooth color transition across all elements (0.3s ease)
- Rustic styling: Vintage toggle design

#### Footer

```jsx
<Footer>
  <FooterContent>
    <FooterBrand>
      <BrandName>Abhav Bhanot</BrandName>
      <BrandTagline>Building intelligent solutions with AI & ML</BrandTagline>
    </FooterBrand>
    
    <FooterLinks>
      <FooterSection>
        <SectionTitle>Navigate</SectionTitle>
        <LinkList>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/projects">Projects</FooterLink>
          <FooterLink to="/skills">Skills</FooterLink>
          <FooterLink to="/experience">Experience</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </LinkList>
      </FooterSection>
      
      <FooterSection>
        <SectionTitle>Connect</SectionTitle>
        <SocialLinks>
          <SocialLink href="mailto:abhavbhanot28@gmail.com">
            <EmailIcon /> Email
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/abhav-bhanot" target="_blank">
            <LinkedInIcon /> LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/AbhavBhanot" target="_blank">
            <GitHubIcon /> GitHub
          </SocialLink>
        </SocialLinks>
      </FooterSection>
    </FooterLinks>
  </FooterContent>
  
  <FooterBottom>
    <Copyright>© 2024 Abhav Bhanot. All rights reserved.</Copyright>
    <FooterNote>Built with React & passion for AI</FooterNote>
  </FooterBottom>
</Footer>
```

**Design Details**:
- Multi-column layout on desktop, stacked on mobile
- Clean background with warm color
- Social links with icons and hover effects
- Navigation links to all pages
- Copyright and branding information
- Minimal styling with warm accent colors

#### Page Transition

```jsx
<PageTransition>
  <AnimatePresence mode="wait">
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
</PageTransition>
```

**Design Details**:
- Smooth fade and slide transitions between pages
- 300ms duration for quick, responsive feel
- Exit animation before new page enters
- Prevents layout shift during transitions

## Data Models

### Project Data Structure

```javascript
{
  id: string,
  title: string,
  description: string,
  longDescription: string,
  image: string,
  techStack: string[],
  github: string,
  liveDemo: string | null,
  featured: boolean,
  category: 'ml' | 'ai' | 'fullstack' | 'cv' | 'nlp',
  date: string,
  highlights: string[]
}
```

### Skill Data Structure

```javascript
{
  name: string,
  category: 'language' | 'framework' | 'tool' | 'cloud' | 'database',
  level: number, // 0-100
  icon: string | Component
}
```

### Experience Data Structure

```javascript
{
  id: string,
  type: 'internship' | 'hackathon' | 'certification' | 'leadership',
  title: string,
  organization: string,
  date: string,
  endDate: string | null,
  description: string,
  tags: string[],
  link: string | null
}
```

## Design System

### Color Palette

**Light Theme (Modern Rustic)**:
```css
/* Primary Colors - Warm, earthy tones */
--color-primary: #d97706;        /* Warm amber/orange */
--color-secondary: #92400e;      /* Deep brown */
--color-accent: #059669;         /* Forest green */

/* Background Colors - Warm neutrals */
--color-background: #fef3c7;     /* Warm cream */
--color-surface: #fffbeb;        /* Light warm white */
--color-card: #ffffff;           /* Pure white for cards */

/* Text Colors */
--color-text-primary: #1c1917;   /* Almost black */
--color-text-secondary: #57534e; /* Warm gray */
--color-text-muted: #78716c;     /* Light warm gray */

/* Border & Divider */
--color-border: #d6d3d1;         /* Warm light gray */
--color-divider: #e7e5e4;        /* Very light warm gray */

/* Semantic Colors */
--color-success: #059669;        /* Green */
--color-error: #dc2626;          /* Red */
--color-warning: #d97706;        /* Amber */
--color-info: #0284c7;           /* Sky blue */

/* Rustic Accents */
--color-vintage: #92400e;        /* Vintage brown */
--color-paper: #fef3c7;          /* Paper texture color */
--color-wood: #78350f;           /* Wood tone */
```

**Dark Theme (Modern Rustic)**:
```css
/* Primary Colors - Muted warm tones */
--color-primary: #fbbf24;        /* Lighter amber */
--color-secondary: #d97706;      /* Warm orange */
--color-accent: #10b981;         /* Emerald green */

/* Background Colors - Dark warm tones */
--color-background: #1c1917;     /* Dark warm gray */
--color-surface: #292524;        /* Slightly lighter warm gray */
--color-card: #44403c;           /* Card background */

/* Text Colors */
--color-text-primary: #fafaf9;   /* Off-white */
--color-text-secondary: #d6d3d1; /* Light warm gray */
--color-text-muted: #a8a29e;     /* Muted warm gray */

/* Border & Divider */
--color-border: #57534e;         /* Dark warm gray */
--color-divider: #44403c;        /* Darker warm gray */

/* Semantic Colors */
--color-success: #10b981;        /* Emerald */
--color-error: #ef4444;          /* Red */
--color-warning: #fbbf24;        /* Amber */
--color-info: #38bdf8;           /* Sky blue */

/* Rustic Accents */
--color-vintage: #fbbf24;        /* Vintage gold */
--color-paper: #292524;          /* Dark paper texture */
--color-wood: #d97706;           /* Warm wood tone */
```

### Typography

```css
/* Font Families */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Playfair Display', 'Georgia', serif;  /* Elegant serif for headings */
--font-accent: 'Caveat', 'Brush Script MT', cursive;   /* Handwritten for accents */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
--text-7xl: 4.5rem;    /* 72px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

**Typography Usage**:
- **Headings**: Use `--font-heading` (Playfair Display) for page titles and section headings
- **Body Text**: Use `--font-primary` (Inter) for all body content
- **Accents**: Use `--font-accent` (Caveat) for decorative elements, quotes, or special highlights
- **Code**: Use `--font-mono` for technical content and code snippets

### Spacing

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
```

### Shadows & Effects

```css
/* Shadows - Warmer, softer shadows for rustic feel */
--shadow-sm: 0 1px 2px 0 rgb(120 53 15 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(120 53 15 / 0.15);
--shadow-lg: 0 10px 15px -3px rgb(120 53 15 / 0.2);
--shadow-xl: 0 20px 25px -5px rgb(120 53 15 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.06);

/* Vintage/Rustic Effects */
--texture-paper: url('/textures/paper.png');
--texture-noise: url('/textures/noise.png');
--texture-wood: url('/textures/wood.png');

/* Filters */
--filter-vintage: sepia(0.1) contrast(1.05);
--filter-hover: brightness(1.05) contrast(1.02);
```

### Border Radius

```css
--radius-sm: 0.25rem;  /* 4px */
--radius-md: 0.5rem;   /* 8px */
--radius-lg: 0.75rem;  /* 12px */
--radius-xl: 1rem;     /* 16px */
--radius-full: 9999px;
```

## Animations

### Animation Utilities

```javascript
// Fade in from bottom
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Fade in from left
export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Fade in from right
export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Stagger children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Scale and lift on hover (for cards)
export const cardHover = {
  whileHover: { 
    scale: 1.03, 
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Gentle scale on hover (for buttons)
export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

// Vintage paper reveal
export const paperReveal = {
  initial: { opacity: 0, scale: 0.95, rotateX: -10 },
  animate: { opacity: 1, scale: 1, rotateX: 0 },
  transition: { duration: 0.7, ease: 'easeOut' }
};
```

### Scroll Animations

- Use Intersection Observer API to trigger animations when elements enter viewport
- Stagger project card animations with 150ms delay between each
- Fade in section titles with slide-up effect
- Timeline items animate from alternating sides
- Skill cards fade in with stagger effect
- Add subtle parallax effect to hero section background
- Smooth scroll behavior for navigation links

## Error Handling

### Form Validation

- Client-side validation for contact form
- Email format validation
- Required field validation
- Display inline error messages
- Prevent submission with invalid data

### Image Loading

- Lazy loading for project images
- Placeholder images while loading
- Fallback images for broken links
- Optimized image formats (WebP with fallback)

### External Links

- Validate GitHub and live demo URLs
- Handle missing live demo gracefully
- Open all external links in new tabs with `rel="noopener noreferrer"`

### Theme Persistence

- Try-catch for localStorage access
- Fallback to system preference if localStorage unavailable
- Handle theme toggle errors gracefully

## Testing Strategy

### Unit Testing

- Test individual components in isolation
- Test utility functions (animations, theme toggle)
- Test data transformation functions
- Use React Testing Library and Vitest

**Key Test Cases**:
- Hero section renders with correct content
- Project cards display all required information
- Theme toggle switches between light and dark modes
- Contact form validates input correctly
- Navigation links scroll to correct sections

### Integration Testing

- Test component interactions
- Test form submission flow
- Test theme persistence
- Test responsive behavior at different breakpoints

### Accessibility Testing

- Keyboard navigation works for all interactive elements
- Screen reader compatibility
- Color contrast meets WCAG AA standards
- Focus indicators visible
- ARIA labels present where needed

### Performance Testing

- Lighthouse score > 90 for all metrics
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Cumulative Layout Shift < 0.1
- Image optimization and lazy loading

### Cross-Browser Testing

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Rustic Design Elements (Minimalistic Approach)

### Subtle Textures

**Paper Texture**:
- Very subtle paper grain overlay on backgrounds only
- Opacity: 0.02-0.03 (barely visible, adds warmth)
- Applied sparingly to: Page backgrounds only

**Noise Texture**:
- Fine grain noise for depth
- Opacity: 0.015
- Applied to: Hero section background only

### Minimal Vintage Touches

**Borders**:
- Simple single-line borders with warm colors
- No decorative elements, just clean lines
- Subtle border radius (8-12px)

**Typography Accents**:
- Handwritten font (Caveat) used ONLY for name/logo
- Everything else uses clean sans-serif (Inter) and serif (Playfair Display) for headings
- No drop caps or decorative underlines

### Restrained Color Treatments

**Images**:
- No filters by default
- Very subtle sepia (5%) on hover only
- Keep images clean and professional

### Simple Interactive Elements

**Hover States**:
- Subtle lift effect (4-8px) with soft shadow
- No rotation
- Smooth transitions (0.3s)

**Button Styles**:
- Clean, flat design with subtle shadow
- Simple border or solid fill
- Minimal hover effect (slight scale or color shift)

**Card Styles**:
- Clean white/surface color cards
- Single soft shadow
- No layered effects or corner folds
- Simple hover: lift + shadow increase

## SEO and Metadata

### HTML Head

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Abhav Bhanot | AI/ML Engineering Student | Portfolio</title>
  <meta name="description" content="Portfolio of Abhav Bhanot, AI/ML Engineering student at Symbiosis Institute of Technology. Showcasing machine learning projects, deep learning applications, and AI innovations." />
  <meta name="keywords" content="AI, Machine Learning, Deep Learning, NLP, Computer Vision, Portfolio, Abhav Bhanot, Python, PyTorch, TensorFlow" />
  <meta name="author" content="Abhav Bhanot" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Abhav Bhanot | AI/ML Engineering Portfolio" />
  <meta property="og:description" content="Explore AI/ML projects and innovations by Abhav Bhanot" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://abhavbhanot.dev" />
  <meta property="og:image" content="/og-image.jpg" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Abhav Bhanot | AI/ML Engineering Portfolio" />
  <meta name="twitter:description" content="Explore AI/ML projects and innovations" />
  <meta name="twitter:image" content="/twitter-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</head>
```

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abhav Bhanot",
  "jobTitle": "AI/ML Engineering Student",
  "url": "https://abhavbhanot.dev",
  "sameAs": [
    "https://linkedin.com/in/abhav-bhanot",
    "https://github.com/AbhavBhanot"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Symbiosis Institute of Technology"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision"
  ]
}
```

## Deployment and Build

### Build Configuration

```javascript
// vite.config.js
export default {
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
}
```

### Asset Optimization

- Compress images (WebP format, < 200KB each)
- Minify CSS and JavaScript
- Tree-shake unused code
- Code splitting for better caching
- Lazy load images and components

### Hosting Recommendations

1. **Vercel** (Recommended): Zero-config deployment, automatic HTTPS, global CDN
2. **Netlify**: Similar features, good for static sites
3. **GitHub Pages**: Free hosting for personal projects

### Environment Variables

```
VITE_GITHUB_USERNAME=AbhavBhanot
VITE_EMAIL=abhavbhanot28@gmail.com
VITE_LINKEDIN_URL=https://linkedin.com/in/abhav-bhanot
VITE_RESUME_URL=/resume.pdf
```

## Future Enhancements

1. **Blog Section**: Add a blog for technical articles and tutorials
2. **Project Filtering**: Filter projects by technology or category
3. **Analytics**: Integrate Google Analytics or privacy-friendly alternative
4. **Animations**: More advanced scroll-triggered animations
5. **Internationalization**: Multi-language support
6. **CMS Integration**: Use headless CMS for easier content updates
7. **Performance Monitoring**: Real User Monitoring (RUM) integration
