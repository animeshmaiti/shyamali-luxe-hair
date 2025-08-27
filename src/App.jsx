import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Collection from './pages/Collection';
import Products from './pages/Products';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app-shell'>
      <Navbar />
      <main className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
