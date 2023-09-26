import { Plus } from "@phosphor-icons/react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import ImageInput from "../ImageInput";
import { SwitchButton } from "../SwitchButton";
import { StyledFormWrapper, StyledQuestion, StyledSectionContainer, StyledSectionHeader } from "./styled";



interface TplRenderer {
  readOnly: boolean;
  tpl: IApplicationFormTpl;
  onChange: (path: string, value: any) => void
}

const TplRenderer =({readOnly, tpl, onChange}:TplRenderer)=>{

  return (
    <StyledFormWrapper>
      {tpl.sections.map((section, index)=> (
        <section key={index + section.title}>
          <StyledSectionHeader>{section.title}</StyledSectionHeader>
          <StyledSectionContainer>
            {section.type === 'image'?
              <ImageInput
                readonly={readOnly}
                onChange={(file)=> onChange('sections.' + index, file)}
                value={{alt: 'uploadedPic', url: section.content? URL.createObjectURL(section.content) : undefined}}
              />
            :
              readOnly == false && (
              <>
                <ul>
                  {section.questions?.map((q, idx)=> (
                    <StyledQuestion key={index + section.title + 'q' + idx + q.label}>
                      {q.label}
                      {q.note && <span>{q.note}</span>}
                      <Checkbox
                        option={{value: q.publicity == 'internal'? 'internal':'public', display: 'Internal'}}
                        isChecked={q.publicity == 'internal'}
                        onChange={(op)=> onChange(q.path, op?.value)}
                      />
                      <SwitchButton
                        option={{value: q.visibility === 'hide'? 'show':'hide', display: q.visibility === 'hide'? 'show':'hide'}}
                        value={{value: q.visibility, display: q.visibility}}
                        onChange={(op)=> onChange(q.path, op?.value)}
                      />
                    </StyledQuestion>
                  ))}
                </ul>
                <Button color="white">
                  <Plus />
                  Add a question
                </Button>
              </>
            )}
          </StyledSectionContainer>
          
        </section>
      ))}
    </StyledFormWrapper>
  );
  

}

export default TplRenderer;