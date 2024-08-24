import styled from "styled-components";

export const aboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 80vh; */
  background-color: #f9f9f2;
  flex-direction: column;
  /* background-image: url("https://media.licdn.com/dms/image/C4D12AQHbZlpFTZ0JOQ/article-cover_image-shrink_600_2000/0/1618508672269?e=2147483647&v=beta&t=y7EMJUIBwrwChljEHYQW7f9hTbK0Hj_CqQ_DueQdTHc"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
`;
export const aboutText = styled.p`
  font-size: 2rem;
  color: #333;
  text-align: center;
  width: 70%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const aboutTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
