import React, { useState } from "react";
import decoration1 from "../assets/decoration1.svg";
import Landspace1 from "../assets/landspace1.png";
import Landspace2 from "../assets/landspace2.png";
import Landspace3 from "../assets/landspace3.png";
import Landspace4 from "../assets/landspace4.png";
import Landspace5 from "../assets/landspace5.png";
import Landspace6 from "../assets/landspace6.png";
import Landspace7 from "../assets/landspace7.png";
import Landspace8 from "../assets/landspace8.png";
import Landspace9 from "../assets/landspace9.png";
import Landspace10 from "../assets/landspace10.png";

const Landspace = () => {
  const landspaceData = [
    { id: 1, img: Landspace1, name: "1. Ландшафтное проектирование участка" },
    { id: 2, img: Landspace2, name: "2. Подготовка участка" },
    { id: 3, img: Landspace3, name: "3. Создание дренажной системы" },
    { id: 4, img: Landspace4, name: "4. Устройство дорожного покрытия" },
    {
      id: 5,
      img: Landspace5,
      name: "5. Альпийские горки, рокарии, альпинарии",
    },
    {
      id: 6,
      img: Landspace6,
      name: "6. Устройство ручьев, водоемов, каскадов",
    },
    { id: 7, img: Landspace7, name: "7. Строительство, маф" },
    { id: 8, img: Landspace8, name: "8. Подпорные стенки" },
    { id: 9, img: Landspace9, name: "9. Посадка растений" },
    { id: 10, img: Landspace10, name: "10. Устройство газона" },
  ];

  return (
    <div className="max-w-[1220px] mx-auto px-[16px] lg:px-0 my-[30px]" id="landspace">
      <div data-aos="zoom-in" className="text-center mx-auto">
        <img
          src={decoration1}
          alt="decoration1"
          className="w-[220px] md:w-[340px] mx-auto"
        />
        <h3 className="font-playfair text-[26px] md:text-[28px] text-dark-green mb-[-8px]">
          ЛАНДШАФТ
        </h3>
      </div>
      <p data-aos="fade-up" className="bg-[#39362FCC] p-[20px] text-caramel rounded-[5px] my-[40px] font-roboto font-[300] tracking-[1px] text-[14px]/[24px] md:text-[16px]/[26px] text-justify md:text-left">
        Ландшафтный дизайн помогает обеспечить красивый вид вокруг вашего дома.
        Ведь участок должен выглядеть эстетично, иметь логическую структуру и
        радовать глаз. Чтобы избежать лишних разочарований, необходимо грамотно
        продумать и разработать дизайн-проект. Обладая теоретическими знаниями и
        практическим опытом, мы воплотим в реальность все ваши пожелания.
      </p>
      <div className="font-roboto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] h-full">
        {landspaceData.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="lg:last:col-start-2 lg:last:col-end-3 "
          >
            <p className="py-[8px]">{item.name}</p>
            <img src={item.img} alt={item.name} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landspace;
