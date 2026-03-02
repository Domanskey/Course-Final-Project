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
      {/* <Effect></Effect> */}
    </>
  );
}

function Effect() {
  return (
    <div className="absolute w-3/4 h-3/4 bottom-0 right-0 translate-x-1/3 translate-y-1/2 rounded-full blur-3xl opacity-15 bg-linear-to-r from-sky-500 to-indigo-500"></div>
  );
}
