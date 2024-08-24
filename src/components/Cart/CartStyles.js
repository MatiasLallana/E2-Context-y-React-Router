import styled from "styled-components";

export const CartContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px 0 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  height: 80vh;
  top: 100px;
  right: 0;
  z-index: 1;

  @media (min-width: 768px) {
    min-height: 100vh;
    border-radius: 0;
    max-width: 30%;
  }
`;

export const CartTitle = styled.h2`
  font-size: 2rem;
`;

export const CartText = styled.p`
  font-size: 1.2rem;
`;
export const CartCounter = styled.span`
  font-size: 1.2rem;
  margin-left: 10px;
`;
export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #333;
  gap: 10px;
`;

export const CartItemImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const CartItemText = styled.p`
  font-size: 1rem;
`;
