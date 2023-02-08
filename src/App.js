import Nav from './components/nav';
import Wrapper from './components/wrapper';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';
function App() {
  return (
   <div className='relative h-screen overflow-auto w-full bg-ebony font-mono'>
   <Nav/>
   <Wrapper/>
   </div>
  );
}

export default App;
