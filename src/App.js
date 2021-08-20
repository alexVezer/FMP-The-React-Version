import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'
import ServicesScreen from './screens/ServicesScreen';
import ContactScreen from './screens/ContactScreen';



const App = () => {
  return (
    <Router>
      
      <Route path = '/' component={HomeScreen} exact/>
      <Route path = '/services' component={ServicesScreen}/>
      <Route path = '/contact' component={ContactScreen}/>

      <Footer/>
    </Router>
  );
}

export default App;
