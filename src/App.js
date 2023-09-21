
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Nav from './components/Nav'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    )
  },
  {
    path: "/about",
    element: (
      <About />
    )
  }

])

function App() {
  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
