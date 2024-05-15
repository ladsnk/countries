"use client";
import React from "react";
import classes from "./header.module.css";

import { FiMoon } from "react-icons/fi";
import { useThemeContext } from "@/context/ThemeContext";

const Header = () => {
  const { themeHandler } = useThemeContext();

  return (
    <header className={classes.header}>
      <p className={classes["header__title"]}>Where in the world?</p>

      <div className={classes.toggle} onClick={themeHandler}>
        <FiMoon className={classes.fimoon} />
      </div>
    </header>
  );
};

export default Header;
