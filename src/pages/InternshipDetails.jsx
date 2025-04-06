import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const internshipData = {
  "1": {
    title: "Cloud Computing",
    description: "Cloud Computing (AWS, AZURE, GCP)",
    location: "Delhi",
    duration: "3 Months",
    type: "Unpaid Internship",
    salary: "2.5 LPA to 5.5 LPA",
    applyBy: "13/02/2024",
    openings: 20,
    about:
      "Welcome to SoftMind Technologies, where innovation meets expertise! We are passionate about empowering individuals with cutting-edge tech skills, and our Cloud Computing Internship Program is designed to help you master AWS, Azure, and GCP.",
    programDetails: [
      "Service Models",
      "Deployment Models",
      "Networking and Content Delivery",
      "Containers and Orchestration",
      "Architecture and Virtualization",
    ],
    responsibilities: [
      "Deploying scalable apps on AWS/Azure",
      "Building cloud-native solutions",
      "Learning containerization tools",
    ],
    skills: ["Basic Cloud Concepts", "10+2 Education"],
  },
  "2": {
    title: "Web Development",
    description: "MERN Stack Development",
    location: "Remote",
    duration: "6 Months",
    type: "Paid Internship",
    salary: "4 LPA to 7 LPA",
    applyBy: "25/04/2024",
    openings: 15,
    about:
      "This internship will help you develop real-world MERN stack projects, build APIs, and collaborate using GitHub. Perfect for students looking to go full-stack!",
    programDetails: [
      "React Frontend",
      "Express.js Backend",
      "MongoDB Database Integration",
      "Node.js Server Setup",
    ],
    responsibilities: [
      "Build responsive UIs",
      "Create and test REST APIs",
      "Work on Git/GitHub with team",
    ],
    skills: ["JavaScript", "React", "MongoDB", "Git"],
  },
  "3": {
    title: "AI & Machine Learning",
    description: "Deep Learning & Data Science",
    location: "Bangalore",
    duration: "4 Months",
    type: "Unpaid Internship",
    salary: "N/A",
    applyBy: "10/05/2024",
    openings: 10,
    about:
      "Join our ML internship to learn how AI is transforming industries. You'll work with real datasets, learn TensorFlow, and build your own predictive models.",
    programDetails: [
      "Data Preprocessing & Cleaning",
      "Supervised & Unsupervised Learning",
      "TensorFlow & Keras",
      "Model Evaluation Techniques",
    ],
    responsibilities: [
      "Train machine learning models",
      "Analyze data trends",
      "Optimize algorithms",
    ],
    skills: ["Python", "Math Basics", "Problem Solving"],
  },
  "4": {
    title: "Cybersecurity",
    description: "Ethical Hacking & Security Analysis",
    location: "Mumbai",
    duration: "5 Months",
    type: "Paid Internship",
    salary: "5 LPA to 8 LPA",
    applyBy: "30/04/2024",
    openings: 12,
    about:
      "Learn how to defend systems and perform ethical hacking in our cybersecurity internship. You'll explore tools like Wireshark, Kali Linux, and more.",
    programDetails: [
      "Network Security Fundamentals",
      "Vulnerability Assessment",
      "Penetration Testing",
      "SIEM Tools",
    ],
    responsibilities: [
      "Simulate cyber attacks",
      "Monitor network traffic",
      "Identify system flaws",
    ],
    skills: ["Networking Basics", "Linux Commands", "Curiosity to Learn"],
  },
};

const InternshipDetails = () => {
  const { id } = useParams();
  const data = internshipData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="mt-20 text-center text-xl text-gray-700">
        Internship Not Found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 leading-tight">
        {data.title} Internship
        <span className="text-indigo-600"> ({data.duration})</span>
      </h1>

      {/* Card */}
      <div className="bg-[#F7F7FD] p-10 rounded-3xl shadow-lg border border-gray-200 space-y-10">

        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{data.title}</h2>
          <p className="text-gray-600 text-lg">{data.description}</p>

          <div className="flex flex-wrap items-start gap-4 mt-4 text-gray-700 font-medium">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-500" />
              {data.location}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-indigo-500" />
              {data.duration}
            </span>
            <span className="flex items-center gap-2">
              <FaBriefcase className="text-indigo-500" />
              {data.type}
            </span>
          </div>
        </div>

        {/* Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-800">💸 Salary</h3>
          <p className="text-lg text-gray-700">{data.salary}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">📅 Apply By</h3>
          <p className="text-lg text-gray-700">{data.applyBy}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">📖 About Us</h3>
          <p className="text-lg text-gray-700">{data.about}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">🎓 About this Internship Program</h3>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 text-base">
            {data.programDetails.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">🛠 Responsibilities</h3>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 text-base">
            {data.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">🧠 Skills Required</h3>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 text-base">
            {data.skills.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">🔢 Number of Openings</h3>
          <p className="text-lg text-gray-700 font-semibold">{data.openings}</p>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
