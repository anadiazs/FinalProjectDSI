import React from 'react'
import './Assets/css/App.css'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route, Link,} from "react-router-dom";

function App() {
  // const Disney = <a href="../src/Screens/Disney/disney.html"></a>
  // ReactDOM.render(disney, document.getElementById('root'))

  return (
    <div className="App w-full h-screen">
      <Router>
        <Switch>
          <Route exact path ="/" component={Home}></Route>
          {/* <Route exact path ="/disney" component={Disney}></Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
