"use client";

import { useRouter } from "next/navigation";
import { ShowMoreBtnProps } from "@/types";
import { CustomButtom } from ".";
import { updateSearchParams } from "@/utils";

function ShowMoreBtn({ pageNumber, isNext }: ShowMoreBtnProps) {
  const router = useRouter();

  const handleBtnClick = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathName = updateSearchParams("limit", String(newLimit));

    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButtom
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleBtnClick}
          btnType="button"
        />
      )}
    </div>
  );
}

export default ShowMoreBtn;
