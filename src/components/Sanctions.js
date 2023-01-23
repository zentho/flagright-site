import React from "react";
import Arrow from "../media/svg/Arrow";
import Checkmark from "../media/svg/Checkmark";

export default function Sanctions() {
  return (
    <section className="pb-8 bg-[#F8FAFE]">
      <div className="p-8 pt-20">
        <h1 className="text-3xl leading-tight font-semibold mb-6">
          Sanctions, PEP and media checks on a centralized platform for all AML compliance needs
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-start ">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800">
              Bring all your data on a no-code, powerful platform to maximize the efficacy of AML compliance
              operations.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800">
              Combine screening with transaction monitoring, customer risk assessment and more.
            </p>
          </div>
          <a className="block ml-8 mb-4 text-blue-600 text-lg font-semibold" href="/more">
            Learn more
            <Arrow />
          </a>
        </div>
      </div>
      <img src={require("../media/capone.png")} alt="sanction showcase" />
    </section>
  );
}
