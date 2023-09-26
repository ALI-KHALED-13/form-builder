import { StyledLoader, StyledLoaderOverlay, StyledLoaderText } from "./styled";

interface LoaderProps {
  text?: string;
  isBlock?: boolean;
  blockHeight?: string;
  style?: React.CSSProperties;
}

const Loader =({text, style, isBlock, blockHeight = "90vh"}: LoaderProps)=>{
  
  return (
    <StyledLoaderOverlay {...{style, isBlock, blockHeight}} >
      <StyledLoader  isBlock={isBlock}/>
      <StyledLoaderText isBlock={isBlock}>
        {text}
      </StyledLoaderText>
    </StyledLoaderOverlay>
  );

}

export default Loader;