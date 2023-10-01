import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login';
import LandingPage from './pages/LandingPage';
import UsersList from './features/users/UsersList';
import BugsList from './features/bugs/BugsList';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import Dashboard from './pages/Dashboard';

import Team from './pages/Team';
import Settings from './pages/Settings';
import MyProjects from './pages/MyProjects';
import Analytics from './pages/Analytics';
import Message from './pages/Message';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route index element={<LandingPage/>}/>
        <Route path="login" element={<Login/>}/>
        
        <Route path="dashboard" element={<DashLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="bugs">
            <Route index element={<BugsList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>


          <Route path="myProjects">
            <Route index element={<MyProjects />} />
          </Route>

          
          <Route path="analytics">
            <Route index element={<Analytics />} />
          </Route>

          
          <Route path="messages">
            <Route index element={<Message />} />
          </Route>


          <Route path="team">
            <Route index element={<Team />} />
          </Route>


          <Route path="settings">
            <Route index element={<Settings />} />
          </Route>

        </Route>{/* End Dash */}

      </Route>
    </Routes>
  );
}

export default App;
