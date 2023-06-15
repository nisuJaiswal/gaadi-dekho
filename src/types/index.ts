import { MouseEventHandler } from "react";

export interface ButtonType  {
    title: string;
    customStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'reset' | 'button' | 'submit';
}

export interface SearchManufacturerType {
    manufacturer: string;
    setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}