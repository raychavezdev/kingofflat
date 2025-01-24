import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/main/about/About";
import Banner from "./components/main/banner/Banner";
import Contact from "./components/main/contact/Contact";
import PlayersBoard from "./components/main/players/PlayersBoard";
import ScoreBoard from "./components/main/players/ScoreBoard";

function App() {
  return (
    <>
      <Header />

      <Banner />

      <PlayersBoard />

      <ScoreBoard />

      <About />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
