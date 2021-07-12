import './App.css';
import MyPage from './components/sin-context/MyPage';
import MyPageContext from './components/context/MyPageContext';

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
