import { MouseEventHandler } from "react";

export interface ButtonType  {
    title: string;
    customStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'reset' | 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerType {
    manufacturer: string;
    setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}
export interface CarType {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}