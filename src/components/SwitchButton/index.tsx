
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


  const handleClick = () => {
    !disabled &&
    onChange(option);
  };


  return (
    <StyledSwitchWrapper>
      <StyledButtonSlider
        $isChecked={isChecked}
        disabled={disabled}
        onClick={handleClick}
      >
        <StyledSwitch
          className='StyledSwitch'
          direction={isChecked ? "left" : "right"}
          $isChecked={isChecked}
          disabled={disabled}
        />
      </StyledButtonSlider>

      <label>
        {option.display}
      </label>
    </StyledSwitchWrapper>
  );
}