import { Plus } from "@phosphor-icons/react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import ImageInput from "../ImageInput";
import { SwitchButton } from "../SwitchButton";
import { StyledFormWrapper, StyledField, StyledSectionContainer, StyledSectionHeader } from "./styled";



interface ApplicationRendererProps {
  readOnly: boolean;
  data: IApplicationFormTpl;
  onChange: (path: string, value: any) => void
}

const ApplicationRenderer =({readOnly, data, onChange}:ApplicationRendererProps)=>{

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
              return !(fieldData instanceof Array) && (
                <StyledField key={'personal ' + field[0] + idx}>
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
              );
            })}
            <Button color="white">
              <Plus />
              Add a question
            </Button>
          </ul>
          
        </StyledSectionContainer>
      </section>
      
    </StyledFormWrapper>
  );
  

}

export default ApplicationRenderer;