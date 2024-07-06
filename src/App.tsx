import Navbar from './Navbar'
import Home from './Home'
import CompetitionSchedule from './CompetitionSchedule'
import HCMLTeams from './HCMLTeams'
import Resources from './Resources'
import MVMSMathTeam from './MVMSMathTeam'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className = 'App'>
        <Navbar />
        <div className = "content">
          <Switch>
            <Route path = "/contact">
              <Contact />
            </Route>
            <Route path = "/about">
              <About />
            </Route>
            <Route path = "/mvms-math-team">
              <MVMSMathTeam />
            </Route>
            <Route path = "/resources">
              <Resources />
            </Route>
            <Route path = "/hcml-teams"> 
              <HCMLTeams />
            </Route>
            <Route path = "/competition-schedule"> 
              <CompetitionSchedule />
            </Route>
            <Route path = "/"> 
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
