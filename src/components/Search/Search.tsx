"use client";
import React, { useState, useContext } from "react";
import { SlMagnifier } from "react-icons/sl";
import styles from "./search.module.css";
import Selector from "../Selector/Selector";
import { ChangeEvent } from "react";
import {
  SearchSelectContext,
  useSearchSelectContext,
} from "@/context/SearchSelectContext";

const SearchSelect = () => {
  const { searchQuery, searchHandler } = useSearchSelectContext();

  return (
    <>
      <div className={styles["search__input-cont"]}>
        <SlMagnifier />
        <input
          value={searchQuery}
          onChange={searchHandler}
          placeholder="Search for a country.."
          type="text"
        />
      </div>
    </>
  );
};

export default SearchSelect;
