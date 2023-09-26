import styled from "styled-components";


export const StyledBlockLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  margin-bottom: 1rem;
`;


export const StyledSublabel = styled.p`
  color: ${({theme})=> theme.lightGray};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
`;

export const StyledLabel = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
`;