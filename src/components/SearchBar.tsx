"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
    <Image
      width={40}
      height={40}
      className="object-contain"
      alt="alt"
      src="/magnifying-glass.svg"
    />
  </button>
);

const SearchBar = () => {
  const Router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" || model === "") {
      return alert("Please Provide Manufacurer and Model Name");
    }
    updateSearch(manufacturer, model);
  };

  const updateSearch = (manufacturer: string, model: string) => {
    const url = new URLSearchParams(window.location.search);

    if (model) {
      url.set("model", model);
    } else {
      url.delete("model");
    }

    if (manufacturer) {
      url.set("manufacturer", manufacturer);
    } else {
      url.delete("manufacturer");
    }

    const newPath = `${window.location.pathname}?${url.toString()}`;

    Router.push(newPath);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Image"
          height={25}
          width={25}
          className="absolute m-4 h-[20px] w-[20px]"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input "
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
