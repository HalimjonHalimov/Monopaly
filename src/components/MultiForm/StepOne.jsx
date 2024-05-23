// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Input } from "../";
import { useMultiFormContext } from "../../context/MultiFormContext";

export default function StepOne() {
  const [email, setemail] = useState(null);
  const { handleChangeEmil } = useMultiFormContext();

  const handlesubmit = () => {
    handleChangeEmil(email);
  };

  return (
    <form className="w-full h-auto flex flex-col gap-3">
      <h3 className="text-[#000] text-lg font-light text-center">Почта</h3>
      <Input
        state={email}
        setState={setemail}
        type={"email"}
        name={"email"}
        placeholder={"Укажите вашу почту..."}
      />
      <button
        type="submit"
        onSubmit={handlesubmit}
        className={`w-full py-2 text-lg font-semibold text-center rounded-md  ${
          email ? "bg-[#726CED] text-[#fff]" : "bg-[#E9ECFF] text-[#B7BCD8]"
        } hover:opacity-85 transition duration-150 ease-in-out `}
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
