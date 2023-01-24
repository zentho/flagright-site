import React from "react";

export default function Reliable() {
  return (
    <section className="p-8 pt-20 pb-24 sm:text-center md:flex md:flex-col md:items-center">
      <h2 className="mb-4 text-3xl font-semibold leading-tight">Reliable, global data sources</h2>
      <p className="max-w-2xl mb-8 leading-7 md:mb-12">
        We support and frequently update our data sources from global lists including OFAC, HM Treasury, UN,
        and EU to deliver you relevant and up-to-date information.
      </p>
      <div className="grid items-center max-w-3xl grid-cols-2 w-80 gap-y-10 sm:grid-cols-4 sm:gap-4 sm:w-full">
        <img src={require("../media/OFAC.png")} alt="OFAC logo" />
        <img src={require("../media/FCA.png")} alt="FCA logo" />
        <img src={require("../media/EU.png")} alt="EU logo" />
        <img src={require("../media/UN.png")} alt="UN logo" />
      </div>
    </section>
  );
}
