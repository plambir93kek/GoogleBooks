import styled from "styled-components";

export const BookPageContainer = styled.div`
display: flex;
justify-content: space-evenly;
@media(max-width: 980px){
  flex-direction: column;
  align-items: center;
}
`;

export const BookImgContainer = styled.div`
display: flex;
justify-content: center;
box-shadow: 5px 5px 15px 2px #1976d2;
margin-top: 37px;
height: max-content;
& img {
    width: 400px;
    height: 500px;
    object-fit: cover;
    @media(max-width: 550px){
      width: 80vw;
      height: auto;
    }
}
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BookName = styled.p`
 font-size: 32px;
 font-weight: bold;
 max-width: 488px;
 @media(max-width: 550px){
   width: 80vw;
 }
`;

export const BookAuthor = styled.p`
border-bottom: 1px solid #1976d2;
width: max-content;
`;

export const BookDescriptionContainer = styled.div`
 width:500px;
 height: max-content;
 min-height: 300px;
 border: 1px solid #1976d2;
 box-sizing: border-box;
 padding: 30px;
 margin-bottom: 10px;
 @media(max-width: 550px){
   width: 80vw;
 }
`;