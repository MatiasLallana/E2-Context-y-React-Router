import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  background-color: #f9f9f2;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const HeroImage = styled.img`
  width: 50%;
  margin-left: 20px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
`;
export const HeroText = styled.p`
  width: 90%;
  text-align: center;
  font-size: 1.2rem;
  color: #333;
`;
