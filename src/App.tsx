
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingChart from './components/ShoppingChart';
import BookList from './pages/BookList';
import DetalheLivro from './pages/DetalheLivro';
import Header from './pages/Header';
import Login from './pages/Login';


const App = () =>
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping-chart" element={<ShoppingChart />} />
        <Route path="/book" element={<DetalheLivro />} />
      </Routes>
    </Router>
  </>

export default App;