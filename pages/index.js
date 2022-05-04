import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import Seo from "../components/Seo";

const BodyArea = styled(Container)`
  min-height: 40vh;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const BackGroundImage = styled.div`
  width: 100%;
  height: 40vh;
  min-height: 300px;
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 1)
    ),
    url(${(props) => props.$url});
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div``;

const Title = styled.h2`
  font-size: 50px;
  font-family: "Koulen", cursive;
`;

const Description = styled.span`
  font-size: 20px;
`;

export default function Home() {
  return (
    <>
      <Seo title="ABOUT" />
      <BackGroundImage $url={"/plate.jpeg"} />
      <BodyArea>
        <Content>
          <Title>AWESOME FOOD STORE</Title>
          <Description>최고로 멋진 맛집들을 소개하는 곳입니다.</Description>
        </Content>
      </BodyArea>
    </>
  );
}
