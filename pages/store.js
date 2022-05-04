import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import {
  CloseButton,
  Col,
  Container,
  Image,
  Row,
  Toast,
} from "react-bootstrap";
import styled from "styled-components";

const BodyArea = styled(Container)`
  min-height: 80vh;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const GridArea = styled(Row)`
  grid-row-gap: 30px;
`;

const Item = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StoreThumb = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
`;

const DetailClose = styled(CloseButton)`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  border: 2px solid white;
  font-size: 20px;
  z-index: 2;
  transition: transform 0.2s;
  &:hover {
    border: 2px solid black;
    transform: scale(1.1);
    background-color: white;
  }
`;

const DetailBody = styled(Toast.Body)`
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(auto-fit, 1ft);
  grid-auto-rows: 1fr;
`;

const DetailImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const DetailImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const DetailInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-line;
  overflow-y: auto;
`;

const DetailTitle = styled.h3``;

const DetailDes = styled.div``;

const DetailUrl = styled(Link)``;

export default function store({ results }) {
  const [show, setShow] = useState(true);
  const [data, setData] = useState(null);

  const handlerClose = () => {
    document.body.style.overflow = "auto";
    setData(null);
    setShow(false);
  };
  const handlerOnClilck = (id) => {
    document.body.style.overflow = "hidden";
    (async () => {
      const result = (await axios.get(`api/stores/${id}`)).data;
      setData(result);
    })();
    setShow(true);
  };
  return (
    <BodyArea>
      <GridArea xl={5}>
        {results?.map((v, i) => (
          <Item xs={6} md={4} key={i}>
            <StoreThumb
              key={i}
              src={v.thumb}
              onClick={() => handlerOnClilck(v.id)}
            />
          </Item>
        ))}
      </GridArea>
      <Toast show={show}>
        {data && (
          <Overlay>
            <DetailContainer>
              <DetailClose onClick={handlerClose} />
              <DetailBody>
                <DetailImageBox>
                  <DetailImage src={data.image} />
                </DetailImageBox>
                <DetailInfo>
                  <DetailTitle>{data.name}</DetailTitle>
                  <DetailDes>{data.description}</DetailDes>
                  {(data.url && (
                    <div>
                      <DetailUrl href={data.url}>
                        <a target="_blank">{data.url}</a>
                      </DetailUrl>
                    </div>
                  )) || <div></div>}
                </DetailInfo>
              </DetailBody>
            </DetailContainer>
          </Overlay>
        )}
      </Toast>
    </BodyArea>
  );
}

export async function getServerSideProps() {
  const results = (await axios.get(`http://localhost:3000/api/stores`)).data;
  return {
    props: {
      results,
    },
  };
}
