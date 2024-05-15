import styles from "./page.module.css";
import { getCountries } from "@/server/actions";
import { Search, CountriesList, Selector } from "@/components";

export default async function Home() {
  const countries = await getCountries();
  return (
    <main>
      <div className={styles.search}>
        <Search />
        <Selector />
      </div>
      <CountriesList initialCountries={countries} />
    </main>
  );
}
