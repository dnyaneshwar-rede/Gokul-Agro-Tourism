import React from "react";
import Image from "next/image";

interface ButtonProps {
    label: string,
    imgPath: string,
    alt: string
}

const Button = ({label, imgPath, alt}: ButtonProps) => {
  return (
    <button className="px-6 py-3 rounded-full border-2 border-slate-400 bg-blue-400 hover:bg-blue-600 flex items-center gap-2">
      <Image src={imgPath} width={20} height={20} alt={alt} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default Button;
