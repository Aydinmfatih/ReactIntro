import './App.css';
import Dashboard from './layouts/Dashboard';
import  'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
    
      <Container className='=main'><Dashboard/></Container>
    
    </div>
  );
}
export default App;
 
