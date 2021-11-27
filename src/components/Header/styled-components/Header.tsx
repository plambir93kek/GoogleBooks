import styled from "styled-components";


export const HeaderContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px;
 justify-content: center;
 gap: 15px;
 box-shadow: 0 0 10px #03376b;
`;

export const InputName = styled.input.attrs({
    type:'text',
    placeholder: 'Search for book'
})`
  width: 50vw;
  height: 23px;
  padding: 5px;
  border: 2px solid #1976d2;
  outline: none;
  border-radius: 4px;
`;

export const SearchOptionsContainer = styled.div`
   display: flex;
   justify-content: center;
   gap: 20px;
   @media(max-width: 700px){
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

export const SearchOption = styled.div`
  display: flex;
  gap: 10px;
  @media(max-width: 350px){
    flex-direction: column;
   gap: 5px;
    
  }
`;

export const LabelSearch = styled.p`
   margin-right: 10px;
   @supports(gap: 3px){
      margin-right:0px
    }
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  right: 5px;
  top:0;
  bottom: 0;
  margin: 0;
  width: min-content;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.7;
  }
`;