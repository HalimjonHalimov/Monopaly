// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function GradientBtn({ type, label, onclick }) {
  return (
    <button
      className="py-2 px-6 bg-gradient-to-r from-[#726CED]  to-[#70DCF1]  text-lg text-[#fff] font-semibold rounded-xl hover:opacity-85 transition-all duration-150 ease-in-out shadow shadow-[#726CED40]"
      type={type}
      onClick={onclick}
    >
      {label}
    </button>
  );
}
