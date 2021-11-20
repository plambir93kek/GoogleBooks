import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookContainter, BookImage, BookTitle, Category, Description } from './styled-components/BookItem';

interface BookItemProps {
    id?: string,
    authors?: string[],
    title?: string;
    categories?: string[];
    description?: string;
    image?: string;
}
//Компонент отображается карточку книги, осуществляет навигацию на страницу с информацией о книге
const BookItem:React.FC<BookItemProps> = ({authors, title, categories, id, image}) => {

    const navigate = useNavigate();
    const goToBook = () => {
        navigate(`book/${id}`)
    }

    return (
        <BookContainter onClick={goToBook}>
            <BookImage src={image}></BookImage>
            <Category>{categories?.[0]}</Category>
            <BookTitle>{title}</BookTitle>
            <Description>{authors?.map(author => `${author} `)}</Description>
        </BookContainter>
    )
};

export default BookItem;