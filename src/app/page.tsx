import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  // console.log(allCars);
  const checkEmpty = !Array.isArray(allCars) || allCars.length <= 0 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore enormous amount of cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>

        {!checkEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h3 className="text-black text-2xl font-bold">
              Sorry! No Data Found
            </h3>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
