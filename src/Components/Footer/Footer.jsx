import React from "react";

const Footer = () => {
  return (
    <div className="  bottom-0  text-lg sm:text-xl text-white font-bold  py-4 border-t-2 border-yellow-400 mx-8 flex flex-row items-center justify-between ">
      <div>
        Made by <span className="text-yellow-400">Chirag Jain</span>
      </div>
      <div className="text-white flex gap-8">
        <a href="https://www.github.com/ChiragJain05" target="_blank"><i className="fa fa-github  hover:text-yellow-400"></i></a>
        <a href="https://www.linkedin.com/in/thejainchirag" target="_blank"><i class="fa fa-linkedin-square hover:text-yellow-400"></i></a>
      </div>
    </div>
  );
};

export default Footer;
