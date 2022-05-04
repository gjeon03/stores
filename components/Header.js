import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Brand = styled(Navbar.Brand)`
  font-size: 25px;
`;

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
    <Navbar bg="light" variant="light">
      <Container>
        <Brand href="/">AWESOME FOOD STORE</Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="/"
            style={(location && { fontWeight: "800", color: "black" }) || {}}
          >
            ABOUT
          </Nav.Link>
          <Nav.Link
            href="/store"
            style={(!location && { fontWeight: "800", color: "black" }) || {}}
          >
            STORE
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
