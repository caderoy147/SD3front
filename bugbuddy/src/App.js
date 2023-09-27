import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login';
import LandingPage from './pages/LandingPage';
import Public from './components/Public';
import UsersList from './features/users/UsersList';
import BugsList from './features/bugs/BugsList';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import Dashboard from './pages/Dashboard';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route path="dashboard">
          <Route index element={< Dashboard />} />
        </Route>


        <Route index element={<LandingPage/>}/>
        <Route path="login" element={<Login/>}/>
        
        <Route path="dash" element={<DashLayout />}>

          <Route index element={<Welcome />} />

          <Route path="bugs">
            <Route index element={<BugsList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>

        </Route>{/* End Dash */}

      </Route>
    </Routes>
  );
}

export default App;
