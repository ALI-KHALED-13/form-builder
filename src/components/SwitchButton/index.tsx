import { getBlockLabelProps } from "../../utils/getBlockLabelProps";
import { BlockLabel } from "../BlockLabel";
import { StyledButtonSlider, StyledSwitch, StyledSwitchWrapper } from "./styled";


interface SwitchButtonProps {
  option: IOption;
  onChange: (clickedOp?:IOption)=> void;
  disabled?: boolean;
  value?: IOption;
}

export function SwitchButton({
  value,
  option,
  onChange,
  disabled = false,
}:SwitchButtonProps) {
  const props = arguments[0];


  const isInactive =  value?.value !== option.value;

  const handleClick = () => {
    !disabled &&
    onChange(isInactive ?  option: undefined);
  };


  return (
    <div>
      <BlockLabel {...getBlockLabelProps(props)} />

      <StyledSwitchWrapper>
        <StyledButtonSlider
          inactive={isInactive}
          disabled={disabled}
          onClick={handleClick}
        >
          <StyledSwitch
            className='StyledSwitch'
            direction={isInactive ? "left" : "right"}
            inactive={isInactive}
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