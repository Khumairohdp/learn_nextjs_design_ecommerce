import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" href="#">
            HOME
          </Link>
          <Link className="navbar_link relative" href="#">
            DRESS
          </Link>
          <Link className="navbar_link relative" href="#">
            JEWELRY
          </Link>
          <Link className="navbar_link relative" href="#">
            PERFUME
          </Link>
          <Link className="navbar_link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar_link relative" href="#">
            ON SALE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
