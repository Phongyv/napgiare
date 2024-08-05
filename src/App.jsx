import Home from "./App/Home";
import { Routes,Route } from "react-router-dom";
import Shop from "./App/Service/Shop/Shop";
import MiniGame from "./App/Service/MiniGame/MiniGame";
import Nap from "./App/Service/Nap/Nap";
import Support from "./App/Service/Support/Support";
import Main from "./App/Main";
import User from "./App/User/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} >
      <Route path="/" element={<Home />} />
      <Route path="/shopacc" element={<Shop />} />
      <Route path="/minigame" element={<MiniGame />} />
      <Route path="/nap" element={<Nap />} />
      <Route path="/support" element={<Support />} />
      <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
