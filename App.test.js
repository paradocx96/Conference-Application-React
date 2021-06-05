import React from 'react';
import App from './App';
import {shallow} from "enzyme";
const renderer = require('react-test-renderer');

describe('Conference Application  test cases', () => {
    it('renders correctly', () => {
        renderer.create(<App/>);
    });


    const title = "ICAF -2021";
    let wrapped = shallow(<title>{title}</title>);
    it('should render the Title Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });

});
