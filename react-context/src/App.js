import './App.css';
import MyPage from './components/sin-context/MyPage';
import MyPageContext from './components/context/MyPageContext';
import CrudApi from './components/crud/CrudApi';

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <CrudApi />
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
