
import {useState} from 'react';
import DropDown from '../Dropdown';
import { questionTypesOps } from './config';
import Button from '../Button';
import { StyledQuestion, StyledType } from './styled';
import { Pencil } from '@phosphor-icons/react';
import { ChoicesQ, ParagraphQ } from './comps';


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

  const handleQuestionChange =(field:string, value:any)=> {
    setQuestionData({...questionData, [field]: value})
  }

  const TypeEditCompMap = {
    "Paragraph": ParagraphQ,
    "ShortAnswer": ParagraphQ,
    "YesNo": ParagraphQ,
    'Dropdown': ChoicesQ,
    'MultipleChoice': ChoicesQ,
    'Date': ParagraphQ,
    'Number': ParagraphQ,
    'FileUpload': ParagraphQ
  }

  const QuestionComp = TypeEditCompMap[questionData.type as keyof typeof TypeEditCompMap]

  return (
    <StyledQuestion>
      {isEditing? (
          <div>
            <DropDown
              label='type'
              options={questionTypesOps}
              value={questionTypesOps.find(type=> type.value === questionData.type) as IOption}
              onChange={(selectedOp)=> handleQuestionChange('type', selectedOp.value)}
            />
            {QuestionComp && (
              <QuestionComp
                question={questionData}
                onChange={handleQuestionChange}
              />
            )}
            <div className='space-flex' style={{margin: '1.5rem 0'}}>
              <Button variant='ghost' color="red" onClick={deleteQuestion}>
                Delete question
              </Button>
              <Button color='lightGreen' hoverColor='green' onClick={updateQuestion}>
                save
              </Button>
            </div>
          </div>
      ):(
        <>
          <StyledType>{questionTypesOps.find(qt=> qt.value === questionData.type)?.display}</StyledType>
          <div className='space-flex'>
            <h3>{questionData.question}</h3>
            <Pencil size={25} weight="duotone" onClick={()=> setIsEditing(!isEditing)} style={{cursor: 'pointer'}}/>
          </div>
        </>
      )}
    </StyledQuestion>
  )
}


export default QFormAccordion;