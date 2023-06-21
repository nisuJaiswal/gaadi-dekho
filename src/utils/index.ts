import { CarType, FilterType } from "@/types";

const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'X-RapidAPI-Key': 'f96cd960e9msh177ddea4b46e5dfp17a873jsn35ab88d6386c',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchCars = async(filters: FilterType) =>  {
    const {manufacturer, year, model, fuel, limit} = filters
    const headers = {
        'X-RapidAPI-Key': 'f96cd960e9msh177ddea4b46e5dfp17a873jsn35ab88d6386c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    
    const {data} = await axios.get(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}&model=${model}`, {headers})
    // const res = await axios.get(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=m8&model=bmw`, {headers})
    
    console.log(data)
    return data
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  }; 

export const generateImage = ( car: CarType, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getImage')
    const {make, model, year} = car
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGE_KEY)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('make', make)
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`

}

export const updateSearchParams = (type:string, value:string) => {
    const url = new URLSearchParams(window.location.search)
    
    url.set(type, value)
    const newPath = `${window.location.pathname}?${url.toString()}`
    return newPath
}