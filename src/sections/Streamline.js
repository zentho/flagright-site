import React from "react";
import Checkmark from "../media/svg/Checkmark";

export default function Streamline() {
  return (
    <section className="grid items-end justify-center max-w-md grid-cols-1 mx-auto md:max-w-2xl lg:grid-cols-2 lg:max-w-full lg:px-24 lg:pt-6 xl:px-32">
      <div className="flex flex-col items-center p-8 pt-16 md:px-2 lg:mb-auto">
        <h1 className="mb-4 text-3xl font-semibold leading-tight lg:text-2xl lg:max-w-sm md:max-w-xl md:text-center lg:text-left">
          Streamline screening & case management
        </h1>
        <div className="flex flex-col max-w-sm gap-6 md:gap-4">
          <div className="flex items-start gap-3 ">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800">
              Automatically screen all new customers
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800">
              Get a complete, unified picture of risky customers and transactions
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800">
              Flexible configuration options to minimize false positives
            </p>
          </div>
          <div className="items-start hidden gap-3 lg:flex">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800">
              Enable ongoing monitoring and let Flagright inform you on evolving customer risks automatically
            </p>
          </div>
        </div>
      </div>

      <img src={require("../media/han.png")} alt="screening showcase" />
    </section>
  );
}
