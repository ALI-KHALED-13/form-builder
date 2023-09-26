import styled, { css } from "styled-components";


interface StyledOptionProps {
  disabled?: boolean;
  isSelected: boolean;
}

export const StyledOption = styled.li<StyledOptionProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  cursor: ${( {disabled} )=> disabled? 'not-allowed' : 'pointer'};
  

  &:hover .btn {
    ${({ isSelected, disabled, theme})=> !isSelected &&  !disabled &&
     css`
      background-color: ${theme.lightViolet};
    `}
  }

`;

interface StyledRadioProps {
  disabled?: boolean;
  isSelected: boolean;
}

export const StyledRadioInput = styled.button<StyledRadioProps>`
  border-radius: 50%;
  width: 1.9rem;
  height: 1.9rem;
  border: 2px solid ${({disabled, theme})=> disabled? '#afafaf' :theme.lightViolet};
  background-color: ${({theme})=> theme.lightGray};
  flex: 0 0 auto;
  cursor: inherit;
  transition: background-color 0.2s ease-in-out;


  ${({ isSelected, disabled, theme})=> isSelected && css`
      background-color: ${disabled? '#afafaf' :theme.violet};
      display: flex;
      align-items: center;
      justify-content: center;
  `}

`;

export const StyledRadioInputFill = styled.div`
  width: 0.77rem;
  height: 0.77rem;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${({theme})=> theme.lightGray}; // same as unselected StyledRadioUnput's background-color
`;


interface StyledLabelProps {
  disabled?: boolean;
  isSelected: boolean;
}

export const StyledOptionLabel = styled.p<StyledLabelProps>`
  color: ${( {disabled} )=> disabled && "gray"};
  font-weight: ${( {isSelected} )=> isSelected && "bold"};
`;