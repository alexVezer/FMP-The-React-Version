import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      
      <Route path = '/' component={HomeScreen} exact/>
      <Footer/>
    </Router>
  );
}

export default App;
