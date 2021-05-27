import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// Import Components
import Homepage from "./src/pages/Homepage";
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";
import KeyNotes from "./src/pages/KeyNotes";
import Dashboard from "./src/pages/Dashboard";
import ViewKeyNoteDashboard from "./src/components/KeyNotes/ViewKeyNoteDashboard";


function App() {

    return (
        <div>
            <Router>
                <NavigationBar/>
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/keynotes">
                        <KeyNotes/>
                    </Route>
                    <Route path="/dashboard-keynotes">
                        <ViewKeyNoteDashboard/>
                    </Route>
                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;