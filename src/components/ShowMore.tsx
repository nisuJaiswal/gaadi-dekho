"use client";

import { ShowMoreType } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, hasNext, setLimit }: ShowMoreType) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center mt-10">
      {!hasNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          customStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
