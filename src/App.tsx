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
import { UserManagement } from "./pages/administration";
import { Comments } from "./pages/comments";
import { Registration } from "./pages/Registration";

// Array of header links to be used in the Layout for navigation
const headerLinks = [
  { label: "Home", to: "/" },
  { label: "Contacto", to: "/contact" },
  { label: "Iniciar Sesión", to: "/login" },
  { label: "Registro", to: "/registration" },
  { label: "Comentarios", to: "/comments" },
  { label: "Administración", to: "/administration" },
];

// Router configuration using React Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout links={headerLinks} />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/administration" element={<UserManagement />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/administration" element={<UserManagement />} />
        <Route path="/movies/:movieId" element={<Details />} />
      </Route>
    </>
  )
);

// Main application component
function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
