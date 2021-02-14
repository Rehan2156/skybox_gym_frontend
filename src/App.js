import './App.css';
import {Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/SignInPage/SignInPage';
import EnrollPage from './Pages/EnrollPage/EnrollPage';
import TrainerPage from './Pages/TrainerPage/TrainerPage';
import TraineePage from './Pages/TraineePage/TraineePage';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/signin' component={SignInPage}/>
      <Route exact path='/enroll' component={EnrollPage}/>
      <Route exact path='/trainer' component={TrainerPage}/>
      <Route exact path='/trainee' component={TraineePage}/>
      <Footer/>
    </div>
  );
}

export default App;
