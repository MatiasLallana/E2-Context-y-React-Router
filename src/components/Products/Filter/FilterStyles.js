import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
`;
export const FilterTitle = styled.h3`
  font-size: 1.5rem;
`;

export const FilterButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;
