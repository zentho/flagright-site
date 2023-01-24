import React from "react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-20 px-8 bg-[#EBF2FF]">
      <div className="flex mb-10 justify-between">
        <div>
          <a href="/">
            <img src={require("../media/flagright.png")} alt="flagright logo" />
          </a>
          <p className="mt-4 text-xs">© 2023 Flagright</p>
        </div>

        <div>
          <h3 className="font-medium">Follow Us</h3>
          <div className="mt-3 flex gap-4">
            <a href="https://www.linkedin.com/company/flagright/">
              <img src={require("../media/linkedin.png")} alt="linkedin logo" />
            </a>
            <a href="https://twitter.com/FlagrightHQ">
              <img src={require("../media/twitter.png")} alt="twitter logo" />
            </a>
            <a href="https://medium.com/@Flagright">
              <img src={require("../media/medium.png")} alt="medium logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10">
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
        <div className="flex flex-col gap-3">
          <h3 className="font-medium">Integrations</h3>
          <a href="/blockchain">
            <p className="font-light">Blockchain analytics</p>
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-medium">Advisory Services</h3>
          <a href="/launchpad">
            <p className="font-light">Launchpad</p>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <a href="/privacy">
            <p className="font-medium">Privacy Policy</p>
          </a>
          <a href="/terms">
            <p className="font-medium">Terms</p>
          </a>
          <a href="/jobs">
            <p className="font-medium">Jobs</p>
          </a>
          <a href="/cookie">
            <p className="font-medium">Cookie Policy</p>
          </a>
          <a href="/imprint">
            <p className="font-medium">Imprint</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
