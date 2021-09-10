import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'
import ServicesScreen from './screens/ServicesScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';



const App = () => {

  require('dotenv').config()
  
  return (
    <Router>
      
      <Route path = '/' component={HomeScreen} exact/>
      <Route path = '/services' component={ServicesScreen}/>
      <Route path = '/contact' component={ContactScreen}/>
      <Route path = '/despre' component={AboutScreen}/>

      <Footer/>
    </Router>
  );
}

export default App;
