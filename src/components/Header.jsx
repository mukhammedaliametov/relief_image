import React, { useState } from "react";
import { MdClose, MdLocalPhone, MdLocationPin, MdMenu } from "react-icons/md";

const Header = () => {
  const navItems = [
    { name: "О компании", link: "#aboutus" },
    { name: "Проекты", link: "#projects" },
    { name: "Уход за садом", link: "#garden" },
    { name: "Ландшафт", link: "#landspace" },
    { name: "Отзывы", link: "#reviews" },
  ];

  const [nav, setNav] = useState(0);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full bg-[#25491F4F] backdrop-blur-[10px] py-[15px] z-999">
      <div className="max-w-[1220px] mx-auto px-[16px] lg:px-0 flex items-center justify-between font-roboto font-[300]">
        <div onClick={handleClick} className="block md:hidden text-[22px] text-white">
            {nav ? <MdClose /> : <MdMenu />}
        </div>
        <nav className="hidden md:flex gap-[30px] lg:gap-[80px] text-white">
          {navItems.map((item) => {
            return <a href={item.link}>{item.name}</a>;
          })}
        </nav>
        <div className="text-[14px] lg:text-[16px]">
          <a href="tel: +7 (981) 98-50-04" className="flex items-center gap-[6px] text-caramel">
            <MdLocalPhone />
            тел.+7 (981) 98-50-04
          </a>
          <a href="#" className="flex items-center gap-[6px] text-caramel">
            <MdLocationPin />
            Санкт-Петербург и ЛО
          </a>
        </div>
        <div className={`absolute top-[72px] w-full h-[240px] bg-[#24451eb7] backdrop-blur-[10px] flex gap-[15px] flex-col py-[20px] px-[16px] transition-all duration-300 ${nav ? 'left-0' : 'left-[-100%]'}`}>
            {navItems.map((item) => {
                return(
                    <a onClick={handleClick} href={item.link} className="text-white">{item.name}</a>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Header;
