import styled from "styled-components";

export const InstructionBackground = styled.div`
  background: url("../../assets/instructions-background.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const InstructionContainer = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InstructionCard = styled.div`
  width: 900px;
  background: #ffffff;
  border: 1px solid #49b6ff;
  box-sizing: border-box;
  box-shadow: 6px 8px 4px rgb(73 182 255 / 30%);
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 50px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 10px;
  }

  ul {
    list-style: square;

    margin-left: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;
