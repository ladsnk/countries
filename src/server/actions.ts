"use server";

import { Countries } from "@/types";

export async function getCountries() {
  try {
    const url = `http://ec2-13-42-59-239.eu-west-2.compute.amazonaws.com:8080/api`;
    const response = await fetch(url);
    const data = (await response.json()) as Countries;
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
}
