import "./index.css";
import { Header } from "./components/Header.jsx";
import { About } from "./components/About.jsx";
import { AfterHours } from "./components/Afterhours.jsx";
import { Footer } from "./components/Footer.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <AfterHours></AfterHours>
      <Footer></Footer>
    </>
  );
}
