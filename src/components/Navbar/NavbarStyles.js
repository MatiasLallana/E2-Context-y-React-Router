import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10%;
  height: 100px;
  background-color: #f9f9f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* @media (max-width: 768px) {
    justify-content: center;
  } */
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    /* display: none; */
  }
`;

export const DeployMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

export const LinksContainer = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    gap: 20px;

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.2rem;
    }

    a:hover {
      color: #f76c6c;
      gap: 5px;
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 100px;
    left: 0;
    text-align: center;
    justify-content: center;
    width: 100%;
    background-color: #f9f9f2;
    padding: 10px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    ul {
      flex-direction: column;
      gap: 10px;
      padding: 0 20px;
    }
  }
`;
