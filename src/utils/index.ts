import { Countries } from "@/types";

export function formatNumber(number: number): string {
  // Convert number to string
  let strNumber: string = number.toString();

  // Split the string into parts
  let parts: string[] = [];

  // Starting index for the first part
  let startIndex: number = strNumber.length % 3;
  if (startIndex === 0) startIndex = 3;

  // Add the first part
  parts.push(strNumber.substring(0, startIndex));

  // Add subsequent parts
  for (let i: number = startIndex; i < strNumber.length; i += 3) {
    parts.push(strNumber.substring(i, i + 3));
  }

  // Join the parts with dots and return
  return parts.join(".");
}

export function generateURL(countryName: string) {
  const encodedCountryName = encodeURIComponent(countryName);
  return `/countries/${encodedCountryName}`;
}

export function isValidCountry(countryName: string, countries: Countries) {
  return countries.some((country) => country.name === countryName);
}
