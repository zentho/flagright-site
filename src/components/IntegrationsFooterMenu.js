import React from "react";

export default function IntegrationsFooterMenu() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-medium">Integrations</h3>
      <a href="/blockchain">
        <p className="font-light">Blockchain analytics</p>
      </a>
    </div>
  );
}
