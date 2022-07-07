import { Route, Routes } from 'react-router';
import Home from './routes/home/home.component';
import Genre from './routes/genre/genre.component';
import './App.css';
import { Fragment } from 'react';
import Header from './components/header/header.component';
import { CssBaseline, Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="genre/*" element={<Genre />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
