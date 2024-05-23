// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from "react";
export const MultiForm = createContext();

// eslint-disable-next-line react/prop-types
export default function MultiFormContextProvider({ children }) {
  const [stepper, setstepper] = useState(1);
  const [email, setEmail] = useState(null);

  const handleChangeEmil = (email) => {
    setEmail(email);
  };

  const handleStepperInc = () => {
    setstepper(stepper + 1);
  };

  const handleStepperDec = () => {
    setstepper(stepper - 1);
  };

  return (
    <MultiForm.Provider
      value={{
        stepper,
        handleStepperInc,
        handleStepperDec,
        email,
        setEmail,
        handleChangeEmil,
      }}
    >
      {children}
    </MultiForm.Provider>
  );
}

export function useMultiFormContext() {
  const context = useContext(MultiForm);
  if (context == null) {
    throw new Error("Auth Error with Context Provider");
  }
  return context;
}
