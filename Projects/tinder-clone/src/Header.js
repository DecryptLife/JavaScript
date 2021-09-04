import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { Icon, IconButton } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Forum";
import tinderLogo from "../../tinder-clone/src/tinder-2.svg";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img className="header_logo" src={tinderLogo} alt="" />

      <IconButton>
        <MessageIcon fontSize="large" className="message_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
