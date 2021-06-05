import React from 'react';
import App from './App';

const renderer = require('react-test-renderer');

describe('Conference Application  test cases', () => {
    it('renders correctly', () => {
        renderer.create(<App/>);
    });


});
