import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// TODO: Import Components
//HOMEPAGE
import Homepage from "./src/pages/Homepage";
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";

//RESEARCH
import ResearchPaperUpload from "./src/components/ResearchPaper/ResearchPaperUpload";
import ResearchPaperDownload from "./src/components/ResearchPaper/ResearchPaperDownload";
import Research from "./src/components/ResearchPaper/Research";
import ViewAllResearchPapers from "./src/components/ResearchPaper/ViewAllResearchPapers";
import DeleteResearchPapers from "./src/components/ResearchPaper/DeleteResearchPapers";
import UpdateResearchPaper from "./src/components/ResearchPaper/UpdateResearchPaper";
import ViewSingleResearchPaper from "./src/components/ResearchPaper/ViewSingleResearchPaper";

//DASHBOARD
import Dashboard from "./src/pages/Dashboard";
import ReviewerDashboard from "./src/components/Reviewer/ReviewerDashboard";
import DashboardEditor from "./src/pages/DashboardEditor";
import NewsDashboard from "./src/components/News/NewsDashboard";
import ViewKeyNoteDashboard from "./src/components/KeyNotes/ViewKeyNoteDashboard";
import DownloadDashboard from "./src/components/Download/DownloadDashboard";
import ResearchDashboard from "./src/components/ResearchPaper/ResearchDashboard";
import WorkshopDashboard from "./src/components/workshop/WorkshopDashboard";
import DashboardWorkshop from "./src/pages/DashboardWorkshop";

//NEWS
import NewsSection from "./src/components/News/NewsSection";
import AddNewsAdmin from "./src/components/News/AddNewsAdmin";

//KEYNOTES
import ViewKeyNoteSection from "./src/components/KeyNotes/ViewKeyNoteSection";
import AddKeyNoteAdmin from "./src/components/KeyNotes/AddKeyNoteAdmin";

//DOWNLOAD
import DownloadSection from "./src/components/Download/DownloadSection";
import AddDownloadAdmin from "./src/components/Download/AddDownloadAdmin";

//REGISTRATION
import Registration from "./src/components/Registration/Registration";
import Login from "./src/components/Login/Login";
import BackendRegistration from "./src/components/Registration/BackendRegistration";

//WORKSHOP
import Workshop from "./src/pages/WorkshopPage";
import NoPermissionMessage from "./src/components/Permission/NoPermissionMessage";
import ResearchOperations from "./src/components/ResearchPaper/ResearchOperations";
import ViewAllResearchPapersAsReviewer from "./src/components/ResearchPaper/ViewAllResearchPapersAsReviewer";
import WorkshopAllPendingList from "./src/components/workshop/WorkshopAllPendingList";

//USER DETAILS
import ViewAllUserDetails from "./src/components/UserDetails/ViewAllUserDetails";

function App() {

    return (
        <div>
            <Router>
                <NavigationBar/>
                <Switch>

                    {/* HOMEPAGE */}
                    <Route exact path="/"><Homepage/></Route>

                    {/* WORKSHOP_PAGE */}
                    <Route path={'/workshop'} exact component={Workshop}/>
                    <Route path={'/workshop/pending'} exact component={WorkshopAllPendingList}/>

                    {/* DASHBOARD */}
                    <Route path={'/dashboard'} exact component={Dashboard}/>
                    <Route path={'/editor-dashboard'} exact component={DashboardEditor}/>
                    <Route path={'/reviewer/dashboard'} exact component={ReviewerDashboard}/>
                    <Route path={'/dashboard-keynotes'} exact component={ViewKeyNoteDashboard}/>
                    <Route path={'/dashboard-news'} exact component={NewsDashboard}/>
                    <Route path={'/dashboard-download'} exact component={DownloadDashboard}/>
                    <Route path={'/dashboard-research'} exact component={ResearchDashboard}/>
                    <Route path={'/dashboard-workshop'} exact component={WorkshopDashboard}/>
                    <Route path={'/workshop-dashboard'} exact component={DashboardWorkshop}/>

                    {/* KEYNOTES */}
                    <Route path={'/keynotes'} exact component={ViewKeyNoteSection}/>
                    <Route path={'/dashboard-keynotes-add'} exact component={AddKeyNoteAdmin}/>

                    {/* NEWS */}
                    <Route path={'/news'} exact component={NewsSection}/>
                    <Route path={'/dashboard-news-add'} exact component={AddNewsAdmin}/>

                    {/* DOWNLOADS */}
                    <Route path={'/downloads'} exact component={DownloadSection}/>
                    <Route path={'/dashboard-download-add'} exact component={AddDownloadAdmin}/>

                    {/* RESEARCH */}
                    <Route path={'/research'} exact component={Research}/>
                    <Route path={'/research/upload'} exact component={ResearchPaperUpload}/>
                    <Route path={'/research/download'} exact component={ResearchPaperDownload}/>
                    <Route path={'/research/viewAll'} exact component={ViewAllResearchPapers}/>
                    <Route path={'/research/viewAllAsReviewer'} exact component={ViewAllResearchPapersAsReviewer}/>
                    <Route path={'/research/deleteEntries'} exact component={DeleteResearchPapers}/>
                    <Route path={'/research/updatePaper'} exact component={UpdateResearchPaper}/>
                    <Route path={'/research/viewSinglePaper'} exact component={ViewSingleResearchPaper}/>
                    <Route path={'/research/operations'} exact component={ResearchOperations}/>

                    {/*No permission*/}
                    <Route path={'/no-permission'} component={NoPermissionMessage} />

                    {/* REGISTRATION */}
                    <Route path="/sign-up" component={Registration}/>
                    <Route path="/sign-in" component={Login}/>
                    <Route path="/backend-sign-up" component={BackendRegistration}/>

                    {/* USER DETAILS */}
                    <Route path="/get-all-users" component={ViewAllUserDetails}/>

                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;
