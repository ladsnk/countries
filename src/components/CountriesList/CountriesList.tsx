"use client";
import styles from "./countriesList.module.css";
import { Countries, Country } from "@/types";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useInView } from "react-intersection-observer";
import { useSearchSelectContext } from "@/context/SearchSelectContext";
import { generateURL } from "@/utils";
import useObserver from "@/hooks/useObserver";

type CountriesGridProps = {
  initialCountries: Countries;
};

const NUMBER_OF_COUNTRIES_TO_FETCH = 20;

const CountriesList = ({ initialCountries }: CountriesGridProps) => {
  const { searchQuery, region, filterByRegionAndSearch } =
    useSearchSelectContext();
  const [countries, setCountries] = useState<Country[]>(
    initialCountries.slice(0, NUMBER_OF_COUNTRIES_TO_FETCH)
  );
  const [offset, setOffset] = useState(NUMBER_OF_COUNTRIES_TO_FETCH);
  const { loading, ref } = useObserver({ callback: loadMoreCountries });

  function loadMoreCountries() {
    let uniqueArray = [
      ...countries,
      ...initialCountries.slice(offset, offset + NUMBER_OF_COUNTRIES_TO_FETCH),
    ].filter((value, index, self) => self.indexOf(value) === index);

    setCountries(uniqueArray);
    setOffset(offset + NUMBER_OF_COUNTRIES_TO_FETCH);
  }

  useEffect(() => {
    if (!searchQuery && !region) {
      return;
    }
    const filteredCountries = filterByRegionAndSearch(initialCountries);

    setCountries(filteredCountries);
  }, [searchQuery, region]);

  return (
    <section className={styles["media-grid-wrap"]}>
      <div className={styles["media-cards-grid"]}>
        {countries.map((country) => {
          const url = generateURL(country.name);

          return (
            <div key={country.id} className={styles["media-card-wrap"]}>
              <Card country={country} />
            </div>
          );
        })}
      </div>
      <>
        {/* no need for ref if true */}
        {!searchQuery && !region && <div ref={ref}></div>}
        {loading ? <div>Loading...</div> : ""}
      </>
    </section>
  );
};

export default CountriesList;
