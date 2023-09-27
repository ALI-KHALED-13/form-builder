import { getBlockLabelProps } from "../../utils/getBlockLabelProps";
import { BlockLabel } from "../BlockLabel";
import { StyledButtonSlider, StyledSwitch, StyledSwitchWrapper } from "./styled";


interface SwitchButtonProps {
  option: IOption;
  onChange: (clickedOp?:IOption)=> void;
  disabled?: boolean;
  isChecked?: boolean;
}

export function SwitchButton({
  isChecked,
  option,
  onChange,
  disabled = false,
}:SwitchButtonProps) {

  const props = arguments[0];

  const handleClick = () => {
    !disabled &&
    onChange(option);
  };


  return (
    <div>
      <BlockLabel {...getBlockLabelProps(props)} />

      <StyledSwitchWrapper>
        <StyledButtonSlider
          isChecked={isChecked}
          disabled={disabled}
          onClick={handleClick}
        >
          <StyledSwitch
            className='StyledSwitch'
            direction={isChecked ? "left" : "right"}
            isChecked={isChecked}
            disabled={disabled}
          />
        </StyledButtonSlider>

        <label>
          {option.display}
        </label>
      </StyledSwitchWrapper>
    </div>
  );
}