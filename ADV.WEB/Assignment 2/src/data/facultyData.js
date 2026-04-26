// Faculty data array — stored in a component-accessible module
// Faculty is rendered dynamically using .map()

import faculty1 from "../assets/images/faculty/faculty1.png";
import faculty2 from "../assets/images/faculty/faculty2.png";
import faculty3 from "../assets/images/faculty/faculty3.png";
import faculty4 from "../assets/images/faculty/faculty4.png";
import faculty5 from "../assets/images/faculty/faculty5.png";
import faculty6 from "../assets/images/faculty/faculty6.png";

const facultyData = [
  {
    id: 1,
    name: "Dr. Muhammad Ahmed Khan",
    designation: "Professor & Head of Department",
    image: faculty1,
    expertise: "Software Engineering, Cloud Computing, Distributed Systems",
    department: "Computer Science",
    publications: 85,
    experience: "20+ Years",
  },
  {
    id: 2,
    name: "Dr. Ayesha Siddiqui",
    designation: "Associate Professor",
    image: faculty2,
    expertise: "Artificial Intelligence, Machine Learning, NLP",
    department: "Artificial Intelligence",
    publications: 62,
    experience: "15 Years",
  },
  {
    id: 3,
    name: "Dr. Usman Tariq",
    designation: "Professor",
    image: faculty3,
    expertise: "Data Science, Big Data Analytics, Statistical Modeling",
    department: "Data Science",
    publications: 94,
    experience: "22 Years",
  },
  {
    id: 4,
    name: "Dr. Fatima Zahra",
    designation: "Assistant Professor",
    image: faculty4,
    expertise: "Computer Vision, Deep Learning, Generative AI",
    department: "Artificial Intelligence",
    publications: 38,
    experience: "8 Years",
  },
  {
    id: 5,
    name: "Dr. Khalid Mehmood",
    designation: "Professor",
    image: faculty5,
    expertise: "Cyber Security, Digital Forensics, Cryptography",
    department: "Cyber Security",
    publications: 110,
    experience: "25 Years",
  },
  {
    id: 6,
    name: "Dr. Ali Hassan Raza",
    designation: "Assistant Professor",
    image: faculty6,
    expertise: "Robotics, Autonomous Systems, IoT",
    department: "Computer Science",
    publications: 29,
    experience: "6 Years",
  },
];

export default facultyData;
