import React from "react";
import BlueArrow from "../media/svg/BlueArrow";
import Checkmark from "../media/svg/Checkmark";

export default function Sanctions() {
  return (
    <section className="pb-8 lg:bg-white bg-[#F8FAFE] grid grid-cols-1 lg:grid-cols-2 items-center md:pl-12 lg:pt-6 lg:pl-24 lg:pr-44 lg:pb-12">
      <div className="max-w-xl p-8 pt-20 mx-auto lg:mr-0">
        <h1 className="mb-6 text-3xl font-semibold leading-tight lg:font-bold lg:text-2xl lg:mb-2">
          Sanctions, PEP and media checks <br className="hidden md:invisible" /> on a centralized platform
          <span className="md:hidden"> for all AML compliance needs </span>
        </h1>
        <div className="flex flex-col gap-6 lg:hidden">
          <div className="flex items-start gap-3 ">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800">
              Bring all your data on a no-code, powerful platform to maximize the efficacy of AML compliance
              operations.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800">
              Combine screening with transaction monitoring, customer risk assessment and more.
            </p>
          </div>
          <a className="block mb-4 ml-8 text-lg font-semibold text-[#1169F9]" href="/more">
            Learn more
            <BlueArrow />
          </a>
        </div>
        <p className="hidden text-xs leading-5 text-gray-800 lg:block">
          Bring all your data on a no-code, powerful platform to maximize <br className="invisible" /> the
          efficacy of AML compliance operations.
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
