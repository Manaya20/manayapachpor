import { z } from "zod";

// Experience Data
export const experiences = [
  {
    title: "Technical Lead",
    company: "SRMKZILLA",
    location: "Chennai, India",
    period: "July 2024 - Present",
    responsibilities: [
      "Lead and coordinate technical projects from initiation to delivery, managing scope, budget, and timelines while ensuring alignment with organizational strategic goals.",
      "Oversee the development of key projects, including a collaboration app and KZMailer, by implementing technical strategies to ensure project success and long-term growth.",
      "Mentor and support associates, preparing them for leadership roles, while representing the technical team in decision-making and communication with the core management."
    ]
  },
  {
    title: "Development Intern",
    company: "Larsen & Toubro Hydrocarbon Engineering Limited",
    location: "",
    period: "June 2024 - July 2024",
    responsibilities: [
      "Designed and developed a license management website using Python Flask, integrating SQLAlchemy ORM with Oracle Database for seamless data handling.",
      "Implemented role-based access control, enabling efficient differentiation between user and admin functionalities, such as license allocation, modification, and revocation.",
      "Deployed the project on Microsoft Azure, ensuring reliable cloud-based storage and connectivity for license management systems."
    ]
  },
  {
    title: "Freelancer",
    company: "Findex",
    location: "",
    period: "October 2023 - November 2023",
    responsibilities: [
      "Built an AI tool-based website using Python, delivering a functional, user-friendly platform integrating AI tools with intuitive features for professionals and enthusiasts.",
      "Created a comprehensive catalog of AI tools across various domains, complete with detailed information and user ratings.",
      "Managed the database with DataGrip, implementing structured storage for tool data and user interactions, along with powerful keyword-based filtering for enhanced usability."
    ]
  }
];

// Projects Data
export const projects = [
  {
    title: "Fetal Health Classification",
    description: "Built classification models (SVM, KNN) achieving 93%-96% accuracy to predict fetal health using Kaggle's dataset.",
    technologies: ["Python", "Machine Learning", "SVM", "KNN"],
    github: "https://github.com/Manaya20",
    demo: "#"
  },
  {
    title: "Mental Health Risk Prediction",
    description: "Designed an ANN-based model to classify mental health risks among students, achieving 89%-95% accuracy.",
    technologies: ["Python", "Neural Networks", "ANN", "TensorFlow"],
    github: "https://github.com/Manaya20",
    demo: "#"
  },
  {
    title: "Leiomyioma Prediction",
    description: "Developed a machine learning model using Python and Scikit-learn to predict uterine fibroids based on patient data.",
    technologies: ["Python", "Scikit-learn", "Data Analysis", "Healthcare"],
    github: "https://github.com/Manaya20",
    demo: "#"
  },
  {
    title: "Kickology",
    description: "Created a sneaker e-commerce platform using Django, with a robust admin interface.",
    technologies: ["Python", "Django", "E-commerce", "Web Development"],
    github: "https://github.com/Manaya20",
    demo: "#"
  },
  {
    title: "Bounty",
    description: "A platform built with Node.js and React, connecting freelancers with clients to easily find and manage job opportunities.",
    technologies: ["Node.js", "React", "MongoDB", "Full Stack"],
    github: "https://github.com/Manaya20",
    demo: "#"
  }
];

// Skills Data
export const languages = [
  "Python", 
  "C/C++", 
  "JavaScript", 
  "TypeScript", 
  "SQL", 
  "HTML/CSS"
];

export const frameworks = [
  "Flask", 
  "FastAPI", 
  "Django", 
  "Node.js", 
  "Express.js", 
  "Jupyter"
];

export const databases = [
  "Oracle", 
  "SQLAlchemy", 
  "MongoDB", 
  "DataGrip", 
  "AirTable", 
  "Supabase"
];

export const cloudServices = [
  "Microsoft Azure", 
  "AWS"
];

export const mlData = [
  "Machine Learning", 
  "Deep Learning", 
  "Data Analysis", 
  "SAS"
];

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});
