import { Check } from "@phosphor-icons/react";
import { StyledCheckbox, StyledLabel } from "./styled";


interface CheckboxProps {
  option: IOption;
  onChange: (option:IOption, isChecked:boolean) => void;
  isChecked: boolean;
  disabled?: boolean;
}

const Checkbox =({
  option,
  onChange,

  isChecked,
  disabled
}: CheckboxProps)=> {
  

  return (
    <>
      <input
        type="checkbox"
        id={option.value}
        value={option.value}
        onChange={()=> !disabled && onChange(option, isChecked)}
        style={{display: "none"}}
      />
      <StyledLabel
        disabled={disabled}
        htmlFor={option.value}
      >
        <StyledCheckbox
          $isChecked={isChecked}
          disabled={disabled}
        >
          {isChecked && 
            <Check
              weight="bold"
              color="white"
              size={17}
              style={{flexShrink: 0}}
            />}
        </StyledCheckbox>
        {option.display}
      </StyledLabel>
    </> 
  )
}

export default Checkbox