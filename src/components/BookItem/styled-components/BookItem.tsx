import styled from 'styled-components';

export const BookContainter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  padding: 20px 10px;
  height: fit-content;
  background-color: rgba(	25, 118, 210, 0.07);
  margin: 2px;
  border: 2px solid transparent;
  border-radius:4px;
  justify-self: 'center';
  height: 400px;
   &:hover{
    border: 2px solid #1976d2;
   };

   @media(max-width: 300px){
     width: 210px;
   }
  
`;

export const BookImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  margin: 0 auto;
`;

export const Description = styled.p`
  margin:0;
  padding: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 22px;
  height: 22px;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;

export const BookTitle = styled.p`
 font-size: 20px;
 font-weight: bold;
 margin: 10px;
 overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 57px;
  height: 57px;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
`;

export const Category = styled.p`
  margin: 5px 0;
  padding: 2px;
  border-bottom: 1px solid #1976d2;
  width: max-content;
  height: 22px;
  overflow: hidden;
`