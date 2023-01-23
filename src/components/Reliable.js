import React from "react";

export default function Reliable() {
  return (
    <section className="p-8 pt-20 pb-24">
      <h2 className="mb-4 text-3xl font-semibold">Reliable, global data sources</h2>
      <p className="leading-7 mb-8">
        We support and frequently update our data sources from global lists including OFAC, HM Treasury, UN,
        and EU to deliver you relevant and up-to-date information.
      </p>
      <div className="grid grid-cols-2 items-center w-80 gap-y-10">
        <img src={require("../media/OFAC.png")} alt="OFAC logo" />
        <img src={require("../media/FCA.png")} alt="FCA logo" />
        <img src={require("../media/EU.png")} alt="EU logo" />
        <img src={require("../media/UN.png")} alt="UN logo" />
      </div>
    </section>
  );
}
