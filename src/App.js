import { Route, Routes } from 'react-router';
import Home from './routes/home/home.component';
import Genre from './routes/genre/genre.component';
import { Fragment, useContext } from 'react';
import Header from './components/header/header.component';
import { CssBaseline, Container } from '@mui/material';
import Footer from './components/Footer/Footer.component';
import OpenBook from './routes/openBook/OpenBook.component';
import { BooksContext } from './context/books.context';
import SearchGenreBooks from './routes/searchGenreBooks/SearchGenreBooks.component';

const App = () => {
  const { categorySelected, searchField } = useContext(BooksContext);

  const genrePath = `/genre/*`;
  const searchPath = `/searchGenre/*`;

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={genrePath} element={<Genre />} />
          <Route path={searchPath} element={<SearchGenreBooks />} />
          {/* <Route path="openBook" element={<OpenBook />} /> */}
        </Routes>
      </Container>
      <CssBaseline />
      <Footer />
    </Fragment>
  );
}

export default App;
