import { React, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Switch } from "@material-tailwind/react";

const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

 

  return (
    <>
      <div className="flex border-b  py-3 gap-12  items-center">
        <img
          className="w-44  "
          src="https://cdn.cookielaw.org/logos/99f99939-5a0d-4feb-aef3-ba45f16b6907/c2ab9859-7b6a-456c-870d-933de2bc80d9/8aa41fe5-83ec-4d58-8859-e8b5556f5ea0/coinmarketcap_logo.png"
          alt="pic"
        />
        <div className="flex mb-0 md:mb-2 font-custom font-bold md:flex-row flex-col-reverse items-center">
          <ul
            className={`font-custom  text-[16px] w-full h-screen md:h-0 md:static gap-2 bg-[#F5F4F4] absolute top-20 right-0 p-3 md:p-0  text-[#0d1421] md:bg-transparent md:flex md:flex-row md:gap-4 lg:gap-6 justify-start md:justify-center lg:text-[87%] md:text-[55%] md:text-[#152330] md:leading-[13px] font-semibold transition-m duration-500 ease-in-out ${
              menuOpen ? "max-h-screen" : "hidden"
            }`}
          >
            <li className="hover:bg-gray-300 p-2 md:p-0 md:bg-transparent  ">
              <button
                className="capitalize animate tracking-widest hover:scale-110"
                onClick={() => {
                  const Element = document.getElementById("aboutUs");
                  if (Element) {
                    Element.scrollIntoView({ behavior: "smooth" });
                  }
                  handleMenuItemClick();
                }}
              >
                Products
              </button>
            </li>
            <li className="hover:bg-gray-300 p-2 md:p-0 md:hover:bg-transparent  ">
              <button
                className="capitalize animate tracking-widest hover:scale-110"
                onClick={() => {
                  const Element = document.getElementById("services");
                  if (Element) {
                    Element.scrollIntoView({ behavior: "smooth" });
                  }
                  handleMenuItemClick();
                }}
              >
                Cryptocurrencies
              </button>
            </li>
            <li className=" hover:bg-gray-300 p-2 md:p-0  md:hover:bg-transparent ">
              <button
                className="capitalize animate tracking-widest hover:scale-110"
                onClick={() => {
                  const Element = document.getElementById("portfolio");
                  if (Element) {
                    Element.scrollIntoView({ behavior: "smooth" });
                  }
                  handleMenuItemClick();
                }}
              >
                Exchanges
              </button>
            </li>
            <li className="hover:bg-gray-300 p-2 md:p-0  md:hover:bg-transparent ">
              <button
                className="capitalize animate tracking-widest hover:scale-110"
                onClick={() => {
                  const Element = document.getElementById("Reconmmendations");
                  if (Element) {
                    Element.scrollIntoView({ behavior: "smooth" });
                  }
                  handleMenuItemClick();
                }}
              >
                Community
              </button>
            </li>
            <li className=" hover:bg-gray-300 p-2 md:p-0  md:hover:bg-transparent ">
              <button
                className="capitalize animate tracking-widest hover:scale-110"
                onClick={() => {
                  const Element = document.getElementById("work");
                  if (Element) {
                    Element.scrollIntoView({ behavior: "smooth" });
                  }
                  handleMenuItemClick();
                }}
              >
                Learn
              </button>
            </li>
          </ul>
          <IconButton onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 text-[#152330] md:hidden h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-[12px] flex items-center font-medium gap-1">
            <img
              className="w-5 h-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
              alt=""
            />
            Halving: 43D
          </div>
          <div className="text-[12px] flex items-center font-medium gap-1">
            <img
              className="w-3 h-3"
              src="https://png.pngtree.com/png-vector/20220613/ourmid/pngtree-isolated-gray-star-icon-png-image_5064306.png"
              alt=""
            />
            Watchlist
          </div>

          <input
            type="text"
            placeholder="Search"
            className="py-2 px-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">

      <div className="py-5 ">
        <h1 className="text-[20px] leading-10 text-[#0d1421] font-bold  ">
          Today's Cryptocurrency Prices by Market Cap
        </h1>
        <h1 className="text-[14px] text-[#58667e] font-medium  ">
          The global crypto market cap is <b>$2.57T</b>, a
          <span className="text-[#16c784]">
            <ArrowDropUpIcon  /> 2.12%{" "}
          </span>{" "}
          increase over the last day.<a className="underline" href="/">Read More</a>
        </h1>
      </div>
      <div>
        <h1 className="text-[14px] font-medium">Highlights  <Switch color="blue" defaultChecked /></h1>
      </div>
      </div>
    </>
  );
};

export default Banner;
