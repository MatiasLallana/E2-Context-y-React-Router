/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import styled from "styled-components";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import Cart from "../Cart/Cart";

const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #f9f9f2;
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const ContentContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #f9f9f2; */
  min-height: 100vh;
  height: auto;
  padding: 20px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  position: relative;
  top: 0;
  /* margin-top: 50px; */
  margin-bottom: 100px;
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
      <Cart />
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <FooterContainerStyled>
        <Footer />
      </FooterContainerStyled>
    </LayoutContainerStyled>
  );
};
