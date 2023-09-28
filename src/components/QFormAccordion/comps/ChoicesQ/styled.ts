import styled from "styled-components";



export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  & > p {
    font-weight: 600;
    font-size: 1.5rem;
    padding-left: 3rem;
    margin-top: 1rem;
  }
`;


export const StyledChoice = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > svg {
    cursor: pointer;
  }
`;