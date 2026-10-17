import Navbar from './components/NavAndFooter/Navbar';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import Home from './pages/Home';
import MainLayout from './Layout/MainLayout';
import About from './pages/About';
import Portfolio from './components/PortfolioLayout/Portfolio';
import Portfolio_grid from './components/PortfolioLayout/Portfolio_grid';
import PortfolioSingle from './pages/PortfolioSingle';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfoliogrid" element={<Portfolio_grid />} />
        <Route path="/portfolioSingle" element={<PortfolioSingle />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
