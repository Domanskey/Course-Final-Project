import "./index.css";
import { Header } from "./Header.jsx";
import { About } from "./About.jsx";
import { AfterHours } from "./Afterhours.jsx";
import { Footer } from "./Footer.jsx";

export default function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <AfterHours></AfterHours>
      <Footer></Footer>
    </>
  );
}
