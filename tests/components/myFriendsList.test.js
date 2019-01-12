import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
//import 'jsdom-global/register';
import FriendsApp from '../../client/components/app.jsx';
import SongList from '../../client/components/app.jsx';
import SongListEntry from '../../client/components/songList.jsx';
import { mount } from 'enzyme';

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

describe('<SongListEntry />', () => {
  describe('render()', () => {
  test('renders the component', () => {
    const wrapper = shallow(<SongListEntry />);
  
    expect(toJson(wrapper)).toMatchSnapshot();
    })
  })
});

it('ensure to have only three children (control element)', () => {  
  expect(SongListComponent.findWhere(node => node.key() === 'songs').length).toEqual(1);
});

const SongListComponent = mount(<SongList><div /></SongList>);
it('check children prop type', () => {  
      expect(SongListComponent.props().children).toBeObject();
});


