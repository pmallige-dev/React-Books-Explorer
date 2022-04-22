import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/home/home.component';
import Genre from './components/genre/genre.component';
import './App.css';

const App = () => {
  const [ searchField, setSearchField ] = useState('');
  const [ bookList, setBookList ] = useState([]);
  const [ filteredBookList, setFilteredBookList ] = useState(bookList);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchUrl = await fetch('http://skunkworks.ignitesol.com:8000/books/');
      const response = await fetchUrl.json();
      const bookResults = await response.results;
      setBookList(bookResults);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const NewFilteredBookList = bookList.filter((book) => {
      return book.title.toLocaleLowerCase().includes(searchField);
    });
    setFilteredBookList(NewFilteredBookList);
  }, [bookList, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="genre"
        element={
          <Genre onChangeHandler={onSearchChange} bookList={filteredBookList}/>
        }
      />
    </Routes>
  );
}

export default App;
