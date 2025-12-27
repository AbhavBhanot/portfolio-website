# Implementation Plan

- [ ] 1. Set up project structure and dependencies
  - Initialize React project with Vite
  - Install dependencies: react-router-dom, framer-motion, react-icons
  - Create folder structure for pages, components, data, hooks, styles, and assets
  - Set up CSS Modules configuration
  - _Requirements: 12.1, 12.2, 12.3_

- [x] 2. Create design system and global styles
  - [x] 2.1 Define CSS custom properties for colors, typography, spacing, shadows
    - Create variables.css with light and dark theme color palettes (warm rustic colors)
    - Define typography scale and font families (Inter, Playfair Display, Caveat)
    - Set up spacing, border radius, and shadow variables
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [x] 2.2 Create global styles and reset
    - Write global.css with CSS reset and base styles
    - Apply subtle paper texture to body background (minimal, 0.02 opacity)
    - Set up smooth transitions for theme switching
    - _Requirements: 7.1, 7.2, 7.5_
  
  - [x] 2.3 Implement theme toggle functionality
    - Create useTheme custom hook with localStorage persistence
    - Implement theme context provider
    - Create ThemeToggle component with sun/moon icons
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 3. Build layout components
  - [x] 3.1 Create Header component with navigation
    - Build responsive header with logo (handwritten font for name)
    - Implement navigation links with React Router
    - Add active state highlighting for current page
    - Create mobile hamburger menu with slide-in animation
    - _Requirements: 1.4, 8.1, 8.2_
  
  - [x] 3.2 Create Footer component
    - Build multi-column footer layout (responsive)
    - Add navigation links and social links
    - Include copyright and branding information
    - _Requirements: 6.2, 6.3_
  
  - [x] 3.3 Create PageTransition wrapper component
    - Implement page transition animations with Framer Motion
    - Add fade and slide effects between route changes
    - _Requirements: 7.2, 7.3, 7.4_

- [x] 4. Create reusable UI components
  - [x] 4.1 Build Button component
    - Create button with primary and secondary variants
    - Add hover effects (subtle scale)
    - Support both Link (internal) and anchor (external) functionality
    - _Requirements: 1.4, 1.5, 7.3, 7.4_
  
  - [x] 4.2 Build Card component
    - Create card with clean design and soft shadow
    - Add hover effect (lift with shadow increase)
    - Make it flexible for different content types
    - _Requirements: 3.2, 7.3, 7.4_
  
  - [x] 4.3 Build Badge component
    - Create badge for tech stack and tags
    - Style with warm accent colors
    - _Requirements: 2.2, 3.6_

- [x] 5. Implement data layer
  - [x] 5.1 Create personal information data
    - Define personal.js with name, title, bio, contact info
    - Include email (abhavbhanot28@gmail.com), phone (+91-7876445994)
    - Add LinkedIn and GitHub URLs
    - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3_
  
  - [x] 5.2 Create projects data
    - Define projects.js with 4-8 AI/ML projects from resume
    - Include: VRU Detection, Multimodal Healthcare Platform, RecruitEdge AI, SQL Genius
    - Add project details: title, description, tech stack, GitHub links, live demo links
    - Mark featured project
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 10.1, 10.2, 10.3_
  
  - [x] 5.3 Create skills data
    - Define skills.js with categorized skills from resume
    - Categories: Languages, Frameworks, AI/ML Specializations, Tools, Soft Skills
    - Include: Python, SQL, JS/TS, PyTorch, TensorFlow, LangChain, etc.
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_
  
  - [x] 5.4 Create experience data
    - Define experience.js with internships, hackathons, achievements, certifications
    - Include SCAAI internship, Newtuple internship
    - Add hackathon achievements: ImaGenAI 3rd place, Hack-A-League, etc.
    - Include certifications from resume
    - Add leadership roles: Co-Head of AI Club, MUN, Debate, Sports
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 6. Build Home page
  - [x] 6.1 Create Hero section component
    - Display name "Abhav Bhanot" with handwritten font (Caveat)
    - Show title "AI/ML Engineering Student | Machine Learning Enthusiast | Tech Innovator"
    - Add 2-3 sentence introduction
    - Include "View Projects" and "Download Resume" buttons
    - Add fade-in animation on load
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 7.2_
  
  - [x] 6.2 Create QuickLinks section
    - Build 4 cards linking to About, Skills, Experience, Contact pages
    - Add icons and descriptions for each card
    - Implement hover effects and animations
    - _Requirements: 7.2, 7.3, 7.4, 8.1_

- [x] 7. Build About page
  - [x] 7.1 Create About page layout
    - Build responsive two-column layout (profile left, content right)
    - Add page header with title and subtitle
    - _Requirements: 2.1, 2.4, 8.1_
  
  - [x] 7.2 Create ProfileSection component
    - Add profile image with simple border
    - Write bio paragraphs about background and journey
    - _Requirements: 2.1_
  
  - [x] 7.3 Create Education section
    - Display SIT education card with degree, GPA, courses
    - Display St. Edward's School card with achievements
    - _Requirements: 2.1_
  
  - [x] 7.4 Create Interests section
    - Build grid of interest cards with icons
    - Include: AI, ML, Deep Learning, NLP, Computer Vision, Cloud Deployments
    - _Requirements: 2.2_
  
  - [x] 7.5 Create CoreStrengths section
    - Display core strengths as list or badges
    - Include: Leadership, Teamwork, Problem Solving, Communication, etc.
    - _Requirements: 2.2_

- [x] 8. Build Projects page
  - [x] 8.1 Create Projects page layout
    - Add page header with title and subtitle
    - Set up grid layout for project cards
    - _Requirements: 3.1, 3.2, 8.1_
  
  - [x] 8.2 Create FeaturedProject component
    - Display featured project banner with large image
    - Show title, description, tech stack
    - Add "View Details", "Live Demo", and "GitHub" buttons
    - _Requirements: 10.1, 10.2, 10.3_
  
  - [x] 8.3 Create ProjectCard component
    - Build card with image, title, short description
    - Add tech stack badges (show first 4)
    - Include hover overlay with "View Details" button
    - Add icon buttons for Live Demo and GitHub
    - Implement staggered fade-in animation
    - _Requirements: 3.2, 3.3, 3.4, 3.5, 3.6, 7.2, 7.3, 7.4_
  
  - [x] 8.4 Create ProjectGrid component
    - Implement responsive grid (3 cols desktop, 2 tablet, 1 mobile)
    - Map through projects data and render ProjectCards
    - _Requirements: 3.1, 3.2, 8.1_

- [x] 9. Build Project Detail page
  - [x] 9.1 Create ProjectDetail page layout
    - Add back button to projects page
    - Display project hero with title and metadata
    - _Requirements: 3.2, 8.1_
  
  - [x] 9.2 Create ProjectDetailView component
    - Show large project image
    - Display long description and overview
    - Add key features/highlights section
    - Show tech stack with icons
    - Include "Live Demo" and "GitHub" buttons
    - _Requirements: 3.2, 3.3, 3.4, 3.5, 3.6_
  
  - [x] 9.3 Add related projects section
    - Display 3-4 related project cards at bottom
    - _Requirements: 3.1, 3.2_

- [x] 10. Build Skills page
  - [x] 10.1 Create Skills page layout
    - Add page header with title and subtitle
    - Set up grid layout for skill categories
    - _Requirements: 4.1, 8.1_
  
  - [x] 10.2 Create SkillCategory component
    - Build category card with clean header
    - Display category title
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_
  
  - [x] 10.3 Create SkillBadge component
    - Display skill with icon and name
    - Add subtle hover effect
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_
  
  - [x] 10.4 Populate all skill categories
    - Languages: Python, SQL, JavaScript/TypeScript
    - Frameworks: PyTorch, TensorFlow, LangChain, HuggingFace, Scikit-learn, Pandas, NumPy, React, Docker
    - AI/ML Specializations: LLM Fine-tuning, RAG, NLP, Computer Vision, Data EDA, Model Benchmarking
    - Tools: Git, Linux, Jupyter, VS Code, XGBoost, RandomForest, Vector Search
    - Soft Skills: Leadership, Collaboration, Problem Solving, Adaptability, Time Management, Technical Writing, Public Speaking
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

- [x] 11. Build Experience page
  - [x] 11.1 Create Experience page layout
    - Add page header with title and subtitle
    - Set up sections for work experience, achievements, workshops, leadership, certifications
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 8.1_
  
  - [x] 11.2 Create Timeline component for work experience
    - Build vertical timeline layout
    - Create TimelineItem component with dot and content
    - _Requirements: 5.1_
  
  - [x] 11.3 Add SCAAI internship to timeline
    - Title: AI/ML Project Intern (Full-time)
    - Date: June 2024 - Present
    - Description, highlights, and tech tags
    - _Requirements: 5.1_
  
  - [x] 11.4 Add Newtuple internship to timeline
    - Title: Research Intern - Generative AI (Full-time)
    - Date: May 2023 - Aug 2025
    - Description, highlights, and tech tags
    - _Requirements: 5.1_
  
  - [x] 11.5 Create AchievementCard component
    - Display achievement with icon, title, event, organization, date
    - Add hover effect
    - _Requirements: 5.2_
  
  - [x] 11.6 Add all hackathon achievements
    - ImaGenAI 3rd place (IIT Delhi, 2024)
    - Best Team Collaboration (Hack-A-League 3.0, 2024)
    - Top 10 NYD Hackathon (Multilingual RAG)
    - Top 7 Zenathon
    - Yuvahan 2025 Selection
    - AMD's AI Sprint Hackathon (IIT Bombay)
    - _Requirements: 5.2_
  
  - [x] 11.7 Add workshops and outreach section
    - AI Tools Workshop (800+ attendees)
    - AI Session with professionals
    - _Requirements: 5.2_
  
  - [x] 11.8 Add leadership and activities section
    - Co-Head of AI Club
    - Core Team Member - Ted Club/MUN Society
    - Model United Nations achievements
    - Debate achievements
    - Sports achievements
    - _Requirements: 5.2_
  
  - [x] 11.9 Add certifications section
    - List all 9 certifications from resume
    - Display with icons and clean styling
    - _Requirements: 5.3_

- [x] 12. Build Contact page
  - [x] 12.1 Create Contact page layout
    - Add page header with title and subtitle
    - Set up two-column layout (info left, form right)
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 8.1_
  
  - [x] 12.2 Create ContactInfo component
    - Build info cards for email, phone, LinkedIn, GitHub, resume
    - Add icons and descriptions
    - Include hover effects
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [x] 12.3 Create ContactForm component
    - Build form with fields: name, email, subject, message
    - Add form validation (required fields, email format)
    - Implement submit handler with success/error states
    - Display inline validation messages
    - _Requirements: 6.5_
  
  - [x] 12.4 Add social links section
    - Display LinkedIn and GitHub icon buttons
    - _Requirements: 6.2, 6.3_

- [x] 13. Implement routing and navigation
  - [x] 13.1 Set up React Router
    - Configure routes for all pages: /, /about, /projects, /projects/:id, /skills, /experience, /contact
    - Wrap app with BrowserRouter
    - _Requirements: 8.1, 8.2_
  
  - [x] 13.2 Implement navigation functionality
    - Ensure all navigation links work correctly
    - Add active state highlighting in header
    - Test mobile menu navigation
    - _Requirements: 8.1, 8.2_
  
  - [x] 13.3 Add scroll to top on route change
    - Implement scroll restoration on page navigation
    - _Requirements: 8.1_

- [x] 14. Add animations and interactions
  - [x] 14.1 Implement scroll-triggered animations
    - Use Intersection Observer for fade-in effects
    - Add staggered animations for project cards
    - Animate timeline items
    - _Requirements: 7.2, 7.3, 7.4_
  
  - [x] 14.2 Add hover effects to all interactive elements
    - Cards: lift with shadow increase
    - Buttons: subtle scale
    - Links: color change
    - _Requirements: 7.3, 7.4_
  
  - [x] 14.3 Implement page transitions
    - Add smooth transitions between pages using Framer Motion
    - _Requirements: 7.2_

- [x] 15. Optimize for responsiveness
  - [x] 15.1 Test and fix mobile layouts
    - Ensure all pages work on mobile (320px - 640px)
    - Fix header and navigation for mobile
    - Stack columns appropriately
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [x] 15.2 Test and fix tablet layouts
    - Ensure all pages work on tablet (640px - 1024px)
    - Adjust grid columns (2 for projects, etc.)
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [x] 15.3 Test and fix desktop layouts
    - Ensure all pages work on desktop (1024px+)
    - Verify multi-column layouts
    - _Requirements: 8.1, 8.2, 8.3_

- [x] 16. Add SEO and metadata
  - [x] 16.1 Create SEO metadata for all pages
    - Add title, description, keywords meta tags
    - Include Open Graph tags for social sharing
    - Add Twitter Card tags
    - _Requirements: 11.1, 11.2, 11.3, 11.4_
  
  - [x] 16.2 Add structured data (JSON-LD)
    - Implement Person schema for homepage
    - _Requirements: 11.1, 11.2_
  
  - [x] 16.3 Ensure all external links open in new tab
    - Add target="_blank" and rel="noopener noreferrer" to external links
    - _Requirements: 11.4_

- [ ] 17. Implement resume download functionality
  - [ ] 17.1 Add resume PDF to public folder
    - Place resume.pdf in public directory
    - _Requirements: 1.5, 6.4_
  
  - [ ] 17.2 Implement download functionality
    - Create download handler for resume buttons
    - Test download on all browsers
    - _Requirements: 1.5, 6.4_

- [ ] 18. Final polish and optimization
  - [ ] 18.1 Optimize images
    - Compress project images
    - Add lazy loading for images
    - Use appropriate image formats
    - _Requirements: 12.4_
  
  - [ ] 18.2 Code cleanup and organization
    - Remove unused code and imports
    - Add comments for complex logic
    - Ensure consistent code style
    - _Requirements: 12.1, 12.2, 12.3_
  
  - [ ] 18.3 Test across browsers
    - Test on Chrome, Firefox, Safari, Edge
    - Fix any browser-specific issues
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [ ] 18.4 Performance optimization
    - Run Lighthouse audit
    - Optimize bundle size
    - Ensure fast load times
    - _Requirements: 12.4_

- [ ] 19. Build and deploy
  - [ ] 19.1 Configure build settings
    - Set up Vite build configuration
    - Configure environment variables
    - _Requirements: 12.4_
  
  - [ ] 19.2 Build production version
    - Run production build
    - Test production build locally
    - _Requirements: 12.4_
  
  - [ ] 19.3 Deploy to hosting platform
    - Deploy to Vercel, Netlify, or GitHub Pages
    - Configure custom domain (if applicable)
    - Test deployed site
    - _Requirements: 12.4_
