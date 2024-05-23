// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/logo.png";
import { Container, DefaultBtn } from "../";
export default function Header() {
  return (
    <div className="w-full h-auto bg-white">
      <Container>
        <div className="flex justify-between items-center py-3">
          <img src={logo} alt="Logo" />
          <div className="flex flex-row justify-start items-center gap-2">
            <DefaultBtn
              type={"button"}
              label={"Правила игры"}
              onclick={() => {}}
            />
            <DefaultBtn
              type={"button"}
              label={"О проекте"}
              onclick={() => {}}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
