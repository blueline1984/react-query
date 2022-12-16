import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import RQSuperHero from "./components/RQSuperHero";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
      </Routes>
    </>
  );
  <div>App</div>;
}

export default App;
