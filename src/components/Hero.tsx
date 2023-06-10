"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36">
        <h1 className="hero__title">Find Cars Easily</h1>
        <p className="hero__subtitle">Get Your Dream Car Here...</p>
        <CustomButton
          title="Checkout Cars"
          customStyles=" bg-primary-blue text-white rounded-full mt-6"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Car" fill className="object-contain" />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
