import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTime />
      </div>
      <div className="header__search">
        <input placeholder="search here"></input>
        <Search></Search>
      </div>
      <div className="header__right">
        <HelpOutline></HelpOutline>
      </div>
    </div>
  );
};

export default Header;
