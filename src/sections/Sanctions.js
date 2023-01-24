import React from "react";
import BlueArrow from "../media/svg/BlueArrow";
import Checkmark from "../media/svg/Checkmark";

export default function Sanctions() {
  return (
    <section className="pb-8 bg-[#F8FAFE]">
      <div className="max-w-md p-8 pt-20 mx-auto">
        <h1 className="mb-6 text-3xl font-semibold leading-tight">
          Sanctions, PEP and media checks on a centralized platform for all AML compliance needs
        </h1>
        <div className="flex flex-col gap-6">
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
      </div>
      <img src={require("../media/capone.png")} alt="sanction showcase" />
    </section>
  );
}
