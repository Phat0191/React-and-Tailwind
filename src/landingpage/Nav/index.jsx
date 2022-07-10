import React, { useState } from "react";
import { FaHouseUser, FaYoutubeSquare, FaList } from "react-icons/fa";
import NavItem from "./NavItems";

const items = [
  { label: "Home", icon: <FaHouseUser size="1.875em" /> },
  { label: "Movie", icon: <FaYoutubeSquare size="1.875em" /> },
  { label: "About", icon: <FaHouseUser size="1.875em" /> },
];

const NavItemsContainer = () => {
  const [active, setActive] = useState(items[0].label);
  return (
    <>
      {items.map((item, index) => (
        <>
          <li
            key={index}
            className={`flex p-2 justify-end cursor-pointer  ${
              active === item.label ? "bg-sky-900 text-while" : " "
            }`}
            onClick={() => setActive(item.label)}
          >
            {/* <NavItem item={item} key={index} /> */}
            <h4>{item.label}</h4>
            &nbsp;
            {item.icon}
          </li>
          <br />
        </>
      ))}
    </>
  );
};

const Index = () => {
  const [check, setCheck] = useState(false);
  return (
    <>
      <nav className="col-span-1 bg-cyan-200">
        <div className="flex mx-4 justify-between items-center md:block">
          <h4 className="uppercase font-bold text-zinc-700 border-b border-[#40465c] text-right py-2">
            Phimmoi.net
          </h4>
          <FaList
            className="cursor-pointer md:hidden"
            size="1.875em"
            onClick={() => setCheck(!check)}
          />
        </div>
        <ul className={`mx-4 my-2 ${check ? "" : "hidden"} md:block`}>
          <NavItemsContainer />
        </ul>
      </nav>
    </>
  );
};

export default Index;
