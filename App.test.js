import React from 'react';
import App from './App';
import {shallow} from "enzyme";
const renderer = require('react-test-renderer');
import WorkshopPage from "./src/pages/WorkshopPage";

describe('Conference Application  test cases', () => {

    it('renders correctly', () => {
        renderer.create(<App/>);
    });

    const title = "ICAF -2021";
    let wrapped = shallow(<title>{title}</title>);
    it('should render the Title Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });

    it('should render the Workshop Component correctly', () => {
        const WorkshopPageComponent = renderer.create(<WorkshopPage/>).toJSON();
        expect(WorkshopPageComponent).toMatchSnapshot();
    });
});
