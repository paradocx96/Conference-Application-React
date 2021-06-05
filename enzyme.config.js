/** Used in jest.config.js */
import { configure } from 'enzyme';
// const configure = require('enzyme');
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });