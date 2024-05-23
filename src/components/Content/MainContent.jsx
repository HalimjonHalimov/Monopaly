// eslint-disable-next-line no-unused-vars
import React from "react";
import SiderBar from "./SideBar";
import { AuthProvder, Container, MultifForm } from "../";
import { Link } from "react-router-dom";
export default function MainContent() {
  const handlesubmit = () => {};
  return (
    <div className="w-full h-full bg-[#E9ECFF] ">
      <Container>
        <div className="w-full h-screen flex justify-between items-center">
          <SiderBar />
          <div className="w-[571px] h-auto flex flex-col gap-3">
            <MultifForm />
            <AuthProvder />
            <div className="w-full h-auto p-4 flex flex-col gap-4 bg-white rounded-2xl">
              <h3 className="text-[#000] text-lg font-light text-center">
                Уже зарегистрированы?
              </h3>
              <button
                type="submit"
                onSubmit={handlesubmit}
                className="w-full py-2 text-lg font-semibold text-center rounded-md bg-[#E9ECFF] text-[#B7BCD8] hover:opacity-85 transition duration-150 ease-in-out"
              >
                Войти
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mb-8 flex justify-start items-center gap-4 text-black text-sm font-normal">
          &copy;Land Of Monopoly
          <Link to={"/"} className="text-[#726CED]">
            Русский
          </Link>
          <Link to={"/"} className="text-[#726CED]">
            English
          </Link>
          <Link to={"/"} className="text-[#726CED]">
            все языки »
          </Link>
        </div>
      </Container>
    </div>
  );
}
