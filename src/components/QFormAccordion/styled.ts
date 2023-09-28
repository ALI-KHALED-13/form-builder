import styled from "styled-components";



export const StyledQuestion = styled.div`
  padding: 2rem 0;
  border-radius: 20px;
  border=bottom: 1px solid gray;
  transition: height 0.3s ease-out;
  & h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin: 0.5rem 0;
  }
`;

export const StyledType = styled.span`
  color: ${({theme})=> theme.lightGray};
  font-size: 14px;
  font-weight: 500;
`;


