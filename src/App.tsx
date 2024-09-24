import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./components/styles";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Login } from "./pages/login";
import { Details } from "./pages/details";
import { Registration } from "./pages/Registration";

const headerLinks = [
  { label: "Home", to: "/" },
  { label: "Contacto", to: "/contact" },
  { label: "Iniciar Sesión", to: "/login" },
  { label: "Registro", to: "/registration" },
  { label: "Comentarios", to: "/comments" },
  { label: "Administración", to: "/administration" },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout links={headerLinks} />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/comments" element={<></>} />
        <Route path="/administration" element={<></>} />
        <Route path="/movies/:movieId" element={<Details />} />
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
