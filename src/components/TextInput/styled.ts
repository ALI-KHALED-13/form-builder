import styled, { css } from "styled-components";


interface StyledInputProps {
  error?: string;
  readonly?: boolean;
}

export const StyledLabel = styled.label`
  width: 100%;
  margin: 1rem 0;
  font-weight: 600;
  font-size: 1.6rem;
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  text-transform: capitalize;
`;

export const StyledInputContainer = styled.div<StyledInputProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  border: ${({theme, error}) => `1px solid ${error? theme.red : theme.gray}`};
  
  ${({readonly}) => !readonly && 
    css`
      padding: 0rem 1rem;
    `
  }

  color: ${({theme}) => theme.navy};
  border-radius: 0.2rem;

  &:focus-within {
    border: 1px solid ${({theme, readonly}) => readonly? "transparent": theme.green};
  }
`;

export const StyledInput = styled.input<StyledInputProps>`
  font-family: 'Jost Regular', sans-serif;
  min-height: 4.8rem;
  width: 100%;
  padding: ${({readOnly}) => readOnly? "0": "1.3rem 1.4rem"};
  border: none;
  outline: none;
  flex-grow: 1;
  background: transparent;
  color: inherit;
  resize: none; // if textarea

  &::placeholder {
    color: #aaa;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledInputNote = styled.p`
  font-family: 'Jost Regular', sans-serif;
  color: ${({theme}) => theme.gray};
  margin-bottom: 1rem;
`;

export const StyledError = styled(StyledInputNote)`
  color: ${({theme}) => theme.red};
  margin-top: 0.4rem;
`;


