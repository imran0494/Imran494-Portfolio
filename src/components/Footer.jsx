import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-r-transparent border-l-transparent text-white">
      <div className="container p-12 flex justify-between md:p-10">
        <span>
          <img
            className="rounded-3xl h-12  md:ml-12"
            src="/images/Designer.jpeg"
            alt="logo"
            width={100}
            height={50}
          />
        </span>
        <p className="text-slate-600 ml-10 mt-2">Thanks for Visiting...</p>
      </div>
    </footer>
  );
};

export default Footer;
