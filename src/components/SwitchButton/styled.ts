import styled from "styled-components";





export const StyledSwitchWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
`;

interface StyledSliderProps {
  inactive: boolean;
  disabled?: boolean;
  direction?: string;
}

export const StyledButtonSlider = styled.div<StyledSliderProps>`
  width: 4rem;
  height: 2rem;
  user-select: none;
  position: relative;
  
  border-radius: 1rem;
  cursor: ${({disabled})=> disabled? 'not-allowed':'pointer'};
  background-color: ${ ({theme, inactive, disabled})=> {
    if (disabled) return  theme.lightGray;
    if (inactive) return  theme.gray;
    return theme.green;
  }};

  &:hover {
    background-color: ${ ({theme, inactive, disabled})=> !disabled && theme[inactive? 'lightGray':'green']};

    & > .StyledSwitch {
      border-color: ${ ({theme, inactive, disabled})=> !disabled && theme[inactive? 'lightGray':'green']};  
    }
  }

  transition: background-color 0.3 ease-out;
`;

export const StyledSwitch = styled.button<StyledSliderProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${({theme})=> theme.white};
  outline: none;
  transition: border-left-color 0.2s ease-in-out;

  border-radius: 50%;
  cursor: ${({disabled})=> disabled? 'not-allowed':'pointer'};
  border: 2px solid; 
  border-color: ${ ( {theme, inactive, disabled, })=> {
    if (disabled) return  theme.lightGray;
    if (inactive) return  theme.gray;
    return theme.green;
  }};
  position: absolute;
  top: 0;
  left: ${ ({direction})=> direction === 'left'? '0':'calc(100% - 2rem)'};
  
`;