import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import ErrorPage from './Error'
import Greet from './Greet'
import Home from './Home'




function Routing(props) {
    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">React</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/about">About</Link>
                        <Link className="nav-item nav-link" to="/contact">Contact</Link>
                        <Link className="nav-item nav-link" to={`/greet/${props.name}`}>Greet</Link>
                        
                    </div>
                </div>
            </nav>
            <div className="container">    
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/contact" component={Contact}></Route>
                        <Route path="/greet/:name" component={Greet}></Route>
                        <Route path="*" component={ErrorPage}></Route>
                    </Switch>
                </div>

        </Router>
    )
}

export default Routing
