import styled, { css } from 'styled-components';
import {CaretDown} from '@phosphor-icons/react';

export const StyledLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 600; 
  width: 100%;
  margin-bottom: 0.3rem;
  text-transform: capitalize;
`;

export const StyledNote = styled.p`

  color: ${({theme}) => theme.gray};
  margin-bottom: 1rem;
  text-transform: capitalize;
`;
/**/////////////////////////////////////////////////////////////////////////////// */

interface StyledDDProps {
  $expandDD: boolean;
  $isTransparent: boolean;
  readonly?: boolean;
}

interface DDRelatedProps {
  $expandDD: boolean;
}

export const StyledDropDown = styled.div<StyledDDProps>`
  position: relative;
  padding: 1.5rem;
  margin: 1rem 0;
  max-height: 40rem;
  min-width: 15rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid ${({theme})=> theme.lightGray};
  transition: border-color 0.2s ease-in-out;
  ${({readonly})=> readonly && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${({$expandDD, theme, $isTransparent})=> $expandDD && !$isTransparent && css`
    border: 1px solid ${theme.green};
  `}
`;

export const StyledOptionsContainer = styled.ul<DDRelatedProps>`
  position: absolute;
  z-index: 5;
  background-color: white;
  top: calc(100% + 16px);
  left: 0;
  width: fit-content;
  min-width: 100%;
  clip-path: polygon(${({$expandDD})=> $expandDD? "-10% -10%, 100% -10%, 120% 120%, -10% 120%": "0 0, 100% 0, 100% 0, 0 0"});
  transition: clip-path 0.3s ease-in-out, width 0.3s ease-out, height 0.3s linear;
  border-top: none;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 10px 40px -7px ${({theme}) => theme.shadowGray};
  & > li:last-child {
    border-bottom: none;
  }
`;

export const StyledCaret = styled(CaretDown)<DDRelatedProps>`
  transform: rotate(${( {$expandDD} )=> $expandDD? 180:0}deg);
  transition: transform 0.3s ease-in-out;
  flex-shrink: 0;
`;


export const StyledOption = styled.li`
  padding: 1rem 2rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid rgb(58, 67, 116, 0.2);
  gap: 0.5rem;
  color: ${({theme})=> theme.gray};
  &:hover {
    color: ${({theme})=> theme.violet};
  }
`;