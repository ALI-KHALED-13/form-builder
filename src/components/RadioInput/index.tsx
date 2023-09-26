
import {
  StyledOption, 
  StyledOptionLabel,
  StyledRadioInput,
  StyledRadioInputFill
} from "./styled";


interface RadioInputProps {
  option: IOption;
  onClick: (clickedOp:IOption)=> void;
  disabled?: boolean;
  value?: IOption;
}

const RadioInput =({
  value,
  option,
  onClick,
  disabled,
}:RadioInputProps)=>{

  const isSelected = option.value === value?.value;

  
  return (
  <StyledOption
    isSelected={isSelected}
    {...disabled ? {disabled} : {onClick: ()=> onClick(option)}}
  >
    <StyledRadioInput className='btn' {...{isSelected, disabled}} type="button">
      { isSelected && <StyledRadioInputFill /> }
    </StyledRadioInput>

    <StyledOptionLabel {...{isSelected, disabled}}>
      {option.display}
    </StyledOptionLabel>

  </StyledOption>
 );
  
}

export default RadioInput;