import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { lightMode, darkMode } from './features/modeSlice';

function App() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode)

  const toggleMode = () => {
    mode.darkMode ? dispatch(darkMode()) : dispatch(lightMode())
  }
  
  return (
    <div style={{ backgroundColor: mode.color1, color: mode.color3 }} className="App">
      <Nav />
      <button onClick={toggleMode} style={{backgroundColor: mode.color1, color: mode.color4}}>{ mode.darkMode ? 'Light Mode' : 'Dark Mode' }</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
