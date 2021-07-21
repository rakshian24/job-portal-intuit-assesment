import './App.css';
import Header from './components/Header/Header';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <Header title={'Job Portal'} />
      <div className="app-body">
        <Routes />
      </div>
    </div>
  );
}

export default App;
