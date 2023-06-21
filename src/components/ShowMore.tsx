"use client";

import { ShowMoreType } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, hasNext }: ShowMoreType) => {
  const Router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPath = updateSearchParams("limit", `${newLimit}`);
    Router.push(newPath);
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
