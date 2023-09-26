import styled, {css, keyframes} from "styled-components";

// colors used are taken from te logo
const loopAnimation  = keyframes`
  0% {
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px red;
  }
  25% {
    transform: rotate(90deg);
    box-shadow: 1px 5px 2px violet;
  }
  75% {
    transform: rotate(270deg);
    box-shadow: 1px 5px 2px magenta;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px red;
  }
  
`;

interface LoaderOverlayProps {
  blockHeight?: string;
  isBlock?: boolean;
}

export const StyledLoaderOverlay = styled.div<LoaderOverlayProps>`
  display: flex;
  align-items: center; 
  gap: 1rem;

  ${( {isBlock, blockHeight})=> isBlock? css`
    position: relative;
    min-height: ${blockHeight};
    justify-content: center;
  `: ""}
`;

interface LoaderProps {
  isBlock?: boolean;
}

export const StyledLoader = styled.div<LoaderProps>`
  ${({isBlock})=> isBlock?
    css`
      position: absolute;
      width: 10rem;
      height: 10rem;
    ` 
  : 
    css`
      position: relative;
      width: 3rem;
      height: 3rem;
    `
  };

  border-radius: 50%;
  animation: ${loopAnimation} 1.3s linear infinite;
  
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
`;

export const StyledLoaderText = styled.span<LoaderProps>`
  display: inline-block;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  line-height: 1.6;
  max-width: ${( {isBlock} )=> isBlock? "10rem": "unset"};
`;
