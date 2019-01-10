import React from 'react';
import { shallow } from 'enzyme';
var sinon = require('sinon');
import toJson from 'enzyme-to-json';
import SongListEntry from '../../client/components/song.jsx';


describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      const clicked = shallow((<div className="songBlock" onClick={mockCallBack}>Ok! </div>));
      clicked.find('songBlock').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

