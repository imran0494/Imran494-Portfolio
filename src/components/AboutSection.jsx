import React, { useState } from "react"; // Import useState hook
import TabButton from "./TabButton"; // Assuming TabButton component is defined in TabButton.js

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>C++/Python</li>
        <li>Web Development</li>
        <li>React</li>
        <li>NodeJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Science in Computer Science</li>
        <li>Chandigarh University</li>
        <li>Score:7.91 CGPA</li>
        <li>August 2020 - June 2024</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Responsive Web Design</li>
        <li>Front End Libraries</li>
        <li>Quality Assurance</li>
        <li>Machine Learning with Python</li>
        <li>Front End Development Libraries</li>
        <li>Full Stack Development</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills"); // Initialize state with useState hook

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          className="rounded-xl"
          src={"/images/about.jpg"}
          alt="About"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Passionate React JS web developer proficient in HTML5, CSS3, and
            JavaScript, dedicated to crafting immersive and dynamic user
            interfaces. Leveraging the power of React&apos;s component-based
            architecture and virtual DOM, I create scalable web applications
            with reusable UI components. Beyond the frontend, my skills extend
            to C++, Python, and Node.js, while also venturing into the realms of
            computer vision and machine learning. A quick learner with a knack
            for embracing new technologies, I bring a versatile skill set to
            every project.
          </p>
          <div className="flex flex-row text-xl mt-8">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
