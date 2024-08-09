import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import SignupScreen from "./components/screens/SignupScreen";
import LoginScreen from './components/screens/LoginScreen';
import Home from './components/screens/Home';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import Register from './components/screens/Register';
import Post from './components/screens/Post';
import CreatePost from './components/screens/CreatePost';
import Login from './components/screens/login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/user/register" element={<SignupScreen />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register2" element={<Register/>} />
            <Route path="/myfeed" element={<Post/>} />
            <Route path="/user/post" element={<CreatePost/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
