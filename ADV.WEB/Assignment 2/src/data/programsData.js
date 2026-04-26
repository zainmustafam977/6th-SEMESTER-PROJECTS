// Programs data array — stored in a component-accessible module
// All program info is array-based with no backend required

const programsData = [
  {
    id: "bs-computer-science",
    name: "BS Computer Science",
    shortName: "BSCS",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    creditHours: 130,
    eligibility:
      "Intermediate (FSc Pre-Engineering / ICS) or equivalent with at least 50% marks. Students must pass the UMT entry test.",
    description:
      "The BS Computer Science program equips students with a deep understanding of computing theory, software engineering, algorithms, and modern development practices. Graduates are prepared for careers in software development, systems architecture, and technology leadership.",
    icon: "💻",
    color: "#3b82f6",
    keySubjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Operating Systems",
      "Software Engineering",
      "Computer Networks",
      "Web Development",
      "Artificial Intelligence",
    ],
  },
  {
    id: "bs-data-science",
    name: "BS Data Science",
    shortName: "BSDS",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    creditHours: 130,
    eligibility:
      "Intermediate (FSc Pre-Engineering / ICS) or equivalent with at least 50% marks. Strong foundation in Mathematics is preferred.",
    description:
      "The BS Data Science program trains students in the art of extracting insights from complex datasets using statistical methods, machine learning, and data visualization. Graduates are in high demand across finance, healthcare, technology, and government sectors.",
    icon: "📊",
    color: "#8b5cf6",
    keySubjects: [
      "Statistics & Probability",
      "Machine Learning",
      "Data Mining",
      "Big Data Analytics",
      "Data Visualization",
      "Python for Data Science",
      "Deep Learning",
      "Natural Language Processing",
    ],
  },
  {
    id: "bs-artificial-intelligence",
    name: "BS Artificial Intelligence",
    shortName: "BSAI",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    creditHours: 133,
    eligibility:
      "Intermediate (FSc Pre-Engineering / ICS) or equivalent with at least 50% marks. Aptitude for problem solving is desired.",
    description:
      "The BS Artificial Intelligence program covers the fundamentals of intelligent systems, from neural networks and computer vision to robotics and expert systems. Students learn to build AI-powered solutions that solve real-world problems.",
    icon: "🤖",
    color: "#06b6d4",
    keySubjects: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Robotics",
      "Neural Networks",
      "Expert Systems",
      "Natural Language Processing",
      "Reinforcement Learning",
    ],
  },
  {
    id: "bs-informatics",
    name: "BS Informatics",
    shortName: "BSI",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    creditHours: 126,
    eligibility:
      "Intermediate (FSc / ICS / ICom) or equivalent with at least 45% marks. Basic understanding of computers is helpful.",
    description:
      "The BS Informatics program bridges the gap between technology and business, focusing on information management, systems analysis, and digital transformation. Students gain expertise in leveraging IT to drive organizational success.",
    icon: "📡",
    color: "#10b981",
    keySubjects: [
      "Information Systems",
      "Database Management",
      "System Analysis & Design",
      "Human-Computer Interaction",
      "IT Project Management",
      "Business Intelligence",
      "Cloud Computing",
      "Digital Transformation",
    ],
  },
  {
    id: "bs-cyber-security",
    name: "BS Cyber Security",
    shortName: "BSCY",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    creditHours: 131,
    eligibility:
      "Intermediate (FSc Pre-Engineering / ICS) or equivalent with at least 50% marks. Interest in network security is beneficial.",
    description:
      "The BS Cyber Security program prepares students to defend organizations against cyber threats. Students learn ethical hacking, digital forensics, network security, and security governance to become the frontline defenders of the digital world.",
    icon: "🛡️",
    color: "#ef4444",
    keySubjects: [
      "Network Security",
      "Ethical Hacking",
      "Digital Forensics",
      "Cryptography",
      "Security Governance",
      "Penetration Testing",
      "Malware Analysis",
      "Incident Response",
    ],
  },
  {
    id: "ms-computer-science",
    name: "MS Computer Science",
    shortName: "MSCS",
    level: "Graduate",
    duration: "2 Years (4 Semesters)",
    creditHours: 30,
    eligibility:
      "BS/BE in Computer Science or related field with at least 2.5 CGPA or 60% marks. GAT (General) with 50% score required.",
    description:
      "The MS Computer Science program provides advanced knowledge in computing research, specialization tracks, and thesis-based inquiry. Students develop expertise in emerging areas like cloud computing, distributed systems, and advanced algorithms.",
    icon: "🎓",
    color: "#f59e0b",
    keySubjects: [
      "Advanced Algorithms",
      "Distributed Systems",
      "Cloud Computing",
      "Research Methodology",
      "Advanced Database Systems",
      "Software Architecture",
      "Thesis / Research Project",
      "Machine Learning (Advanced)",
    ],
  },
  {
    id: "ms-artificial-intelligence",
    name: "MS Artificial Intelligence",
    shortName: "MSAI",
    level: "Graduate",
    duration: "2 Years (4 Semesters)",
    creditHours: 30,
    eligibility:
      "BS/BE in Computer Science, AI, Data Science, or related field with at least 2.5 CGPA or 60% marks. GAT (General) with 50% score required.",
    description:
      "The MS Artificial Intelligence program offers cutting-edge research opportunities in deep learning, autonomous systems, and AI ethics. Students work on industry-relevant projects and contribute to the growing body of AI knowledge.",
    icon: "🧠",
    color: "#ec4899",
    keySubjects: [
      "Advanced Deep Learning",
      "Autonomous Systems",
      "AI Ethics & Policy",
      "Computer Vision (Advanced)",
      "Generative AI",
      "Reinforcement Learning",
      "Thesis / Research Project",
      "AI for Healthcare",
    ],
  },
];

export default programsData;
