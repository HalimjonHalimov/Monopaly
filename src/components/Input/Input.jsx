// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Input({ type, name, placeholder, setState }) {
  return (
    <input
      type={type}
      name={name}
      className="w-full h-14 border border-spacing-0.5 border-[#7B81A0] outline-none placeholder:text-[#7B81A0] placeholder:font-light text-black font-normal text-lg rounded-lg px-4  focus:border-[#726CED]  "
      placeholder={placeholder}
      onChange={(e) => setState(e.target.value)}
    />
  );
}
