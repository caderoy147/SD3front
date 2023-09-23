import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import Dashboard from './pages/Dashboard';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';


function App() {

  return (
    <div className="App">
      {/* <Header/>
      <Content/> */}
      {/* <Footer /> */}
      <Dashboard/>
      <SideBar/>
      <NavBar/>
      
    </div>
  );
}

export default App;
