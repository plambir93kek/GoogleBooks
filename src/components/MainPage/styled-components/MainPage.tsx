import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column; 
`;

interface MainWrapperProps {
  loading?: boolean;
}

export const MainWrapper = styled.div<MainWrapperProps>`
 display: ${props=> props.loading? 'none' : 'flex'};
 align-items: center;
 flex-direction: column;
`;

export const BooksContainer = styled.div`
  display: grid;
  margin: 20px auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  justify-items:'center';
  gap: 10px;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media(max-width: 920px){
    grid-template-columns: 1fr 1fr;
  }
  
  @media(max-width: 700px){
    grid-template-columns: 1fr;
  }
`;

export const LoaderContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top: 30px;
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  border: 3px dashed black;
  animation: ${loading} 1s infinite;
  transition: 1s;
  border-radius: 50%;
`;

export const LoaderText = styled.p`
  font-size: 24px;
`;

export const LoadMoreButton = styled.button`
  width: 50vw;
  border: none;
  height: 50px;
  background-color:#1976d2;
  color: white;
  font-size: 20px;
    &:hover{
      opacity: 0.8;
    }
`;

export const LoadButtonContainer = styled.div`
  margin: 20px auto;
`;

export const TotalItems = styled.p`
 border-bottom: 1px solid #1976d2;
`;