import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header/index";
import { IHeaderLink } from "../Header/utils";
import { StyledMain, StyledPage } from "./styles";

interface LayoutProps {
  links: IHeaderLink[];
}

function Layout(props: LayoutProps) {
  const { links } = props;

  const [actualDate, setActualDate] = useState<string>("");

  const updateDate = () => {
    const now = new Date().toLocaleString("es-ES", {
      dateStyle: "long",
      timeStyle: "short",
    });
    setActualDate(now);
  };

  useEffect(() => {
    updateDate();
    const intervalId = setInterval(updateDate, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledPage>
      <Header links={links} title={"CineScout"} date={actualDate} />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer
        title={"© 2024 CineScout. Todos los derechos reservados."}
        description={"Este es un proyecto universitario"}
      />
    </StyledPage>
  );
}

export { Layout };