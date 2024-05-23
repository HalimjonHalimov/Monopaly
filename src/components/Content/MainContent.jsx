// eslint-disable-next-line no-unused-vars
import React from "react";
import SiderBar from "./SideBar";
import { Container } from "../";
export default function MainContent() {
  return (
    <div className="w-full h-full bg-[#E9ECFF] ">
      <Container>
        <div className="w-full h-screen flex justify-between items-center">
          <SiderBar />
          <div className="w-[571px] h-auto">

          </div>
        </div>
        <div>Footer</div>
      </Container>
    </div>
  );
}
