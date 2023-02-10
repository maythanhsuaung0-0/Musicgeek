import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
import Playingnow from "./components/playingnow";
import tay from './img/1989.jpg'
function App() {
  return (
   <div className="h-screen bg-ebony relative overflow-auto">
   <Navbar/>
   <Wrapper/>
   <Playingnow cover={tay} ttl={'We are never ever getting back together'} singer={'Taylor Swift'} next={'Pink Venom'}/>
   </div>
  );
}

export default App;
