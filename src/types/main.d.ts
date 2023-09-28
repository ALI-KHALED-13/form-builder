

interface IOption {
  value: string;
  display: string;
  count?: number;
}


interface IQuestion {
  id: string;
  question: string;
  type: string;//'Paragraph' | 'short' | 'radio' | 'dropdown' | 'MCQ' | 'date' | 'number' | 'upload';
  choices: string[];
  maxChoice?: number;
  other?: boolean;
  disqualify?: boolean;
}

interface IApplicationFormTpl {
  id: string;
  type: string;
  attributes: {
    coverImage: string;
    personalInformation: {
      [key: string]: {internalUse: boolean, show: boolean, note?: string};
      personalQuestions: IQuestion[]
    };
    profile: {
      [key: string]: {mandatory: boolean, show: boolean, note?: string};
      profileQuestions: IQuestion[]
    };
    customisedQuestions: IQuestion[]
  }
}


interface BlockLabelProps {
  label?: sting;
  sublabel?: string;
  isRequired?: boolean;
  readOnly?: boolean;
  className?: string;
  style?: React.CSSProperties,
}