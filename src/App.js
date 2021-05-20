import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/videos/add">
          test
        </Route>
        <Route path="/videos/:vid/comments/add">
          test
        </Route>
        <Route path="/videos/:vid">
          test
        </Route>
        <Route exact path="/">
          test
        </Route>
      </Switch>
    </Router>
  )
}

export default App
