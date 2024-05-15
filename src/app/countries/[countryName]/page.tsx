// "use client";
import { getCountries } from "@/server/actions";
import { isValidCountry } from "@/utils";

// import { useRouter } from "next/navigation";

const Country = async ({ params }: { params: { countryName: string } }) => {
  // const router = useRouter();
  const countryName = decodeURIComponent(params.countryName);
  const countries = await getCountries();
  // const valid = countries.some((country) => country.name === countryName);
  // if (!valid) {
  //   // Redirect the user back
  //   router.back();
  //   return null;
  // }

  const country = countries.find((country) => country.name === countryName);
  const currencies = country?.currencies?.map((curr) => curr.name);

  return (
    <div>
      <div>
        <img src={country?.flags.svg} alt="country-flag" />
      </div>
      <div>
        <ul>
          <li>Name: {country?.name}</li>
          <li>Capital: {country?.capital}</li>
          <li>Region:{country?.region}</li>
          <li>Subregion:{country?.subregion}</li>
          <li>Population:{country?.population}</li>
          <li>NativeName:{country?.nativeName}</li>
          <li>Currencies:{currencies}</li>
          <li>Languages:</li>
          <li>Cioc:{country?.name}</li>
          <li>Demonym:{country?.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
