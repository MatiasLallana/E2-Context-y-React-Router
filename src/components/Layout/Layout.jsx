/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import styled from "styled-components";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #f9f9f2;
`;

const ContentContainerStyled = styled.div`
  min-height: 80vh;
`;

const FooterContainerStyled = styled.div`
  width: 100%;
  background-color: #f9f9f2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  bottom: 0;
`;

export const Layout = ({ children }) => {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <FooterContainerStyled>
        <Footer />
      </FooterContainerStyled>
    </LayoutContainerStyled>
  );
};
