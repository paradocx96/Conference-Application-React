import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// TODO: Import Components
//HOMEPAGE
import Homepage from "./src/pages/Homepage";
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";
import Contact from "./src/components/Homepage/Contact";

//RESEARCH
import ResearchPaperUpload from "./src/components/ResearchPaper/ResearchPaperUpload";
import ResearchPaperDownload from "./src/components/ResearchPaper/ResearchPaperDownload";
import Research from "./src/components/ResearchPaper/Research";
import ViewAllResearchPapers from "./src/components/ResearchPaper/ViewAllResearchPapers";
import DeleteResearchPapers from "./src/components/ResearchPaper/DeleteResearchPapers";
import UpdateResearchPaper from "./src/components/ResearchPaper/UpdateResearchPaper";
import ViewSingleResearchPaper from "./src/components/ResearchPaper/ViewSingleResearchPaper";
import Payment from "./src/components/ResearchPaper/Payment";

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
import EditNews from "./src/components/News/EditNews";

//KEYNOTES
import ViewKeyNoteSection from "./src/components/KeyNotes/ViewKeyNoteSection";
import AddKeyNoteAdmin from "./src/components/KeyNotes/AddKeyNoteAdmin";
import EditKeyNote from "./src/components/KeyNotes/EditKeyNote";

//DOWNLOAD
import DownloadSection from "./src/components/Download/DownloadSection";
import AddDownloadAdmin from "./src/components/Download/AddDownloadAdmin";
import EditDownload from "./src/components/Download/EditDownload";

//REGISTRATION
import Registration from "./src/components/Registration/Registration";
import Login from "./src/components/Login/Login";
import BackendRegistration from "./src/components/Registration/BackendRegistration";

//WORKSHOP
import Workshop from "./src/pages/WorkshopPage";
import ResearchOperations from "./src/components/ResearchPaper/ResearchOperations";
import ViewAllResearchPapersAsReviewer from "./src/components/ResearchPaper/ViewAllResearchPapersAsReviewer";
import WorkshopAllPendingList from "./src/components/workshop/WorkshopAllPendingList";

//ABOUT
import AddAbout from "./src/components/About/AddAbout";
import EditAbout from "./src/components/About/EditAbout";

//Permission
import NoPermissionMessage from "./src/components/Permission/NoPermissionMessage";
import AdminPermissionMessage from "./src/components/Permission/AdminPermissionMessage";

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
                    <Route path={'/contact'} exact component={Contact}/>

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

                    {/* ABOUT */}
                    <Route path={'/dashboard-about-add'} exact component={AddAbout}/>
                    <Route path={'/dashboard-about-update'} exact component={EditAbout}/>

                    {/* KEYNOTES */}
                    <Route path={'/keynotes'} exact component={ViewKeyNoteSection}/>
                    <Route path={'/dashboard-keynotes-add'} exact component={AddKeyNoteAdmin}/>
                    <Route path={'/dashboard-keynotes-update'} exact component={EditKeyNote}/>

                    {/* NEWS */}
                    <Route path={'/news'} exact component={NewsSection}/>
                    <Route path={'/dashboard-news-add'} exact component={AddNewsAdmin}/>
                    <Route path={'/dashboard-news-update'} exact component={EditNews}/>

                    {/* DOWNLOADS */}
                    <Route path={'/downloads'} exact component={DownloadSection}/>
                    <Route path={'/dashboard-download-add'} exact component={AddDownloadAdmin}/>
                    <Route path={'/dashboard-download-update'} exact component={EditDownload}/>

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
                    <Route path={'/research/payment'} exact component={Payment}/>

                    {/*No permission*/}
                    <Route path={'/no-permission'} component={NoPermissionMessage} />
                    <Route path={'/no-permission-admin'} component={AdminPermissionMessage} />

                    {/* REGISTRATION */}
                    <Route path="/sign-up" component={Registration}/>
                    <Route path="/sign-in" component={Login}/>
                    <Route path="/backend-sign-up" component={BackendRegistration}/>

                    {/* USER DETAILS */}
                    <Route path="/dashboard-users" component={ViewAllUserDetails}/>

                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;
