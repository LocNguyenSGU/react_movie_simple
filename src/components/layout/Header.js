import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <NavLink to="/" className={({isActive}) => (isActive ? 'text-primary' : '')}>Home</NavLink>
        {/* <NavLink to="/" className={({isActive}) => (isActive ? 'text-primary' : '')}>Tv Shows</NavLink> */}
        <NavLink to="/Movies" className={({isActive}) => (isActive ? 'text-primary' : '')}>Movies</NavLink>
      </header>
    </div>
  );
};

export default Header;
