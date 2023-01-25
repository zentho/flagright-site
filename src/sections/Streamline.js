import React from "react";
import Checkmark from "../media/svg/Checkmark";

export default function Streamline() {
  return (
    <section className="grid items-end justify-center max-w-lg grid-cols-1 pt-6 mx-auto sm:pt-14 md:max-w-2xl lg:grid-cols-2 lg:max-w-full lg:px-24 lg:pt-8 xl:px-44 2xl:px-60">
      <div className="flex flex-col p-8 sm:p-0 lg:mb-auto lg:mt-10 xl:mt-20">
        <h1 className="mb-8 lg:mb-4 text-3xl text-[#1A1935] font-semibold leading-tight lg:font-bold">
          Streamline <br className="sm:hidden" /> screening & <br className="hidden md:inline lg:hidden" />{" "}
          case management
        </h1>
        <div className="flex flex-col max-w-lg gap-6 md:max-w-xl md:gap-3 lg:gap-6 lg:max-w-sm sm:mb-10 md:mb-6 lg:mb-0 2xl:gap-4">
          <div className="flex gap-3 ">
            <Checkmark />
            <p className="leading-7 text-gray-800 lg:text-sm lg:leading-6">
              Automatically screen all new customers
            </p>
          </div>
          <div className="flex gap-3">
            <Checkmark />
            <p className="leading-7 text-gray-800 lg:text-sm lg:leading-6">
              Get a complete, unified picture of risky customers and transactions
            </p>
          </div>
          <div className="flex gap-3 ">
            <Checkmark />
            <p className="leading-7 text-gray-800 lg:text-sm lg:leading-6">
              Flexible configuration options to minimize false positives
            </p>
          </div>
          <div className="items-start hidden gap-3 lg:flex">
            <Checkmark />
            <p className="leading-7 text-gray-800 lg:text-sm lg:leading-6">
              Enable ongoing monitoring and let Flagright inform you on evolving customer risks automatically
            </p>
          </div>
        </div>
      </div>

      <img src={require("../media/han.png")} alt="screening showcase" />
    </section>
  );
}
