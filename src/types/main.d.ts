

interface IOption {
  value: string;
  display: string;
  count?: number;
}


interface IApplicationFormTpl {
  title:string;
  sections: {
      title: string;
      type: 'image' | 'questions';
      content?: File | null; // in case type === image
      questions?: {
        label: string;
        path: string;
        note?: string;
        type: 'paragraph' | 'short' | 'radio' | 'dropdown' | 'MCQ' | 'date' | 'number' | 'upload';
        publicity: 'internal'|'public';
        visibility: 'hide' | 'show';
        options?: IOption[]; // in case of type: dropdown | radio | MCQ
      }[]
  }[]
}


interface BlockLabelProps {
  label?: sting;
  sublabel?: string;
  isRequired?: boolean;
  readOnly?: boolean;
  className?: string;
  style?: React.CSSProperties,
}