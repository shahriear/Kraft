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
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
