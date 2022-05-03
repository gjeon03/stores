import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  const router = useRouter();
  const [location, setLocation] = useState();
  useEffect(() => {
    if (router.pathname === "/") {
      setLocation(true);
    } else {
      setLocation(false);
    }
  }, []);
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: "25px" }}>
          AWESOME FOOD STORE
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="/"
            style={location ? { fontWeight: "800", color: "black" } : {}}
          >
            ABOUT
          </Nav.Link>
          <Nav.Link
            href="/store"
            style={!location ? { fontWeight: "800", color: "black" } : {}}
          >
            STORE
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
