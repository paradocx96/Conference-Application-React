import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// Import Components
import Homepage from "./src/pages/Homepage";
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";
import KeyNotes from "./src/pages/KeyNotes";


function App() {

    return (
        <div>
            <NavigationBar/>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/keynotes">
                        <KeyNotes/>
                    </Route>
                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;