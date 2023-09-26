import styled from "styled-components";




export const StyledImgContainer = styled.div`
  position: relative;
  border-radius: 10px;
`;


export const StyledImg = styled.img`
  width: 100%;
  border-radius: inherit;
  object-fit: cover;
  aspect-ratio: 16 / 9;
`;

export const StyledImgControles = styled.div` 
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;

export const StyledImagePlaceholder = styled.div`
  padding: 5rem;
  border: 1px dashed #000;
  box-shadow: 3px 3px 9px 0px rgba(190, 190, 190, 0.13);
  display: grid;
  place-items: center;
  cursor: pointer;
`;
