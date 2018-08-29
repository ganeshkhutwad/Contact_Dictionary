import Enzyme, { shallow, render, mount } from 'enzyme';
import { configure } from 'enzyme';
import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
