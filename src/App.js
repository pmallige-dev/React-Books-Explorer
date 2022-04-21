import { Route, Routes } from 'react-router';
import Home from './components/home/home.component';
import Genre from './components/genre/genre.component';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="genre" element={<Genre />} />
    </Routes>
  );
}

export default App;
