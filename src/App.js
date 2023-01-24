import TrustSection from "./sections/TrustSection";
import Protect from "./sections/Protect";
import Reliable from "./sections/Reliable";
import Sanctions from "./sections/Sanctions";
import Streamline from "./sections/Streamline";
import What from "./sections/What";
import Footer from "./sections/Footer";
import Combine from "./sections/web-only-sections/Combine";
import Designed from "./sections/web-only-sections/Designed";

function App() {
  return (
    <div>
      <main>
        <Sanctions />
        <div className="hidden lg:block">
          <Combine />
        </div>
        <Reliable />
        <Protect />
        <Streamline />
        <div className="hidden lg:block">
          <Designed />
        </div>
        <div className="lg:hidden">
          <What />
        </div>
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
