"use client";
import { ButtonType } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  customStyles,
  btnType,
  handleClick,
  textStyles,
  rightIcon,
}: ButtonType) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${customStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt={rightIcon}
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
