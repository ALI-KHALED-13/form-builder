
import {useState} from 'react';
import DropDown from '../Dropdown';
import { questionTypesOps } from './config';
import Button from '../Button';
import { StyledQuestion, StyledType } from './styled';
import { Pencil } from '@phosphor-icons/react';


interface QFormAccordionProps {
  question: IQuestion;
  onChange: (action: 'update' | 'delete',  newQData: IQuestion ) => void;
}

const QFormAccordion =({question, onChange}:QFormAccordionProps)=> {
  const [isEditing, setIsEditing] = useState(false);
  const [questionData, setQuestionData] = useState(question);

  const updateQuestion =()=> {
    onChange('update', questionData)
    setIsEditing(false)
  }

  const deleteQuestion =()=> {
    onChange('delete', questionData)
    setIsEditing(false);
  }

  return (
    <StyledQuestion>
      {isEditing? (
        <>
          <h3>Questions</h3>
          <div>
            <DropDown
              options={questionTypesOps}
              value={questionTypesOps.find(type=> type.value === questionData.type) as IOption}
              onChange={(selectedOp)=> setQuestionData({...questionData, type: selectedOp.value})}
            />

            <div className='space-flex'>
              <Button variant='ghost' color="red" onClick={deleteQuestion}>
                Delete question
              </Button>
              <Button color='lightGreen' hoverColor='green' onClick={updateQuestion}>
                save
              </Button>
            </div>
          </div>
        </>
      ):(
        <>
          <StyledType>{questionData.type}</StyledType>
          <div className='space-flex'>
            <h3>{questionData.question}</h3>
            <Pencil size={24} onClick={()=> setIsEditing(!isEditing)} style={{cursor: 'pointer'}}/>
          </div>
        </>
      )}
    </StyledQuestion>
  )
}


export default QFormAccordion;