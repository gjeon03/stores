import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container style={{ height: "100vh" }}>
        <div>{children}</div>
      </Container>
      <Footer />
    </>
  );
}
