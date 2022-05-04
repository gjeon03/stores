import { Container } from "react-bootstrap";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const BodyArea = styled(Container)`
  min-height: 80vh;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <BodyArea>
        <div>{children}</div>
      </BodyArea>
      <Footer />
    </>
  );
}
