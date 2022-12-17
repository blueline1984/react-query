import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import RQSuperHero from "./components/RQSuperHero";
import ParallelQueriesPage from "./components/ParallelQueriesPage";
import DynamicParallelQuries from "./components/DynamicParallelQuries";
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
        <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
        <Route
          path="/rq-dynamic-parallel"
          element={<DynamicParallelQuries heroId={[1, 3]} />}
        />
      </Routes>
    </>
  );
  <div>App</div>;
}

export default App;
