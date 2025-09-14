import React from "react";
import decoration1 from "../assets/decoration1.svg";
import Avatar1 from '../assets/avatar1.svg';
import Avatar2 from '../assets/avatar2.svg';
import Avatar3 from '../assets/avatar3.svg';

const Reviews = () => {
    const reviews = [
  {
    avatar: Avatar1,
    name: "Михаил",
    text: "К компании relief image обратился в конце 2019 года, и летом 2020 все работы были закончены. Мы с семьей живём в пос. Правдинское озеро, хотели наш пустой и неровный участок превратить в уютный зеленый сад, с хорошим газоном, огородом и создать цветники у дома. Работой довольны, команда Надежды теперь занимается обслуживанием нашего участка."
  },
  {
    avatar: Avatar2,
    name: "Наталья",
    text: "В 2016 году понадобились специалисты по уходу за садом. С командой Надежды наш сад зацвел новыми красками. В том же году мы купили дом в Репино. Хотели создать уютный уголок с зоной отдыха. И уже тогда мы понимали, кому доверить воплощение наших желаний. Работой довольны, все предпочтения были учтены. По сегодняшний день мы доверяем наш сад только специалистам relief image."
  },
  {
    avatar: Avatar3,
    name: "Ольга",
    text: "Наш участок находится в Петергофе. К Надежде обратились в 2016 году. Была необходимость в уходе за садом, растения болели, а также было много насекомых. Работой команды довольны. Вот уже 4 года доверяем наш сад специалистам!"
  },
];
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] lg:px-0 my-[60px]">
      <div className="text-center mx-auto">
        <img
          src={decoration1}
          alt="decoration1"
          className="w-[220px] md:w-[340px] mx-auto"
        />
        <h3 className="font-playfair text-[26px] md:text-[28px] text-dark-green mb-[-8px]">
          ОТЗЫВЫ
        </h3>
      </div>
      <div className="font-roboto flex overflow-x-scroll md:overflow-visible items-top gap-[30px] my-[50px] lg:justify-center">
        {reviews.map((item) => (
            <div className="w-[300px] md:w-[360px] flex-shrink-0">
            <img src={item.avatar} alt={item.name} className="mx-auto" />
            <h5 className="text-center font-semibold text-[18px] mb-[15px] tracking-[.5px]">{item.name}</h5>
            <p className="font-roboto font-[300] tracking-[.5px] text-[14px]/[24px] md:text-[16px]/[26px] text-justify text-dark-green">{item.text}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
