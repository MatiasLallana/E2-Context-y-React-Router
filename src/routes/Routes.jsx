import {
  BrowserRouter,
  Routes as ReactDomRouts,
  Route,
} from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ProductsPage from "../pages/Products/ProductsPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRouts>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="*" element={<h2>Error 404</h2>} />
        </ReactDomRouts>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
