import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const CV_Download =
  "https://imran494-portfolio.vercel.app/Resume_Mohammad_Imran.pdf";

function HeroSection() {
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    aTag.click();
    aTag.remove();
  };

  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Imran.",
                2000,
                "a Web Developer.",
                2000,
                "a ReactJS developer.",
                2000,
                "a Software Engineer.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            As a Computer Science Engineering graduate from Chandigarh
            University, I excel in creating innovative web solutions with
            ReactJS, JavaScript, and Tailwind CSS. I specialize in designing
            responsive, high-performing websites and applications, utilizing
            frameworks like Node.js and the MERN stack. With strong skills in
            JavaScript, HTML, CSS, RESTful APIs, MongoDB, Git, and Vercel, I am
            committed to delivering impactful, scalable digital solutions.
            Let&apos;s collaborate to bring visionary ideas to life and advance
            the future of web development.
          </p>
          <div className="relative translate-z-0">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-500 via-purple-500 to-red-500 text-white hover:text-black"
            >
              Hire Me
            </button>
            <button
              onClick={() => downloadFile(CV_Download)}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 via-purple-500 to-red-500 text-white mt-3 "
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full h-[250px] w-[250px] lg:w-[450px] lg:h-[450px] relative ">
            <img
              className="rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/img.jpg"
              alt="my img"
              width={280}
              height={280}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
