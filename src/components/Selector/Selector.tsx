"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./selector.module.css";
import { useSearchSelectContext } from "@/context/SearchSelectContext";

const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Selector = () => {
  const [openFilter, setOpenFilter] = useState(false);

  function filterHandler() {
    setOpenFilter(!openFilter);
  }

  const { region, setRegion } = useSearchSelectContext();

  return (
    <div onClick={filterHandler}>
      {openFilter && <div className="background" />}
      <div className={styles.selector}>
        {region ? region : "Filter by Region"}
        {openFilter ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        {openFilter && (
          <>
            <ul className={styles["selector__list"]}>
              {continents.map((continent, index) => (
                <li key={index} onClick={() => setRegion(continent)}>
                  <p>{continent}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Selector;
