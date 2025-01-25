import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLink,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrap">
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrap">
              <BsTwitter />
            </div>
            <div className="header_top_icon_wrap">
              <BsInstagram />
            </div>
            <div className="header_top_icon_wrap">
              <BsLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px] ">
            <b>FREE SHIPPING </b> THIS WEEK ORDER OVER - $55
          </div>

          <div className="flex gap-4">
            <select
              name="currency"
              id="currency"
              className="text-gray-500 text-[12px] w-[70px]"
            >
              <option>AUD</option>
              <option>USD</option>
              <option>IDR</option>
            </select>

            <select
              name="language"
              id="language"
              className="text-gray-500 text-[12px] w-[80px]"
            >
              <option>English</option>
              <option>Indonesian</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
