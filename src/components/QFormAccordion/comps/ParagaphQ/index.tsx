import Checkbox from "../../../Checkbox";
import { TextInput } from "../../../TextInput";


interface ParagraphQProps {
  question: IQuestion;
  onChange: (field:string, value: string|boolean)=> void
}

const ParagraphQ =({question, onChange}:ParagraphQProps)=> {
  
  return (
    <>
      <TextInput
        label="Question"
        value={question.question}
        placeholder="Type here"
        onChange={(evt)=> onChange('question', evt.target.value)}
      />
      {question.type == 'Yes/No' && (
        <Checkbox
          option={{value: 'disqualify', display: 'Disqualify candidate if the answer is no'}}
          isChecked={question.disqualify as boolean}
          onChange={()=> onChange('disqualify', !question.disqualify)}
        />
      )}
    </>
  );
}


export default ParagraphQ;