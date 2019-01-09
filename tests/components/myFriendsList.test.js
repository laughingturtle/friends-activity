import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FriendsApp from '../../client/components/app.jsx';
import SongList from '../../client/components/app.jsx';

describe('<FriendsApp />', () => {
  describe('render()', () => {
  test('renders the component', () => {
    const wrapper = shallow(<FriendsApp />);
  
    expect(toJson(wrapper)).toMatchSnapshot();
    })
  })
});

describe('<SongList />', () => {
  describe('render()', () => {
  test('renders the component', () => {
    const wrapper = shallow(<SongList />);
  
    expect(toJson(wrapper)).toMatchSnapshot();
    })
  })
});


