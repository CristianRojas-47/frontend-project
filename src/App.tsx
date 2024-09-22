import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./components/styles";
import { Home } from "./pages/home";

const headerLinks = [
  { label: "Home", to: "/" },
  { label: "Nosotros", to: "/about" },
  { label: "Contacto", to: "/contact" },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout links={headerLinks} />}>
      <Route path="/" element={<Home />} />
    </Route>
    </>
  )
);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
