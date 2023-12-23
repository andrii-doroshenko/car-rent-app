export const fetchCars = async () => {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=toyota";
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
