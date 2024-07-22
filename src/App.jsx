import Navi from "./components/Navi.jsx";
import FirstScreen from "./components/FirstScreen.jsx";
import About from "./components/About.jsx";
import Team from "./components/Team.jsx";
import Classes from "./components/Classes.jsx";
import Modules from "./components/Modules.jsx";
import Membership from "./components/Membership.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main>
      <Navi />
      <FirstScreen />
      <About />
      <Team />
      <Classes />
      <Modules />
      <Membership />
      <Footer />
    </main>
  );
}

export default App;
