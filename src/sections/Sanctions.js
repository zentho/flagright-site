import React from "react";
import BlueArrow from "../media/svg/BlueArrow";
import Checkmark from "../media/svg/Checkmark";

export default function Sanctions() {
  return (
    <section className="pb-8 lg:bg-white bg-[#F8FAFE] pt-20 grid grid-cols-1 lg:grid-cols-2 items-center sm:pl-12 lg:pt-6 lg:pl-24 lg:pr-44 lg:pb-12 xl:pl-44">
      <div className="max-w-xl p-8 mx-auto lg:p-0">
        <h1 className="self-start mb-6 text-3xl font-semibold leading-tight lg:font-bold lg:text-2xl lg:mb-2">
          Sanctions, PEP and media checks on a centralized platform
          <span className="lg:hidden"> for all AML compliance needs </span>
        </h1>
        <div className="flex flex-col max-w-sm gap-6 lg:hidden">
          <div className="flex items-start gap-3">
            <Checkmark />
            <p className="leading-7 text-gray-800 align-top">
              Bring all your data on a no-code, powerful platform to maximize the efficacy of AML compliance
              operations.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Checkmark />
            <p className="leading-7 text-gray-800 ">
              Combine screening with transaction monitoring, customer risk assessment and more.
            </p>
          </div>
          <a className="block mb-4 ml-8 text-lg font-semibold text-[#1169F9]" href="/more">
            Learn more
            <BlueArrow />
          </a>
        </div>
        <p className="hidden text-sm leading-5 text-gray-800 lg:block">
          Bring all your data on a no-code, powerful platform to maximize <br className="hidden xl:inline" />{" "}
          the efficacy of AML compliance operations.
        </p>
      </div>

      <img
        className="max-w-sm mx-auto sm:max-w-2xl lg:max-w-xl"
        src={require("../media/capone.png")}
        alt="sanction showcase"
      />
    </section>
  );
}
