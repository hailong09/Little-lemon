
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Nav from './components/Nav'
import Booking from './pages/Booking'


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/reservations' element={<Booking />} />

      </Routes>

    </div>
  );
}

export default App;
