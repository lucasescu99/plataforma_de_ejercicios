import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
`;

export const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: white;
  margin-top: 90px;
  font-weight: 600;
  user-select: none;
`;

export const HomeSubtitle = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: white;
  margin: 0 auto;
  margin-top: 50px;
  width: 50%;
  user-select: none;
  margin-bottom: 80px;
`;

export const HomeInput = styled.input`
  width: 400px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px #62d0ff;
  margin: 0 auto;
  outline: none;
  font-size: 18px;
  padding-left: 6px;
  color: white;
  margin-bottom: 20px;
`;

export const HomeButton = styled.button`
  width: 178px;
  height: 48px;
  background: #ff062e;
  border: 1px solid #ff062e;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin: 0 auto;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 0px 20px rgba(255, 6, 46, 0.73);
  }
  &:active {
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    color: #ff062e;
    border: none;
  }
`;
