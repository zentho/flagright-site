import TrustSection from "./components/TrustSection";
import Protect from "./components/Protect";
import Reliable from "./components/Reliable";
import Sanctions from "./components/Sanctions";
import Streamline from "./components/Streamline";
import What from "./components/What";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <main>
        <Sanctions />
        <Reliable />
        <Protect />
        <Streamline />
        <What />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
