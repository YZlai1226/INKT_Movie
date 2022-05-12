// import "/styles/globals.css";
import Create from '../../components/admincomps/Create';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
        <Route exact path='/create' component={Create} />
        </div>
      </div>
    </Router>
  );
}

export default App;