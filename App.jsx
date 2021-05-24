import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// Import Components
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";
import Homepage from "./src/pages/Homepage";
import WorkshopPage from "./src/pages/WorkshopPage";

function App() {

    return (
        <div>
            <NavigationBar/>
            <Router>
                <Switch>
                    <Route exact path="/workshop">
                        <WorkshopPage/>
                    </Route>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;