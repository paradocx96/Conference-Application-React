import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// Import Components
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";
import Homepage from "./src/pages/Homepage";
import ResearchPaperUpload from "./src/components/ResearchPaper/ResearchPaperUpload";
import ResearchPaperDownload from "./src/components/ResearchPaper/ResearchPaperDownload";
import Research from "./src/components/ResearchPaper/Research";
import NavigationBar2 from "./src/components/Navbar/NavigationBar2";

function App() {

    return (
        <div>
            {/*<NavigationBar/>*/}

            <Router>
                <NavigationBar2 />
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path={'/research'} exact component={Research} />
                    <Route path={'/research/upload'} exact component={ResearchPaperUpload} />
                    <Route path={'/research/download'} exact component={ResearchPaperDownload} />
                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;