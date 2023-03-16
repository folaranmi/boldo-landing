import { Route, Routes } from 'react-router';
import './App.scss';
import About from './components/pages/about/About';
import HomePage from './components/pages/homepage/HomePage';
import Login from './components/pages/login/Login';
import Product from './components/pages/product/Product';
import Services from './components/pages/services/Services';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
