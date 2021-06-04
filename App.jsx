import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// Import Components
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";
import Homepage from "./src/pages/Homepage";
import Workshop from "./src/pages/WorkshopPage";

function App() {

    return (
        <div>
            <Router>
                <NavigationBar/>
                <Switch>

                    {/* HOMEPAGE */}
                    <Route exact path="/"><Homepage/></Route>

                    {/* WORKSHOP_PAGE */}
                    <Route exact path={'/workshop'}> exact component={Workshop}/>

                    {/* DASHBOARD */}
                    <Route path={'/dashboard'} exact component={Dashboard}/>
                    <Route path={'/editor-dashboard'} exact component={DashboardEditor}/>
                    <Route path={'/reviewer/dashboard'} exact component={ReviewerDashboard}/>

                    {/* KEYNOTES */}
                    <Route path={'/keynotes'} exact component={ViewKeyNoteSection}/>
                    <Route path={'/dashboard-keynotes'} exact component={ViewKeyNoteDashboard}/>
                    <Route path={'/dashboard-keynotes-add'} exact component={AddKeyNoteAdmin}/>

                    {/* NEWS */}
                    <Route path={'/news'} exact component={NewsSection}/>
                    <Route path={'/dashboard-news'} exact component={NewsDashboard}/>
                    <Route path={'/dashboard-news-add'} exact component={AddNewsAdmin}/>

                    {/* DOWNLOADS */}
                    <Route path={'/downloads'} exact component={DownloadSection}/>
                    <Route path={'/dashboard-download'} exact component={DownloadDashboard}/>
                    <Route path={'/dashboard-download-add'} exact component={AddDownloadAdmin}/>

                    {/* RESEARCH */}
                    <Route path={'/research'} exact component={Research}/>
                    <Route path={'/research/upload'} exact component={ResearchPaperUpload}/>
                    <Route path={'/research/download'} exact component={ResearchPaperDownload}/>
                    <Route path={'/research/viewAll'} exact component={ViewAllResearchPapers}/>
                    <Route path={'/research/deleteEntries'} exact component={DeleteResearchPapers}/>
                    <Route path={'/research/updatePaper'} exact component={UpdateResearchPaper}/>
                    <Route path={'/research/viewSinglePaper'} exact component={ViewSingleResearchPaper}/>

                    {/* REGISTRATION */}
                    <Route path="/sign-up" component={Registration}/>
                    <Route path="/sign-in" component={Login}/>

                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;