"use client";

import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  className: string;
  label: string;
  imgPath: string;
  alt: string;
}

import Image from 'next/image';

const Button: React.FC<ButtonProps> = ({ type, className, label, imgPath, alt }) => {
  return (
    <button type={type} className={className}>
      <Image src={imgPath} alt={alt} width={4} height={4} className="w-4 h-4 inline-block mr-2" />
      {label }
    </button>
  );
};

export default Button;
