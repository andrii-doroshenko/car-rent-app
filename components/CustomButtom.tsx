"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButtom = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button" || btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButtom;