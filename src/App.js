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
      
    <Route path = {`${process.env.PUBLIC_URL}/services`} component={ServicesScreen}/>
    <Route path = {`${process.env.PUBLIC_URL}/contact`} component={ContactScreen}/>
    <Route path = {`${process.env.PUBLIC_URL}/despre`} component={AboutScreen}/>
    <Route path = {`${process.env.PUBLIC_URL}/`} component={HomeScreen} exact/>

      <Footer/>
    </Router>
  );
}

export default App;
