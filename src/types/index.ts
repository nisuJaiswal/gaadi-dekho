import { MouseEventHandler } from "react";

export interface ButtonType  {
    title: string;
    customStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'reset' | 'button' | 'submit';
}