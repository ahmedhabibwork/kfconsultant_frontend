import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`ant-input css-ihxmty ant-input-outlined flex-1 max-w-full h-10 px-4 py-[20px] border border-[#EAEAEA] focus:outline-none max-sm:h-9 bg-white ${className}`}
      {...props}
    />
  );
};

export default Input;
