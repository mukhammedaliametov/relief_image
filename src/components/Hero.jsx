import React from "react";
import BgImage from "../assets/bg_image.png";
import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Sms from "../assets/sms.svg";
import Icon1 from "../assets/bottom_icon1.svg";
import Icon2 from "../assets/bottom_icon2.svg";
import Icon3 from "../assets/bottom_icon3.svg";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BgImage})` }}
      className="w-full h-screen bg-cover bg-center flex items-center justify-between"
    >
      <div className="max-w-[1220px] mx-auto px-[16px] lg:px-0 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <img
              src={Logo}
              alt="logo"
              className="w-[171px] md:w-[267px] mx-auto md:mx-0"
            />
            <h1 className="text-[26px]/[30px] md:text-[42px]/[42px] font-playfair text-white w-[258px] md:w-[472px]">
              Благоустройство и озеленение участков
            </h1>
            <button className="bg-[#FF7E3587] text-caramel border-2 border-[#FF7E35] px-[30px] md:px-[50px] py-[10px] md:py-[15px] rounded-[5px] text-[16px] md:text-[20px] font-roboto font-[300] mt-[30px] cursor-pointer">
              Оставить заявку
            </button>
          </div>
          <div className="flex flex-row md:flex-col gap-[20px] mt-[80px] md:mt-0">
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
        <div className="realtive hidden md:flex items-center justify-center w-full">
          <div className="flex items-center justify-evenly absolute -bottom-20 md:-bottom-12  bg-[#211A15DE] w-[92%] rounded-[5px] py-[10px]">
            <div className="text-center text-caramel font-roboto font-[300]">
              <img src={Icon1} alt="icon1" className="mx-auto w-[45px] h-[57px] mb-[8px]" />
              <p>Опыт работы более 10 лет</p>
            </div>
            <div className="text-center text-caramel font-roboto font-[300]">
              <img src={Icon2} alt="icon2" className="mx-auto w-[46px] h-[70px] mb-[-4px]" />
              <p>Гарантия на растения</p>
            </div>
            <div className="text-center text-caramel font-roboto font-[300]">
              <img src={Icon3} alt="icon3" className="mx-auto w-[80px] h-[80px] mb-[-10px]" />
              <p>Лучшие питомники</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
