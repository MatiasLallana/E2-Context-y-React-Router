import styled from "styled-components";

export const RecommendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const RecommendedTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
`;
export const RecommendedCardContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RecommendedCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  gap: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
  max-width: 150px;

  img {
    width: 90%;
    height: 100px;
    border-radius: 10px;
  }

  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
`;

export function formatCurrency(amount) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(amount);
}
