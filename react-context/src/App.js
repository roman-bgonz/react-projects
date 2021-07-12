import './App.css';
import MyPage from './components/sin-context/MyPage';
import MyPageContext from './components/context/MyPageContext';
import CrudApi from './components/crud/CrudApi';
import { CrudProvider } from './context/CrudContext';

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <p>En un mismo archivo no puedes utilizar el provider y el consumer</p>
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
