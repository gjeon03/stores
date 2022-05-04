import styled from "styled-components";

const FooterArae = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8c8c8c;
`;

export default function Footer() {
  return (
    <FooterArae>
      <span>&copy; {new Date().getFullYear()} JeonGyeongYeon</span>
    </FooterArae>
  );
}
