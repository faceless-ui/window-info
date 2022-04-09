import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mockWindowResizeEvents, mockRequestAnimationFrame } from './mocks';

configure({ adapter: new Adapter() });

mockWindowResizeEvents();
mockRequestAnimationFrame();
