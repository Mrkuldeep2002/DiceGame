import styled from "styled-components";

export const Button = styled.button`
    width: 220px;
    font-size:16px ;
    text-align: center;
    padding: 10px 18px;
    border-radius: 5px;
    border: 1px solid transparent;
    background: #000;;

    &:hover{
    border: 1px solid black;
    background: #fff;
    color: #000;
    transition: 0.4s all ease;
    }

`;  
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
