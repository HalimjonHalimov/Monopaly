// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function DefaultBtn({ type, label, onclick }) {
  return (
    <button
      className="py-3 px-6 bg-[#E9ECFF] text-base text-[#000000] font-normal capitalize rounded-full"
      type={type}
      onClick={onclick}
    >
      {label}
    </button>
  );
}
