import {Routes,Route} from 'react-router-dom'
import Prefetch from './features/auth/Prefetch';

import Layout from './components/Layout';
import Login from './components/Login';
import DashLayout from './components/DashLayout';

// pages visible to all kinds of users
import LandingPage from './pages/allUsersPages/LandingPage';
import Dashboard from './pages/allUsersPages/Dashboard';
import Notifications from './components/Notifications';
import BugStatus from './pages/allUsersPages/BugStatus';
import Settings from './pages/allUsersPages/Settings';
import MyProjects from './pages/allUsersPages/BugWorkspace';
import Profile from './pages/allUsersPages/Profile';


import EditUser from './features/users/EditUser';
import NewUserForm from './features/users/NewUserForm';
import EditBug from './features/bugs/EditBug';
import NewBug from './features/bugs/NewBug';


//pages for dev

//pages for manager

//pages for qa
import QAacceptOrDeny from './pages/qaPages/QAacceptOrDeny';
import QAinsideBugStatus from './pages/qaPages/QAinsideBugStatus';
import QAinsideBugWorkspace from './pages/qaPages/QAinsideBugWorkspace'

//pagees for dev and qa





function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route index element={<LandingPage/>}/>
        <Route path="login" element={<Login/>}/>
        
        <Route element={<Prefetch/>}>

          <Route path="dashboard" element={<DashLayout />}>

            <Route index element={<Dashboard />} />

            <Route path="notifications" element={<Notifications/>}/>

            <Route path="bugWorkSpace">
              <Route index element={<MyProjects />} />
              <Route path=":id" element={<EditBug/>} />
              <Route path="new" element={<NewBug/>} />
            </Route>

            <Route path="bugStatus">
              <Route index element={<BugStatus />} />
              <Route path=":id" element={<EditUser/>} />
              <Route path="new" element={<NewUserForm/>} />
            </Route>

            <Route path="user">
              <Route index element={<BugStatus />} />
              <Route path=":id" element={<EditUser/>} />
              <Route path="new" element={<NewUserForm/>} />
            </Route>


            <Route path="settings">
              <Route index element={<Settings />} />
            </Route>

            <Route path="profile">
              <Route index element={<Profile />} />
            </Route>




            {/* temporary views QA*/}
            <Route path="QAacceptOrDeny">
              <Route index element={<QAacceptOrDeny />} />
            </Route>

            <Route path="QAinsideBugStatus">
              <Route index element={<QAinsideBugStatus />} />
            </Route>
          
            <Route path="QAinsideBugWorkspace">
              <Route index element={<QAinsideBugWorkspace />} />
            </Route>



            {/* temporary views DEV*/}
            <Route path="QAacceptOrDeny">
              <Route index element={<QAacceptOrDeny />} />
            </Route>























          </Route>{/* End Dash */}

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
