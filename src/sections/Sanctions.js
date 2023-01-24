import React from "react";
import BlueArrow from "../media/svg/BlueArrow";
import Checkmark from "../media/svg/Checkmark";

export default function Sanctions() {
  return (
    <section className="pb-8 bg-[#F8FAFE] grid grid-cols-1 md:grid-cols-2 items-center md:pl-12 lg:pt-6">
      <div className="max-w-xl p-8 pt-20 mx-auto">
        <h1 className="mb-6 text-3xl font-bold leading-tight md:text-2xl lg:text-3xl lg:mb-2">
          Sanctions, PEP and media checks <br className="hidden" /> on a centralized platform
          <span className="lg:hidden"> for all AML compliance needs </span>
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
          <a className="block mb-4 ml-8 text-lg font-semibold text-blue-600" href="/more">
            Learn more
            <BlueArrow />
          </a>
        </div>
        <p className="hidden leading-7 text-gray-800 lg:block">
          Bring all your data on a no-code, powerful platform to maximize the efficacy of AML compliance
          operations.
        </p>
      </div>

      <img src={require("../media/capone.png")} alt="sanction showcase" />
    </section>
  );
}
