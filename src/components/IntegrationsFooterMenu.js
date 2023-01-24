import React from "react";

export default function IntegrationsFooterMenu() {
  return (
    <div>
      <h3 className="mb-3 text-sm font-medium">Integrations</h3>
      <div className="flex flex-col gap-3">
        <a href="/blockchain">
          <p className="text-xs">Blockchain analytics</p>
        </a>
      </div>
    </div>
  );
}
