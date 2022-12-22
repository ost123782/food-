import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import './global.scss'

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/products'} element={<ProductPage/>}/>
        <Route path={'/admin'} element={<AdminPage/>} />
    </Routes>
  );
}

export default App;
