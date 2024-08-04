import styled from "styled-components";

export const contactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f2;
  height: 80vh;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
`;
export const formContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const contactText = styled.p`
  font-size: 2rem;
  color: #333;
  text-align: center;
  width: 70%;

  padding: 20px;
  margin: 0 auto;
`;
export const contactTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
`;

export const textarea = styled.textarea`
  padding: 10px;
  margin: 10px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #333;
  outline: none;
  font-size: 1rem;
`;

export const button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    background-color: #555;
  }
`;

export const formInput = styled.input`
  padding: 10px;
  margin: 10px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #333;
  outline: none;
  font-size: 1rem;
`;
