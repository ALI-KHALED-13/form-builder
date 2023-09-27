import styled from "styled-components";





export const StyledSwitchWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
`;

interface StyledSliderProps {
  isChecked?: boolean;
  disabled?: boolean;
  direction?: string;
}

export const StyledButtonSlider = styled.div<StyledSliderProps>`
  width: 4rem;
  height: 2rem;
  user-select: none;
  position: relative;
  border: 1px solid gray;
  border-radius: 1rem;
  cursor: ${({disabled})=> disabled? 'not-allowed':'pointer'};
  background-color: ${ ({theme, isChecked})=> theme[isChecked? 'green': 'white']};

  transition: background-color 0.3 ease-out;
`;

export const StyledSwitch = styled.button<StyledSliderProps>`
  width: 2rem;
  height: 2rem;
  outline: none;
  transition: all 0.3s ease-in-out;

  border-radius: 50%;
  cursor: ${({disabled})=> disabled? 'not-allowed':'pointer'};
  border: 1px solid gray; 
  background-color: ${ ({theme, isChecked})=> theme[isChecked? 'lightGreen': 'whitishGray']};
  position: absolute;
  top: -1px;
  left: ${ ({direction})=> direction === 'left'? '0':'calc(100% - 2rem)'};
  
`;
