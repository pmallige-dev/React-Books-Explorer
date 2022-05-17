import { Route, Routes } from 'react-router';
import Home from './routes/home/home.component';
import Genre from './routes/genre/genre.component';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="genre/*" element={<Genre />} />
    </Routes>
  );
}

export default App;
