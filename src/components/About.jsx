import React, { useState } from "react";
import decoration from "../assets/decoration1.svg";
import { RiArrowDownWideLine } from "react-icons/ri";

const About = () => {
    const [about, setAbout] = useState(false);
    const fullAbout = () => setAbout(!about);
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] lg:px-0" id="aboutus">
      <img data-aos="zoom-in" src={decoration} alt="decoration" className="w-[220px] md:w-[340px] mt-[30px] md:mt-[80px] mb-[30px] mx-auto" />
      <div data-aos="fade-up" className="bg-[#575249FA] w-full rounded-[5px] py-[20px] mb-[30px] px-[30px] text-caramel transition-all duration-300">
        <h3 className="font-playfair pb-[10px] text-[20px] md:text-[22px]">О КОМПАНИИ</h3>
        <div className={`overflow-hidden transition-all duration-300 ${about ? 'h-full' : 'h-[293px] sm:h-auto'}`}>
        <p className="font-roboto font-[300] tracking-[1px] text-[14px]/[24px] md:text-[16px]/[26px] text-justify md:text-left">
          Relief Image - компания по уходу за садом и ландшафтом. Более 10 лет
          мы занимаемся благоустройством загородных участков, также имеем
          порядка 60 готовых работ в Ленинградской области и Санкт-Петербурге. К
          нам обращаются и доверяют уже более 20 постоянных клиентов за помощью
          по благоустройству и уходу участков. Наша компания отличается
          КАЧЕСТВОМ выполненных работ, ГАРАНТИЕЙ на растения, ЛУЧШИМИ
          питомниками для вашего участка и разработкой проекта ПОД КЛЮЧ.
          Обратившись к нашим специалистам, вы всегда будете чувствовать, как мы
          с большим вниманием относимся к вашим предпочтениям. Одной из ключевых
          задач нашей компании является то, что бы клиент всегда оставался
          доволен и наслаждался выполненной работой. Если вас интерисовали
          именно эти критерии при подборе спициалистов, то вы попали в нужные
          руки!
        </p>
        </div>
        <div className={about ? 'hidden' : 'block'}>
        <RiArrowDownWideLine onClick={fullAbout} className="block md:hidden mx-auto text-[36px] mt-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
