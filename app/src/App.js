import logo from './logo.svg'
import './App.css'
import Navigationbar from './components/Navbar'
import Homepage from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './pages/Admin'
import Appointment from './pages/Appointment'
import Checkout from './pages/Checkout'

function App() {
  return (
    <div className="App">
      <header>
        <Navigationbar />
      </header>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/admin" component={Admin} />
            <Route path="/appointment" component={Appointment} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
