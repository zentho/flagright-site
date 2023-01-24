import React from "react";

export default function PlatformFooterMenu() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-medium">Platform</h3>
      <a href="/time">
        <p className="font-light">Real-time transaction monitoring</p>
      </a>
      <a href="/risk">
        <p className="font-light">Customer risk assessment</p>
      </a>
      <a href="/sanctions">
        <p className="font-light">Sanctions, PEP, AM screening</p>
      </a>
      <a href="/verification">
        <p className="font-light">ID verification</p>
      </a>
    </div>
  );
}
