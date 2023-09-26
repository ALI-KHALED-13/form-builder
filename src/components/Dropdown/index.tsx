import { useState } from 'react';
import { useClickOutside } from '../../utils/useClickOutside';

import {
  StyledLabel,
  StyledOption,
  StyledDropDown,
  StyledCaret,
  StyledOptionsContainer,
  StyledNote
} from './styled';

interface DropdownProps {
  options: IOption[];
  value: IOption;
  onChange: (selectedOp: IOption)=> void;
  label?: string;
  note?: string;
  valuePrefix?: string;
  color?: string;
  readonly?: boolean;
  isTransparent?: boolean;
}


const DropDown =({
  options,
  label,
  note,
  value,
  onChange,
  readonly,
  valuePrefix = "",
  color = "",
  isTransparent = false
}: DropdownProps)=> {
  
  const [expandDD, setExpandDD] = useState(false);

  useClickOutside(() => setExpandDD(false));

  return (
    <div>
      {label && <StyledLabel >{label}</StyledLabel>}
      {note && !readonly && <StyledNote>{note}</StyledNote>}
      <StyledDropDown
        className="dropdown"
        onClick={(ev)=> {
          ev.stopPropagation();
          !readonly && setExpandDD(!expandDD)
        }}
        {...{expandDD, isTransparent, readonly}}
      >
      
        {value && (
          <div style={{color: color}}>
            {valuePrefix}
            <span
              className="DDDisplay"
              style={{fontSize: "inherit", color: "inherit", textTransform: "capitalize"}}
            >
              {value.display}
            </span>
          </div>
        )}
        
        <StyledCaret
          $expandDD={expandDD} // transient prop which is consumed only by styled components
          color={color || "blue"}
          weight="bold"
          size={14}
        />
        
        <StyledOptionsContainer
          $expandDD={expandDD} // transient prop
          aria-expanded={expandDD}
          onClick={(ev)=> ev.stopPropagation()}
        >


          {options.map(option=> {
            return (
              <StyledOption
                key={option.value}
                onClick={()=> {
                  setExpandDD(false)
                  onChange(option)
                }}
              >
                {option.display}

                {option.count && (
                  <span>{option.count}</span>
                )}
              </StyledOption>
            )})
          }

        </StyledOptionsContainer>
      </StyledDropDown>
    </div>
  );
}

export default DropDown;
