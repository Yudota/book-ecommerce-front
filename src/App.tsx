
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './pages/BookList';
import Cadastro from './pages/Cadastro';
import DetalheLivro from './pages/DetalheLivro';
import Header from './pages/Header';
import Login from './pages/Login';
import ResumoCompra from './pages/ResumoCompra';
import ShoppingChart from './pages/ShoppingChart';

const App = () =>
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Cadastro />} />
        <Route path="/shopping-chart" element={<ShoppingChart />} />
        <Route path="/book" element={<DetalheLivro />} />
        <Route path="/checkout" element={<ResumoCompra />} />
      </Routes>
    </Router>
  </>

export default App;