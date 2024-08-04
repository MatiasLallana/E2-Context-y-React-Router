import styled from "styled-components";

export const TitleSection = styled.h3`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin: 20px 0;
  width: 100%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f2;
  justify-content: center;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  width: 25%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
`;
export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;
export const ProductText = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
  height: 100px;
`;
export const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

export const ProductButton = styled.button`
  padding: 10px 20px;
  background-color: #f76c6c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #333;
  }
`;
