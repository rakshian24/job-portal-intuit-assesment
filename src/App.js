import { useSelector } from 'react-redux';
import './App.css';
import Routes from './routes/Routes';

function App() {
  const { darkTheme } = useSelector((state) => state.darkTheme);

  const darkThemeColors = {
    backgroundColor: 'black',
    color: 'white',
  };

  const lightThemeColors = {
    backgroundColor: 'white',
    color: 'black',
  };

  return (
    <div
      className="app-body"
      style={darkTheme ? darkThemeColors : lightThemeColors}
    >
      <Routes />
    </div>
  );
}

export default App;
