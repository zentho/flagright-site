import React from "react";

export default function TrustSection() {
  return (
    <section className="px-8 pt-16 pb-12">
      <div className="flex flex-col items-center mb-20 text-center">
        <h2 className="mb-12 text-3xl font-bold lg:mb-4">Our partners</h2>
        <div className="grid items-center max-w-sm grid-cols-2 lg:max-w-5xl gap-x-12 gap-y-8 lg:grid-cols-6">
          <img src={require("../media/comply-advantage.png")} alt="comply advantage logo" />
          <img src={require("../media/coinfirm.png")} alt="coinfirm logo" />
          <img className="pr-6" src={require("../media/TRM.png")} alt="TRM logo" />
          <img src={require("../media/aiprise.png")} alt="aiprise logo" />
          <img src={require("../media/clear-junction.png")} alt="clear junction logo" />
          <img src={require("../media/rapyd.png")} alt="rapyd logo" />
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-3 text-3xl font-bold">Expert team</h2>
        <p className="max-w-md mb-12 leading-7 text-gray-800 md:max-w-lg lg:mb-2 lg:max-w-4xl">
          Our team has built anomaly detection & financial crime solutions in the world's most innovative
          companies.
        </p>
        <div className="grid items-center max-w-sm grid-cols-2 gap-8 lg:max-w-2xl gap-x-20 lg:grid-cols-4">
          <img className="" src={require("../media/revolut.png")} alt="revolut logo" />
          <img src={require("../media/palantir.png")} alt="palantir logo" />
          <img className="p-6" src={require("../media/aws.png")} alt="aws logo" />
          <img src={require("../media/florida-blue.png")} alt="florida blue logo" />
        </div>
      </div>
    </section>
  );
}
