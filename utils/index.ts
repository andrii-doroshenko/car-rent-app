import { FilterProps, CarProps } from "@/types";
const { API_KEY, BASE_URL, RAPIDAPI_HOST } = process.env;

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, model, fuel, limit } = filters;
  const url = `${BASE_URL}/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const headers: Record<string, string> = {};

  if (API_KEY) {
    headers["X-RapidAPI-Key"] = API_KEY;
  }

  if (RAPIDAPI_HOST) {
    headers["X-RapidAPI-Host"] = RAPIDAPI_HOST;
  }

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
