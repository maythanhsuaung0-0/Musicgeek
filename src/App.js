import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
function App() {
  return (
   <div className="h-screen bg-ebony">
   <Navbar/>
   <Wrapper/>
   </div>
  );
}

export default App;
