import { ResumeData } from './types';

export const RESUME: ResumeData = {
  name: "Ananya S M",
  title: "AI Prompt Associate @ OLA | Data Science Blogger",
  summary: `I have completed my BTech degree in Computer Science and Engineering, focusing on Data Science, at Presidency University Bangalore, with a CGPA of 8.46. I have a passion for data, coding, and analytics, and I enjoy using insights to solve real-world problems and create a positive impact. I have demonstrated my proficiency in Python, and web development by winning third place at the Analytics Attax competition organized by Techkriti'23 at IIT Kanpur. I am eager to connect with like-minded people and explore data-driven opportunities.`,
  social: {
    linkedin: "https://www.linkedin.com/in/ananyasm",
  },
  skills: [
    { category: "Languages", items: ["Python", "R", "SQL", "JavaScript", "HTML/CSS"] },
    { category: "Core", items: ["Data Structures & Algorithms", "Prompt Engineering", "Data Science", "Generative AI"] },
    { category: "Tools & Frameworks", items: ["Tailwind CSS", "React (Basic)", "Albumentations"] }
  ],
  experience: [
    {
      id: "exp1",
      role: "AI Prompt Associate",
      company: "Ola",
      duration: "March 2025 - Present",
      location: "Bengaluru, Karnataka, India",
      description: "Working on advanced prompt engineering and AI-driven solutions within the Krutrim team."
    },
    {
      id: "exp2",
      role: "AI Prompt Engineer",
      company: "Ola",
      duration: "July 2024 - February 2025",
      location: "Bengaluru, Karnataka, India",
      description: "Contributed to LLM optimization and dataset curation."
    },
    {
      id: "exp3",
      role: "Technical Content Writer",
      company: "GeeksforGeeks",
      duration: "April 2024 - June 2024",
      location: "Remote",
      description: "Authored blogs on different data science topics and their applications."
    },
    {
      id: "exp4",
      role: "Frontend Developer Intern",
      company: "HEXIRA DIGITAL",
      duration: "July 2022 - October 2022",
      location: "Bengaluru, Karnataka, India",
      description: "Created a portfolio website for a client utilizing HTML, CSS, and JavaScript. Contributed to responsive design development."
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "Presidency University Bangalore",
      degree: "B.Tech in Computer Science and Engineering (Data Science) - CGPA 8.46",
      year: "2020 - 2024"
    },
    {
      id: "edu2",
      institution: "Brilliant PU College",
      degree: "Pre University, PCMC",
      year: "2018 - 2020"
    }
  ],
  awards: [
    "Third Place Winners - Analytics Attax Competition (Techkriti'23, IIT Kanpur)",
  ],
  certifications: [
    "Certificate of Level 1.2: Qualifier Quiz of Flipkart GRiD 5.0 - Software Development Track",
    "Data Scientist Job Simulation"
  ],
  publications: [
    { id: "pub1", title: "Revolutionizing Agriculture with Generative Chatbots", description: "Exploring the impact of LLMs in agritech." },
    { id: "pub2", title: "Enhancing Deep Learning Models with Albumentations", description: "A guide to image augmentation techniques." },
    { id: "pub3", title: "How Can Deep Learning Be Applied to Predict Solar Flares?", description: "Predictive modeling for space weather events." },
    { id: "pub4", title: "The Creative Symphony of Generative AI in Music Composition", description: "Analyzing AI's role in creative arts." },
    { id: "pub5", title: "Artificial Intelligence and the Aesthetics of Image Generation", description: "A study on AI image synthesis quality." }
  ]
};