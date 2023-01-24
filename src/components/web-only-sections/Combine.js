import React from "react";
import Checkmark from "../../media/svg/Checkmark";
import Arrow from "../../media/svg/Arrow";

export default function Combine() {
  return (
    <section className="relative flex bg-[#F8FAFE]">
      <div className="z-20 px-24 pt-20 pb-40">
        <h1 className="max-w-3xl mb-8 text-3xl font-semibold leading-tight">
          Combine screening with transaction monitoring, customer risk assessment & more.
        </h1>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Checkmark />
              <p className="inline-block max-w-md leading-7 text-gray-800">
                Real-time, risk-based transaction monitoring for AML compliance & fraud prevention.
              </p>
            </div>
            <a className="block mb-4 ml-8 text-lg font-semibold text-blue-600" href="/more">
              Learn more
              <Arrow />
            </a>
          </div>
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Checkmark />
              <p className="inline-block max-w-md leading-7 text-gray-800">
                Transform customer risk assessment for onboarding & transaction risk, get rid of spreadsheets.
              </p>
            </div>
            <a className="block mb-4 ml-8 text-lg font-semibold text-blue-600" href="/more">
              Learn more
              <Arrow />
            </a>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0 w-[54vw]"
        src={require("../../media/screening-diagram.png")}
        alt="screening diagram"
      />
    </section>
  );
}
