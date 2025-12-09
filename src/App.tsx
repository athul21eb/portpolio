import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, NavBar, Welcome } from "@components";

import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
  Photos,
} from "@windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />

      <Welcome />
      <Home />
      <Dock />

      {/* windows */}
      <Terminal />
      <Safari />
      <Contact />
      <Finder />
      <Resume />
      <Text />
      <Image />
      <Photos />
    </main>
  );
};

export default App;
