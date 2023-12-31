import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Main-Contents/Home/Home";
import Ourteam from "./Main-Contents/OurTeam/Ourteam";
import Vision from "./Main-Contents/Vision/Vision";
import FAQs from "./Main-Contents/FAQs/FAQs";
import Media from "./Main-Contents/Media/Media";
import Blogs from "./Main-Contents/Blogs/Blogs";
import Experties from "./Main-Contents/Experties/Experties";
import Welcome from "./Main-Contents/Welcome/Welcome";
import BlogInside from "./Main-Contents/Blog-inside/BlogInside";
import ProductMain from "./Main-Contents/Products/ProductMain/ProductMain";
import Product1 from "./Main-Contents/Products/Product1/Product1";
import Product2 from "./Main-Contents/Products/Product2/Product2";
import Product3 from "./Main-Contents/Products/Product3/Product1";
import Product4 from "./Main-Contents/Products/Product4/Product4";
import Product5 from "./Main-Contents/Products/Product5/Product5";
import Product6 from "./Main-Contents/Products/Product6/Product6";
import Product7 from "./Main-Contents/Products/Product7/Product7";
import Product8 from "./Main-Contents/Products/Product8/Product8";
import Product9 from "./Main-Contents/Products/Product9/Product9";
import ContactUS from "./Main-Contents/Contact/ContactUs";
import Header from "./Main-Contents/Header/Header";
import PreFooter from "./Main-Contents/PreFooter/PreFooter";
import Footer from "./Main-Contents/Footer/Footer";
import HomeUSPMod from "./Main-Contents/Home/HomeUSPMod/HomeUSPMod";
function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<HomeUSPMod />} />
          <Route path="/ourTeam" element={<Ourteam />} />
          <Route path="/ourVision" element={<Vision />} />
          <Route path="/media" element={<Media />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/experties" element={<Experties />} />
          <Route path="/blogInsides" element={<BlogInside />} />
          <Route path="/about" element={<Welcome />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/products" element={<ProductMain />} />
          <Route path="/products/mortoise" element={<Product1 />} />
          <Route path="/products/aldrop" element={<Product2 />} />
          <Route path="/products/pullhandles" element={<Product3 />} />
          <Route path="/products/maindoor" element={<Product4 />} />
          <Route path="/products/locks&latches" element={<Product6 />} />
          <Route path="/products/hinges" element={<Product5 />} />
          <Route path="/products/furniturelock" element={<Product8 />} />
          <Route path="/products/decoratives" element={<Product7 />} />
          <Route path="/products/doorAccessories" element={<Product9 />} />
          {/* <Footer />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
