"use client";

import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  // Fetching States
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Searching States
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Filter States
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");

  // Pagination State
  const [limit, setLimit] = useState(10);

  const checkEmpty = !Array.isArray(allCars) || allCars.length <= 0 || !allCars;

  const getCars = async () => {
    try {
      setLoading(true);
      const res = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore enormous amount of cars</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
          <CustomFilter
            title="year"
            options={yearsOfProduction}
            setFilter={setYear}
          />
        </div>

        {/* Display Car in Cards */}
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} key={car?.make} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.png"
                  alt="Loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              hasNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h3 className="text-black text-2xl font-bold">
              Sorry! No Data Found
            </h3>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
