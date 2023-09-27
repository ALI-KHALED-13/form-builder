import { TrashSimple, UploadSimple } from "@phosphor-icons/react";
import Button, { UploadButton } from "../Button";
import { StyledImagePlaceholder, StyledImg, StyledImgContainer, StyledImgControles } from "./styled";
import Loader from "../Loader";
import { ChangeEvent, useState, useRef} from "react";

interface ImageInputProps {
  value: string; //url
  onChange: (file:File | null)=> void,
  readonly?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
}

const ImageInput =({
  value,
  onChange,
  readonly,
  isLoading,
  style
}:ImageInputProps)=> {

  const [uploadedImgTempURL, setUploadedImgTempURL] = useState("");

  const handleFileUpload =(ev:ChangeEvent<HTMLInputElement>)=> {
    if (ev.target.files && ev.target.files.length > 0) {
      const fileLocalUrl = URL.createObjectURL(ev.target.files[0]); // to display on the frontend (temporary so users can see how the end result would look like )
      
      setUploadedImgTempURL(fileLocalUrl)
      onChange(ev.target.files[0])
    }
    setTimeout(()=> ev.target.value = '', 500);
  }

  const handleDelete =()=> {
    if (!readonly && uploadedImgTempURL){
      setUploadedImgTempURL("");
      onChange(null)
    }
  }

  const placeholderInputRef = useRef<null | HTMLInputElement>(null);

  const handleplaceholderClick = () => {
    placeholderInputRef.current?.click();
  };

  return (
    <StyledImgContainer style={style}>
      {!readonly && (value || uploadedImgTempURL) && (
        <StyledImgControles>
          { (value || uploadedImgTempURL) && (
            <Button
              color="white" onClick={handleDelete}
              style={{padding: "0.3rem 0.6rem", display: "flex"}}
            >
              <TrashSimple color="#fd513e" weight="duotone" size={24} />
            </Button>
          )}
          <UploadButton
            color="white"
            style={{padding: "0.3rem 0.6rem", display: "flex"}}
            onChange={handleFileUpload}
            accept="image/*"
          >
              <UploadSimple color="#7a53ee" weight="bold" size={24} />
          </UploadButton>
        </StyledImgControles>
      )}

      {isLoading && <Loader style={{position: "absolute", left: "5px", top: "5px"}}/>}

      {value || uploadedImgTempURL? (
        <StyledImg
          src={!readonly && uploadedImgTempURL? uploadedImgTempURL: value}
        />
      ):( // display the placeholder
        <div onClick={handleplaceholderClick}>
          <input
            ref={placeholderInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <StyledImagePlaceholder>
            <UploadSimple size={40} weight="bold"/>
            <h4>Upload cover Image</h4>
            <p>16:9 ratio is recommended. max-image size is 1MB</p>
          </StyledImagePlaceholder>
        </div>
      )}   
    </StyledImgContainer>
  );
}

export default ImageInput;