import React from 'react'
import './Assets/css/App.css'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route, } from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-screen">
      <Router>
        <Switch>
          <Route exact path ="/" component={Home}></Route>
          <Route exact path ="/disney" render={() => <div>
            <iframe src="../src/Screens/Disney/index.html" frameborder="0" className="w-full h-screen" ></iframe>
            </div>} >
          </Route>
          <Route exact path ="/tienda" render={() => <div>
            <iframe src="../src/Screens/Tienda/Tienda.html" frameborder="0" className="w-full h-screen" ></iframe>
            </div>} >
          </Route>
          <Route exact path ="/calculadora" render={() => <div>
            <iframe src="../src/Screens/Calculadora/index.html" frameborder="0" className="w-full h-screen" ></iframe>
            </div>} >
          </Route>
          <Route exact path ="/conciertos" render={() => <div>
            <iframe src="../src/Screens/Conciertos/index.html" frameborder="0" className="w-full h-screen" ></iframe>
            </div>} >
          </Route>
          <Route exact path ="/cine" render={() => <div>
            <iframe src="../src/Screens/Cine/index.html" frameborder="0" className="w-full h-screen" ></iframe>
            </div>} >
          </Route>
          <Route exact path ="/twitter" render={() => <div>
            <iframe src="../src/Screens/Twitter/index.html" frameborder="0" className="w-full h-screen" ></iframe>
            </div>} >
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
