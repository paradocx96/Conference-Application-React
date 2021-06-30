import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import Research from "../components/ResearchPaper/Research";
import {BrowserRouter} from "react-router-dom";
import ViewAllResearchPapers from "../components/ResearchPaper/ViewAllResearchPapers";
import ViewAllResearchPapersAsReviewer from "../components/ResearchPaper/ViewAllResearchPapersAsReviewer";
import DeleteResearchPapers from "../components/ResearchPaper/DeleteResearchPapers";
import ResearchDashboard from "../components/ResearchPaper/ResearchDashboard";
import UpdateResearchPaper from "../components/ResearchPaper/UpdateResearchPaper";
import Payment from "../components/ResearchPaper/Payment";

test("Research page renders without errors",() => {
    render(
        <BrowserRouter>
            <Research/>
        </BrowserRouter>

    );
});

test("View all research papers renders without errors",() => {
    render(
        <BrowserRouter>
            <ViewAllResearchPapers/>
        </BrowserRouter>
    );
});

test("View all research papers as reviewer renders without errors",() => {
    render(
        <BrowserRouter>
            <ViewAllResearchPapersAsReviewer/>
        </BrowserRouter>
    );
});


test("Delete research papers renders without errors",() => {
    render(
        <BrowserRouter>
            <DeleteResearchPapers/>
        </BrowserRouter>
    );
});

test("Research dashboard renders without errors",() => {
    render(
        <BrowserRouter>
            <ResearchDashboard/>
        </BrowserRouter>
    );
});

test("Update Research Paper renders without errors",() => {
    render(
        <BrowserRouter>
            <UpdateResearchPaper/>
        </BrowserRouter>
    );
});

test("Payment renders without errors",() => {
    render(
        <BrowserRouter>
            <Payment/>
        </BrowserRouter>
    );
});

