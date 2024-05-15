"use client";
import { Countries } from "@/types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ChangeEvent,
} from "react";

const INITIAL_STATE = {
  searchQuery: "",
  setSearchQuery: () => {},
  searchHandler: () => {},
  region: "",
  setRegion: () => {},
  filterByRegionAndSearch: (arr: Countries): Countries => arr,
};

type ContextType = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  filterByRegionAndSearch: (arr: Countries) => Countries;
};

export const SearchSelectContext = createContext<ContextType>(INITIAL_STATE);

export function SearchSelectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState(() => "");
  const [region, setRegion] = useState("");

  function searchHandler(e: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  function filterByRegionAndSearch(countries: Countries): Countries {
    let filtered = countries;
    if (searchQuery) {
      const lowerTrimmedQuery = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(
        (country) =>
          country.name.toLowerCase().includes(lowerTrimmedQuery) ||
          country.nativeName.toLowerCase().includes(lowerTrimmedQuery)
      );
    }

    if (region) {
      const lowerRegion = region.toLowerCase();
      filtered = filtered.filter((country) =>
        country.region.toLowerCase().includes(lowerRegion)
      );
    }

    return filtered;
  }

  const value = {
    searchQuery,
    setSearchQuery,
    searchHandler,
    region,
    setRegion,
    filterByRegionAndSearch,
  };

  return (
    <SearchSelectContext.Provider value={value}>
      {children}
    </SearchSelectContext.Provider>
  );
}

export const useSearchSelectContext = () => useContext(SearchSelectContext);
