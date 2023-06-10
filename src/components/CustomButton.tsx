"use client";
import { ButtonType } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  customStyles,
  btnType,
  handleClick,
}: ButtonType) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${customStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
