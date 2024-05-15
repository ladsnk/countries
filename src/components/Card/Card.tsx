import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import { formatNumber } from "@/utils";
import { Country } from "@/types";
const Card = ({ country }: { country: Country }) => {
  const population = formatNumber(country.population);

  return (
    <article>
      <div
        className={styles["card__img"]}
        style={{ backgroundImage: `url(${country.flags.png})` }}
      ></div>
      <div className={styles["card__caption"]}>
        <h3>{country.name}</h3>
        <p>
          <strong>Population</strong>: {population}
        </p>
        <p>
          <strong>Region</strong>: {country.region}
        </p>
        <p>
          <strong>Capital</strong>: {country.capital ? country.capital : "-"}
        </p>
      </div>
    </article>
  );
};

export default Card;
