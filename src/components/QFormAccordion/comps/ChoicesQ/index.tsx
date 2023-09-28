import { Plus, X } from "@phosphor-icons/react";
import { TextInput } from "../../../TextInput";
import { StyledChoice, StyledContainer } from "./styled";
import Checkbox from "../../../Checkbox";


interface ChoicesQProps {
  question: IQuestion;
  onChange: (field:string, value:string | string[] | boolean)=> void
}

const ChoicesQ =({question, onChange}:ChoicesQProps)=> {

  const handleChoicesChange =(index:number, value: string | null)=> {
    const choices = question.choices as string [];

    if (choices[index] !== undefined){// modiifcation
      onChange('choices', 
      typeof value === 'string'?
        choices.map((ch, idx)=> idx === index? value:ch)
        :
        choices.filter((ch, idx)=> idx !== index)
      )
    } else { // addition
      onChange('choices', choices.concat(value as string))
    }
    
  }

  return (
    <StyledContainer>
      <TextInput
        label="Question"
        value={question.question}
        placeholder="Type here"
        onChange={(evt)=> onChange('question', evt.target.value)}
      />
      <p>Choice</p>
      <ul>
        {question.choices.map((choice, idx)=> (
          <StyledChoice key={question.id + '_choice' + idx}>
            <X
              size={20}
              color="red"
              onClick={()=> handleChoicesChange(idx, null)}
            />
            <TextInput
              value={choice}
              placeholder="Type here"
              onChange={(evt)=> handleChoicesChange(idx, evt.target.value)}
            />
            {idx == question.choices.length - 1 && (
              <Plus
                size={24}
                color="green"
                onClick={()=> handleChoicesChange(question.choices.length as number, 'string')}
              />
            )}
            
          </StyledChoice>
        ))}
      </ul>
      
      <Checkbox
        isChecked={question.other as boolean}
        option={{value: 'other', display: 'Enable “Other” option'}}
        onChange={()=> onChange('other', !question.other)}
      />
      {question.type == 'MCQ' && (
        <TextInput
          label="Max choice allowed"
          type="number"
          value={question.maxChoice as number}
          onChange={(evt)=> onChange('maxChoice', evt.target.value)}
          min={1}
          max={question.choices.length}
        />
      )}
    </StyledContainer>
    
  );
}


export default ChoicesQ;