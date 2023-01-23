import React from "react";
import Checkmark from "../media/svg/Checkmark";

export default function Streamline() {
  return (
    <section>
      <div className="p-8 pt-16">
        <h1 className="text-4xl font-medium mb-8 leading-tight">Streamline screening & case management</h1>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-start ">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800 text-lg">
              Automatically screen all new customers
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800 text-lg">
              Get a complete, unified picture of risky customers and transactions
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <Checkmark />
            <p className="inline-block max-w-sm leading-7 text-gray-800 text-lg">
              Flexible configuration options to minimize false positives
            </p>
          </div>
        </div>
      </div>
      <img src={require("../media/han.png")} alt="capone" />
    </section>
  );
}
