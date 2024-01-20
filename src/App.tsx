import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import PragmatheHuntThatTookMyB from "./pages/PragmatheHuntThatTookMyB";
import PragmaonMyWayToWork from "./pages/PragmaonMyWayToWork";
import PragmaitsHotOutToday from "./pages/PragmaitsHotOutToday";
import PragmabedfordLn from "./pages/PragmabedfordLn";
import Ss from "./pages/Ss";
import Tie from "./pages/Tie";
import Pragmachapters from "./pages/Pragmachapters";
import Bhs from "./pages/Bhs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pragmathttmba":
        title = "";
        metaDescription = "";
        break;
      case "/pragmaomwtw":
        title = "";
        metaDescription = "";
        break;
      case "/pragmaihot":
        title = "";
        metaDescription = "";
        break;
      case "/pragmabedford-ln":
        title = "";
        metaDescription = "";
        break;
      case "/ss":
        title = "";
        metaDescription = "";
        break;
      case "/tie":
        title = "";
        metaDescription = "";
        break;
      case "/pragma-chaps":
        title = "";
        metaDescription = "";
        break;
      case "/bhs":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pragmathttmba" element={<PragmatheHuntThatTookMyB />} />
      <Route path="/pragmaomwtw" element={<PragmaonMyWayToWork />} />
      <Route path="/pragmaihot" element={<PragmaitsHotOutToday />} />
      <Route path="/pragmabedford-ln" element={<PragmabedfordLn />} />
      <Route path="/ss" element={<Ss />} />
      <Route path="/tie" element={<Tie />} />
      <Route path="/pragma-chaps" element={<Pragmachapters />} />
      <Route path="/bhs" element={<Bhs />} />
    </Routes>
  );
}
export default App;
