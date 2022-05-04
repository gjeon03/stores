import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  const router = useRouter();
  const [location, setLocation] = useState();
  useEffect(() => {
    if (router.pathname === "/") {
      setLocation(true);
    } else if (router.pathname === "/store") {
      setLocation(false);
    } else {
      setLocation(null);
    }
  }, []);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">AWESOME FOOD STORE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="/"
            style={(location && { fontWeight: "800", color: "black" }) || {}}
          >
            ABOUT
          </Nav.Link>
          <Nav.Link
            href="/store"
            style={
              (location === false && { fontWeight: "800", color: "black" }) ||
              {}
            }
          >
            STORE
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
