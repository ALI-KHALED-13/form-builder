

import { StyledBlockLabel, StyledLabel, StyledSublabel } from "./styled";


export const BlockLabel = ({
  label,
  sublabel,
  isRequired,
  readOnly,
  className,
  style,
}:BlockLabelProps) => {
  

  const shouldCompRender =
    label ||
    (!readOnly &&
      (sublabel || isRequired === false));

  const optional = readOnly ? false : isRequired === false;



  return (
    shouldCompRender && (
      <StyledBlockLabel style={style} className={className}>
        {!readOnly && sublabel  &&(
          <StyledSublabel>{sublabel}</StyledSublabel>
        )}
        <div style={{ display: "flex", gap: "1rem" }}>
          {label  && (
            <StyledLabel>
              {label} 
            </StyledLabel>
          )}
          {optional && (
            <p >
              {'(optional)'}
            </p>
          )}
        </div>
      </StyledBlockLabel>
    )
  );
};
