import logo from './twitter.png';
import './App.css';
import Forms from './Forms';
import twitterMain from "./twittermain.jpg"

function App() {
  return (
    <div className='main'>
        <div className='left-side'><img className='img' src={logo} />
        {/* <center><img className='twitterMain' src={twitterMain}></img></center> */}
        </div>
        <div className='right-side'><Forms/></div>
    </div>
  );
}

export default App;
