import { Route, Routes } from 'react-router';
import Home from './routes/home/home.component';
import Genre from './routes/genre/genre.component';
import { Fragment } from 'react';
import Header from './components/header/header.component';
import { CssBaseline, Container } from '@mui/material';
import Footer from './components/Footer/Footer.component';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="genre/*" element={<Genre />} />
        </Routes>
      </Container>
      <CssBaseline />
      <Footer />
    </Fragment>
  );
}

export default App;
