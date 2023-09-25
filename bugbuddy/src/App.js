import {Routes,Route} from 'react-router-dom'
import Layout from './components/MainLayout/Layout';
import Login from './components/Login';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;
