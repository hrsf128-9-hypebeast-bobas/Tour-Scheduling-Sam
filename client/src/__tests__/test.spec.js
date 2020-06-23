import React from 'react';
import { shallow } from 'enzyme';

import MainViewer from '../components/MainViewer';

describe('MainViewer', () => {
  const wrapper = shallow(<MainViewer />);

  it('Should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  xit('Should dynamically inital image', () => {
    expect(wrapper.find('img'));
  });

  it('Should dynamically render image count', () => {
    let text = wrapper.find('#imgCount').text();
    expect(text).toEqual('57');
  });
});
