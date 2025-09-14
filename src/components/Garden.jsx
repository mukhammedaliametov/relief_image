import React from "react";
import background from "../assets/garden_bg.jpg";
import Logo from "../assets/caramel_logo.svg";

const Garden = () => {
  return (
    <div
      className="relative w-full min-h-[100vh] bg-cover bg-center z-10 lg:p-[20px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 bg-[#00000070] w-full h-screen -z-1"></div>
      <div className="z-10 max-w-[1220px] mx-auto px-[16px] md:px-0">
        <div className="text-center mx-auto">
          <img src={Logo} alt="logo" className="w-[38px] mx-auto" />
          <p className="w-[220px] lg:w-[320px] h-[1px] bg-caramel mx-auto"></p>
          <h3 className="font-playfair text-[26px] md:text-[28px] text-caramel mb-[-8px]">
            УХОД ЗА САДОМ
          </h3>
        </div>
        <p className="bg-[#39362FCC] p-[20px] text-caramel rounded-[5px] my-[20px] font-roboto font-[300] tracking-[1px] text-[14px]/[24px] md:text-[16px]/[26px] text-justify md:text-left">
          Каждый участок требует постоянный профессиональный уход, чтобы
          поддерживать ту красоту, которую планировал ландшафтный дизайнер. Это
          подразумевает большой комплекс работ, требующих много времени.
          Доверьтесь нашим опытным садоводам! И мы гарантируем качество работ,
          здоровый сад, а самое главное ваше сэкономленное время.
        </p>
        <div className="bg-white font-roboto w-full lg:w-[97%] mx-auto rounded-[5px] border border-[#00000040] shadow shadow-[#00000040] py-[15px] md:py-[30px] px-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col gap-[10px]">
              <button className="py-[15px] px-[50px] border-1 border-[#00000033] shadow shadow-[#00000040] cursor-pointer">СЕЗОННЫЕ ВЫЕЗДЫ</button>
              <button className="py-[15px] px-[50px] border-1 border-[#00000033] shadow shadow-[#00000040] cursor-pointer">ОСЕНЬ</button>
              <button className="py-[15px] px-[50px] border-1 border-[#00000033] shadow shadow-[#00000040] cursor-pointer">ВЕСНА</button>
              <button className="relative py-[15px] px-[50px] border-2 border-[#FF7E35] shadow shadow-[#00000040] cursor-pointer">ЛЕТО <span className="w-[20px] h-full absolute right-0 top-0 bg-[#FF7E35]"></span></button>
            </div>
            <ul className="list-disc flex flex-col gap-[6px] marker:text-[#FF7E35] px-[20px] py-[40px]">
              <li>Уход за цветниками (прополка, обрезка сухого, рыхление)</li>
              <li>
                Формовочная обрезка (фигурная стрижка, стрижка изгородей,
                производитсяпо мере роста)
              </li>
              <li>Стрижка газона</li>
              <li>
                Обработка газона от сорняков (первая обработка производится
                после первого коса газона)
              </li>
              <li>
                Внесение удобрений ( по газону производится 1 раз в 2 недели, по
                цветниками в зависимости от растений)
              </li>
              <li>
                Обработка от вредителей и болезней (производится с интервалом в
                10-14 дней)
              </li>
              <li>
                Обработка мощения от сорняков (производится 1 раз в месяц)
              </li>
            </ul>
          </div>
          <div className="font-[300] tracking-[1px] text-[14px]/[24px] lg:mt-[20px]">
            <p>*Выезд и консультация специалиста оплачивается отдельно.</p>
            <p>
              *Отдельно оплачивается: вывоз мусора, химия, удобрение, материалы
              для дополнительных работ ( например: земля, мульча, бордюрная
              лента и т.д.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;
