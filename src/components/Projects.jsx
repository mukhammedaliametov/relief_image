import React from "react";
import decoration1 from "../assets/decoration1.svg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] md:px-0" id="projects">
      <div className="flex items-end justify-between">
        <div data-aos="zoom-in" className="text-center mx-auto">
          <img
            src={decoration1}
            alt="decoration1"
            className="w-[220px] md:w-[340px]"
          />
          <h3 className="font-playfair text-[26px] md:text-[28px] text-dark-green mb-[-8px]">
            НАШИ ПРОЕКТЫ
          </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[20px] w-full md:w-[80%] mx-auto my-[50px]">
        <div className="w-full sm:w-[70%] md:w-[50%] relative overflow-hidden group cursor-pointer">
          <img src={project1} alt="project1" className="h-[380px] md:h-[608px] transition-all duration-300 group-hover:scale-105" />
          <p className="w-full py-[15px] text-[#23451E] md:text-[#3D2220] font-[400] text-[18px] text-center absolute bottom-0 bg-[#FFEFE394] font-roboto">
            Правдинское
          </p>
          <div className="flex md:hidden absolute top-[50%] w-full items-center justify-between text-[30px] text-caramel px-[3px]">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full sm:w-[70%] md:w-[50%]">
          <div className="relative overflow-hidden group cursor-pointer">
            <img src={project2} alt="project2" className="w-full h-[258px] transition-all duration-300 group-hover:scale-105" />
            <p className="w-full py-[15px] text-[#23451E] md:text-[#3D2220] font-[400] text-[18px] text-center absolute bottom-0 bg-[#FFEFE394] font-roboto">
              Репино
            </p>
          </div>
          <div className="relative overflow-hidden group cursor-pointer">
            <img src={project3} alt="project3" className="w-full h-[326px] transition-all duration-300 group-hover:scale-105" />
            <p className="w-full py-[15px] text-[#23451E] md:text-[#3D2220] font-[400] text-[18px] text-center absolute bottom-0 bg-[#FFEFE394] font-roboto">
              Петергоф
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
