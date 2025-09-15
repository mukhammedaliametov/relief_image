import React from "react";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Sms from "../assets/sms.svg";
import { MdLocalPhone, MdLocationPin, MdMail } from "react-icons/md";
import grass from "../assets/grass.png";
import mobileGrass from '../assets/mobile_grass.png';

const Footer = () => {
  return (
    <div className="bg-[#5A554D] pt-[30px]">
      <div className="max-w-[1220px] mx-auto px-[16px] lg:px-0 text-white">
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-0 items-start md:items-end justify-between">
          <h2 className="font-playfair text-[28px] font-[500]">Контакты</h2>
          <div className="flex items-center gap-[20px]">
            <a href="#">
              <img src={Instagram} alt="instagram" className="w-[32px]" />
            </a>
            <a href="#">
              <img src={Whatsapp} alt="whatsapp" className="w-[32px]" />
            </a>
            <a href="#">
              <img src={Sms} alt="sms" className="w-[32px]" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-left md:items-end justify-between font-roboto my-[30px] gap-[10px] md:gap-0">
          <div>
            <p className="font-[300] hidden md:block">Телефон</p>
            <a
              href="tel: +7 (981) 98-50-04"
              className="flex items-center gap-[6px]"
            >
              <MdLocalPhone />
              тел.+7 (981) 98-50-04
            </a>
          </div>
          <div>
            <p className="font-[300] hidden md:block">Email</p>
            <a
              href="mailto: relief.image@mail.ru"
              className="flex items-center gap-[6px]"
            >
              <MdMail className="block md:hidden" /> relief.image@mail.ru
            </a>
          </div>
          <p className="flex items-center gap-[6px]">
            <MdLocationPin />
            Санкт-Петербург и ЛО
          </p>
        </div>
      </div>
      <img src={grass} alt="grass" className="w-[100%] hidden md:block" />
      <img src={mobileGrass} alt="mobile_grass" className="w-[100%] block md:hidden" />
    </div>
  );
};

export default Footer;
