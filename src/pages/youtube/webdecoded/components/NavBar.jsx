import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActive = (val) => {
    setActive(val);
  };
  return (
    <Navbar expand="sm" className={`${scrolled ? "scrolled" : ""} bg-body-tertiary`}>
      <Container>
        <Navbar.Brand href="#home">Webdecoded1</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">halo</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => onUpdateActive("home")}
              className={`${active === "home" ? "active" : ""} nvbar-link`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => onUpdateActive("skills")}
              className={`${active === "skills" ? "active" : ""} nvbar-link`}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => onUpdateActive("projects")}
              className={`${active === "projects" ? "active" : ""} nvbar-link`}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="" src={""} alt=""></a>
              <a href="" src={""} alt=""></a>
              <a href="" src={""} alt=""></a>
            </div>
            <button className="vvd" onClick={() => console.log("hello")}>
              <span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
