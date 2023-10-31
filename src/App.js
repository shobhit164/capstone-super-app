import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import Error from './components/Error';
import Home from './components/Home';
import Category from './components/Category';
import Movies from './components/Movies';

function App() {
  // Check if local storage is empty
  const isLocalStorageEmpty = localStorage.getItem('categories') === null;

  return (
    <Router>
      <Routes>
        <Route path='/' element={isLocalStorageEmpty ? <Registration /> : <Home />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
