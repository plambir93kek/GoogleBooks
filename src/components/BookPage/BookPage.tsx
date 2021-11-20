import { useEffect } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setEnableSearch } from "../../store/searchReducer/searchReducer";
import { booksSelectors } from "../../store/store";
import { BookAuthor, BookDescriptionContainer, BookImgContainer, BookInfoContainer, BookName, BookPageContainer } from "./styled-components/BookPage"

//Компонент отображается страницу книги. С его страницы нельзя осуществлять поиск во избежание возникновения ошибок.
const BookPage = () => {
    const { id } = useParams<string>();
    const book = useAppSelector(state => booksSelectors.selectById(state, id || ''));

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        dispatch(setEnableSearch(false));
        console.log(book?.volumeInfo.description)
    }, []);

    return (
        <>
            <IoArrowBackCircleOutline onClick={goBack} size='30px' style={{ margin: '10px', color: '#1976d2' }} />
            <BookPageContainer>
                <BookImgContainer>
                    <img src={book?.volumeInfo.imageLinks?.thumbnail || 'https://i.ytimg.com/vi/LhE6NkZED6U/maxresdefault.jpg'} />
                </BookImgContainer>
                <BookInfoContainer >
                    <BookName>{book?.volumeInfo.title ?
                        book?.volumeInfo.title
                        :
                        'No title'
                    }</BookName>
                    <BookAuthor>{book?.volumeInfo.authors?.map(author => `${author} `)}</BookAuthor>
                    <BookDescriptionContainer>{book?.volumeInfo.description ?
                        book?.volumeInfo.description
                        :
                        'No description'
                    }</BookDescriptionContainer>
                </BookInfoContainer>
            </BookPageContainer>
        </>
    )
};

export default BookPage;