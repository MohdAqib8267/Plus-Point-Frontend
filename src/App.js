import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Main-Contents/Home/Home';
import Ourteam from './Main-Contents/OurTeam/Ourteam';
import Vision from './Main-Contents/Vision/Vision';
import FAQs from './Main-Contents/FAQs/FAQs';
import Media from './Main-Contents/Media/Media';
import Blogs from './Main-Contents/Blogs/Blogs';
import Experties from './Main-Contents/Experties/Experties';
import BlogInside from './Main-Contents/Blog-inside/BlogInside';
import Header from './Main-Contents/Header/Header';
import PreFooter from './Main-Contents/PreFooter/PreFooter';
import Footer from './Main-Contents/Footer/Footer';
import Welcome from './Main-Contents/Welcome/Welcome';
import ContactUS from './Main-Contents/Contact/ContactUs';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/ourTeam' element={<Ourteam />} />
              <Route path='/ourVision' element={<Vision />} />
              <Route path='/media' element={<Media />} />
              <Route path='/faqs' element={<FAQs />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/experties' element={<Experties />} />
              <Route path='/blogInsides' element={<BlogInside />} />
              <Route path='/about' element={<Welcome />} />
              <Route path='/contact' element={<ContactUS />} />
      {/* <Footer />  */}
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
