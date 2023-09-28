import { Plus } from "@phosphor-icons/react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import ImageInput from "../ImageInput";
import { SwitchButton } from "../SwitchButton";
import QFormAccordion from "../QFormAccordion";
import getPathTargetObj from "../../utils/getPathTargetObj";
import { nanoid } from "nanoid";
import { defaultQuestionData } from "./config";
import { StyledFormWrapper, StyledField, StyledSectionContainer, StyledSectionHeader, StyledQuestion } from "./styled";


interface ApplicationRendererProps {
  readOnly: boolean;
  data: IApplicationFormTpl;
  onChange: (path: string, value: any) => void
}



const ApplicationFormRenderer =({readOnly, data, onChange}:ApplicationRendererProps)=>{

  const updateAttributeQuestions =(action: string, path: string, QData?: IQuestion)=> {
    let {targetObj: questionsArr} = getPathTargetObj(path, data.attributes);
    switch (action){
      case 'add':
        questionsArr.push({...defaultQuestionData, id: nanoid()})
        break;
      case 'update':
        questionsArr.map((q:IQuestion)=> q.id == QData?.id? QData : q)
        break;
      case 'delete':
        questionsArr = questionsArr.filter((q:IQuestion)=> q.id !== QData?.id) 
    }
    onChange(path.slice(0, path.search(/\.\d$/)), questionsArr)
  }

  const genQuestions =(fieldPath: string, questions: IQuestion[])=> {
    if (questions.length == 0){
      return (
      <Button
        key={fieldPath + 'Q' + 0}
        color="black" 
        variant="ghost"
        onClick={()=> updateAttributeQuestions('add', fieldPath+'.0')}
        style={{marginTop: 20}}
      >
        <Plus />
        Add a question
      </Button>
      );
    }
    return questions.map((fieldQuestion, idx)=> {
      const isLastQuestion = idx === questions.length - 1
      return (
      <StyledQuestion key={fieldPath + 'Q' + idx} style={isLastQuestion? {border: 'none'}:{}}>
        <QFormAccordion
          question={fieldQuestion}
          onChange={(action, newQData)=> updateAttributeQuestions(action, fieldPath+'.'+idx, newQData)}
          key={fieldQuestion.id}
        />
        {isLastQuestion && (
          <Button
            color="black" 
            variant="ghost"
            onClick={()=> updateAttributeQuestions('add', fieldPath+'.'+idx)}
            style={{marginTop: 20}}
          >
            <Plus />
            Add a question
          </Button>
        )}
      </StyledQuestion>
    )})
  }


  return (
    <StyledFormWrapper>
      <section>
        <StyledSectionHeader>Upload Cover Image</StyledSectionHeader>
        <StyledSectionContainer>
          <ImageInput
            readonly={readOnly}
            value={data.attributes.coverImage.includes('example')? '':data.attributes.coverImage}
            onChange={(file)=> onChange('coverImage', file? URL.createObjectURL(file): '')}
          />
        </StyledSectionContainer>
      </section>
      <section>
        <StyledSectionHeader>Personal Information</StyledSectionHeader>
        <StyledSectionContainer>
          <ul>
            {Object.entries(data.attributes.personalInformation).map((field, idx)=> {
              const [label, fieldData] = field;
              let fieldPath = `personalInformation.${label}`;

              if (fieldData instanceof Array){
                return genQuestions(fieldPath, fieldData)
              }
              return (//fixed fields
                <StyledField key={fieldPath + idx}>
                  {label.replace(/[A-Z]/, ' $&')}
                  {fieldData.note && <span>{fieldData.note}</span>}
                  <Checkbox
                    option={{value: fieldPath + '.internalUse', display: 'Internal'}}
                    isChecked={fieldData.internalUse}
                    onChange={(op, isChecked)=> onChange(op.value, !isChecked)}
                  />
                  <SwitchButton
                    option={{value: fieldData.show? 'hide':'show', display: fieldData.show? 'hide':'show'}}
                    isChecked={!fieldData.show}
                    onChange={()=> onChange(fieldPath + '.show' , !fieldData.show)}
                  />
                </StyledField>
              )
            })}
          </ul>
        </StyledSectionContainer>
      </section>
      <section>
        <StyledSectionHeader>Profile</StyledSectionHeader>
        <StyledSectionContainer>
          <ul>
          {Object.entries(data.attributes.profile).map((field, idx)=> {
              const [label, fieldData] = field;
              let fieldPath = `profile.${label}`;

              if (fieldData instanceof Array){
                return genQuestions(fieldPath, fieldData)
              }
              return (//fixed fields
                <StyledField  key={fieldPath + idx}>
                  {label.replace(/[A-Z]/, ' $&')}
                  {fieldData.note && <span>{fieldData.note}</span>}
                  <Checkbox
                    option={{value: fieldPath + '.mandatory', display: 'mandatory'}}
                    isChecked={fieldData.mandatory}
                    onChange={(op, isChecked)=> onChange(op.value, !isChecked)}
                  />
                  <SwitchButton
                    option={{value: fieldData.show? 'hide':'show', display: fieldData.show? 'hide':'show'}}
                    isChecked={!fieldData.show}
                    onChange={()=> onChange(fieldPath + '.show' , !fieldData.show)}
                  />
                </StyledField>
              )
            })}
          </ul>
        </StyledSectionContainer>
      </section>
      <section>
        <StyledSectionHeader>Additional Questions</StyledSectionHeader>
        <StyledSectionContainer>
          <ul>
            {genQuestions("customisedQuestions", data.attributes.customisedQuestions)}
          </ul>
        </StyledSectionContainer>
      </section>
      
    </StyledFormWrapper>
  );
  

}

export default ApplicationFormRenderer;