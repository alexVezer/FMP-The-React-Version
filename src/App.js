import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'
import ServicesScreen from './screens/ServicesScreen';



const App = () => {
  return (
    <Router>
      
      <Route path = '/' component={HomeScreen} exact/>
      <Route path = '/services' component={ServicesScreen}/>

      <Footer/>
    </Router>
  );
}

export default App;
