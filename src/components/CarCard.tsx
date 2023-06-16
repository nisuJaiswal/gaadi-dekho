"use client";
import { CarType } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
interface CarCardProps {
  car: CarType;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex font-bold text-[32px] mt-6">
        <span className="self-start text-[14px] font-extrabold">$</span>
        {carRent}

        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative my-3 object-contain w-full h-40">
        <Image
          src={"/hero.png"}
          alt={"logo"}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-3">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "automatic" : "manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="steering" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            customStyles="py-[16px] rounded-full bg-primary-blue w-full"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
