import React from "react";
import Checkmark from "../../media/svg/Checkmark";
import BlueArrow from "../../media/svg/BlueArrow";

export default function Combine() {
  return (
    <section className="relative flex bg-[#F8FAFE] px-24 pt-20 pb-40">
      <div className="z-20">
        <h1 className="max-w-3xl mb-8 text-2xl font-semibold leading-tight">
          Combine screening with transaction monitoring, <br /> customer risk assessment & more.
        </h1>
        <div className="flex flex-col max-w-sm gap-6">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Checkmark />
              <p className="text-sm leading-6 text-gray-800 ">
                Real-time, risk-based transaction monitoring for AML compliance & fraud prevention.
              </p>
            </div>
            <a className="block mb-4 ml-8  text-base font-medium text-[#1169F9]" href="/more">
              Learn more
              <BlueArrow />
            </a>
          </div>
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Checkmark />
              <p className="text-sm leading-6 text-gray-800 ">
                Transform customer risk assessment for onboarding & transaction risk, get rid of spreadsheets.
              </p>
            </div>
            <a className="block mb-4 ml-8  text-[#1169F9] text-base font-medium" href="/more">
              Learn more
              <BlueArrow />
            </a>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0 w-[54vw] max-w-2xl"
        src={require("../../media/screening-diagram.png")}
        alt="screening diagram"
      />
    </section>
  );
}
