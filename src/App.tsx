import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookPage from './components/BookPage/BookPage';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<MainPage />}>
          </Route>
          <Route path='/book/:id' element={<BookPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
