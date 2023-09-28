import styled from "styled-components";




export const StyledFormWrapper = styled.main`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  max-width: 60rem;
  margin: auto;
`;


export const StyledSectionHeader = styled.h2`
  padding: 3rem;
  border-radius: 20px 20px 0px 0px;
  font-size: 25px;
  background: #D0F7FA;
  font-style: normal;
  font-weight: 600;
`;

export const StyledSectionContainer = styled.div`
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 3px 3px 14px 0px rgba(190, 190, 190, 0.30);
  & > ul { // fields list
    list-style-type: none;
  }
`;


export const StyledField = styled.li`
  padding: 2.5rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: 2.5fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  text-transform: capitalize;
  border-bottom: 1px solid ${({theme})=> theme.lightGray};
`;

export const StyledQuestion = styled(StyledField)`
  padding: 2rem 0;
  text-transform: normal;
  display: list-item;
  transition: height 0.3s ease-out;
`;


