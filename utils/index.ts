import { FilterProps, CarProps } from "@/types";

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, model, fuel, limit } = filters;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const headers = {
    "X-RapidAPI-Key": "4a328f98a1msh102193c0fc7270bp19aa3fjsn0272c33ad63c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(url, { headers });

  const result = await response.json();
  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePrice = 50;
  const mpgCoefficient = 2;

  const currentYear = new Date().getFullYear();
  const yearCoefficient = -2;

  const price =
    basePrice +
    city_mpg * mpgCoefficient +
    (currentYear - year) * yearCoefficient;

  return price.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
