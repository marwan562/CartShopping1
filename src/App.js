import { Routes , Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import About from "./Components/About/About";
import { ShoppingCartProvider } from "./Data/Context/ShoppingCartContext";


function App() {
  return (
   <div className=" container m-auto">
    <ShoppingCartProvider>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
    </ShoppingCartProvider>
   </div>
  );
}

export default App;
