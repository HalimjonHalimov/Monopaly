// eslint-disable-next-line no-unused-vars
import React from "react";
import { useMultiFormContext } from "../../context/MultiFormContext";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSex from "./StepSex";
import StepTwo from "./StepTwo";
import { GradientBtn } from "../";

export default function MultifForm() {
  const { stepper } = useMultiFormContext();
  console.log(stepper);

  function MultiStepper() {
    switch (stepper) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;

      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      case 6:
        return <StepSex />;
      default:
        return null;
    }
  }

  return (
    <div className="w-full h-auto p-4 flex flex-col items-start justify-start gap-4 bg-white rounded-2xl">
      <div className="w-full h-auto flex justify-between items-center">
        <GradientBtn
          type={"button"}
          label={"Регистрация через почту"}
          onclick={() => {}}
        />
        <div className="py-2 px-4 text-base font-normal text-black rounded-xl bg-[#E9ECFF] text-center ">
          {stepper} из 6
        </div>
      </div>
      <MultiStepper />
    </div>
  );
}
