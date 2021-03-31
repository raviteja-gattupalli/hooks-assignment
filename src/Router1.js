import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link,useRouteMatch} from 'react-router-dom'

const Home=()=>{
   
    return(
  
      <div>
        <h1>Home</h1>
      </div>
    )
  }
function Router1(){

    return(

        <div>
            <Router>
            <ul>
          
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/User">User</Link></li>
            </ul>

            <Route path="/Home">
                <Home />
            </Route>
           </Router>
         

        </div>
    )
}


export default Router1