import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// Import Components
import Homepage from "./src/pages/Homepage";
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";

import ResearchPaperUpload from "./src/components/ResearchPaper/ResearchPaperUpload";
import ResearchPaperDownload from "./src/components/ResearchPaper/ResearchPaperDownload";
import Research from "./src/components/ResearchPaper/Research";
import ViewAllResearchPapers from "./src/components/ResearchPaper/ViewAllResearchPapers";
import DeleteResearchPapers from "./src/components/ResearchPaper/DeleteResearchPapers";
import UpdateResearchPaper from "./src/components/ResearchPaper/UpdateResearchPaper";
import ViewSingleResearchPaper from "./src/components/ResearchPaper/ViewSingleResearchPaper";

import KeyNotes from "./src/pages/KeyNotes";
import Dashboard from "./src/pages/Dashboard";
import ViewKeyNoteDashboard from "./src/components/KeyNotes/ViewKeyNoteDashboard";
import AddKeyNote from "./src/components/KeyNotes/AddKeyNote";



function App() {

    return (
        <div>
            <Router>
                <NavigationBar/>
                <Switch>
                    <Route exact path="/"><Homepage/></Route>
                    <Route path="/dashboard"><Dashboard/></Route>
                    <Route path="/keynotes"><KeyNotes/></Route>
                    <Route path="/dashboard-keynotes"><ViewKeyNoteDashboard/></Route>
                    <Route path="/dashboard-keynotes-add"><AddKeyNote/></Route>

                    <Route path={'/research'} exact component={Research} />
                    <Route path={'/research/upload'} exact component={ResearchPaperUpload} />
                    <Route path={'/research/download'} exact component={ResearchPaperDownload} />
                    <Route path={'/research/viewAll'} exact component={ViewAllResearchPapers} />
                    <Route path={'/research/deleteEntries'} exact component={DeleteResearchPapers} />
                    <Route path={'/research/updatePaper'} exact component={UpdateResearchPaper} />
                    <Route path={'/research/viewSinglePaper'} exact component={ViewSingleResearchPaper} />

                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;