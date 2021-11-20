import React, { useEffect, useState } from 'react';
import { HeaderContainer, InputName, LabelSearch, SearchIconContainer, SearchOption, SearchOptionsContainer } from './styled-components/Header';
import { IoSearch } from "react-icons/io5";
import { CategoriesSelect } from './CategoriesSelect';
import { SortSelect } from './SortSelect';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchBooks } from '../../store/bookReducer/booksApi';
import { setSearchParams, setStartIndex } from '../../store/searchReducer/searchReducer';
import { removeAllBooks } from '../../store/bookReducer/bookReducer';

//Данный компонент находится шапе приложения, отвечает за поиск книг.
const Header = () => {

  const dispatch = useAppDispatch();
  const {startIndex, enableSearch} = useAppSelector(state => state.search);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const setTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
     setName(e.target.value)
  };

  //Главная функция поиска, отчищает стейт и заполняет его новыми данными.
  const search = () => {
    if(!enableSearch){
      return
    }
    dispatch(removeAllBooks());
    dispatch(fetchBooks({sorting, category, name, startIndex: 0}));
    dispatch(setSearchParams({sorting, category, name}))
    dispatch(setStartIndex(30));
  };

  const pressSearch = (e:React.KeyboardEvent) => {
      if(e.key === 'Enter'){
        search()
      }
  };

  return (
    <HeaderContainer >
      <div style={{ margin: 'auto', position: 'relative' }}>
        <InputName onKeyPress={pressSearch} onChange={setTitle} ></InputName>
        <SearchIconContainer aria-label='search' onClick={search}>
          <IoSearch size='25px' />
        </SearchIconContainer>
      </div>
      < SearchOptionsContainer>
        <SearchOption>
          <LabelSearch>Categories</LabelSearch>
          <CategoriesSelect category={category} setCategory={setCategory}></CategoriesSelect>
        </SearchOption>
        <SearchOption>
          <LabelSearch>Sorting By</LabelSearch>
          <SortSelect sorting={sorting} setSorting={setSorting}></SortSelect>
        </SearchOption>
      </SearchOptionsContainer>
    </HeaderContainer >
  )
};

export default Header;