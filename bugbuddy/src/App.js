import {Routes,Route} from 'react-router-dom'

import Layout from './components/Layout';
import Login from './components/Login';
import LandingPage from './pages/LandingPage';
import DashLayout from './components/DashLayout';
import Dashboard from './pages/Dashboard';

import Team from './pages/Team';
import Settings from './pages/Settings';
import MyProjects from './pages/MyProjects';
import Analytics from './pages/Analytics';
import Message from './pages/Message';

import EditUser from './features/users/EditUser';
import NewUserForm from './features/users/NewUserForm';
import EditBug from './features/bugs/EditBug';
import NewBug from './features/bugs/NewBug';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route index element={<LandingPage/>}/>
        <Route path="login" element={<Login/>}/>
        
        <Route path="dashboard" element={<DashLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="myProjects">
            <Route index element={<MyProjects />} />
            <Route path=":id" element={<EditBug/>} />
            <Route path="new" element={<NewBug/>} />
          </Route>

          
          <Route path="analytics">
            <Route index element={<Analytics />} />
          </Route>

          
          <Route path="messages">
            <Route index element={<Message />} />
          </Route>


          <Route path="team">
            <Route index element={<Team />} />
            <Route path=":id" element={<EditUser/>} />
            <Route path="new" element={<NewUserForm/>} />
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
