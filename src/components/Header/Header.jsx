import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner">
          <Logo />
          <Button className={"theme-btn"} onClick={() => null}>
            <FaSun />
          </Button>
        </div>
      </div>
    </header>
  );
};
