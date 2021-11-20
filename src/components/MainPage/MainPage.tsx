import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchBooks } from '../../store/bookReducer/booksApi';
import { setEnableSearch, setStartIndex } from '../../store/searchReducer/searchReducer';
import { booksSelectors } from '../../store/store';
import BookItem from '../BookItem/BookItem';
import { BooksContainer, LoadButtonContainer, Loader, LoaderContainter, LoaderText, LoadMoreButton, MainContainer, MainWrapper} from './styled-components/MainPage';

//Главная страница с выкладкой карточек книг и кнопкой Load More.
const MainPage = () => {

    const books = Object.values(useAppSelector(booksSelectors.selectEntities));
    const loading = useAppSelector(state => state.books.loading);
    const {name, category, sorting, startIndex} = useAppSelector(state => state.search)
    const {loadingMore, noResults, noMoreResults} = useAppSelector(state=> state.books);
    const dispatch = useAppDispatch();

  
    const loadMoreBooks = () => {
        dispatch(fetchBooks({sorting, category, name, startIndex}));
        dispatch(setStartIndex(startIndex + 30))
    };

    useEffect(() => {
        dispatch(setEnableSearch(true))
    },[]);

    return (
        <MainContainer>
            {noResults && <h3 style={{textAlign:'center'}}>nothing was found for your query</h3>}
            {loading &&
                <LoaderContainter>
                    <LoaderText>Loading...</LoaderText>
                    <Loader></Loader>
                </LoaderContainter>
            }
            <MainWrapper loading={loading}>
            <BooksContainer>
                {books?.map(book =>
                    <BookItem
                        key={book?.id}
                        id={book?.id}
                        categories={book?.volumeInfo?.categories}
                        title={book?.volumeInfo.title}
                        authors={book?.volumeInfo.authors}
                        description={book?.volumeInfo.description}
                        image = {book?.volumeInfo.imageLinks?.thumbnail || 'https://i.ytimg.com/vi/LhE6NkZED6U/maxresdefault.jpg'}
                    />
                )}
            </BooksContainer>
            <LoadButtonContainer>
                { (!noResults && books.length >0) && <LoadMoreButton onClick={loadMoreBooks}>{loadingMore? 
                '...Loading' 
                : 
                noMoreResults? 'No more results' : 'Load More'}</LoadMoreButton>}
            </LoadButtonContainer>
            </MainWrapper>
        </MainContainer>
    )
};

export default MainPage;