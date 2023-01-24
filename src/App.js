import TrustSection from "./components/TrustSection";
import Protect from "./components/Protect";
import Reliable from "./components/Reliable";
import Sanctions from "./components/Sanctions";
import Streamline from "./components/Streamline";
import What from "./components/What";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Sanctions />
      <Reliable />
      <Protect />
      <Streamline />
      <What />
      <TrustSection />
      <Footer />
    </div>
  );
}

export default App;
