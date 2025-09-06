import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import New from './pages/new/New';
import Collection from './pages/collection/Collection';
import Products from './pages/Products/Products';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import CollectionItem from './pages/collections/CollectionItem';
import Process from './pages/process/Process';

function App() {
  return (
    <div className='app-shell'>
      <Navbar />
      <main className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/collection" element={<Collection />}/>
          <Route path="/collection/collections/:id" element={<CollectionItem />} />
          <Route path="/products" element={<Products />} />
          <Route path='/process' element={<Process/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
