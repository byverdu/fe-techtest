import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Header from '../../src/components/atoms/Header';

describe('List Component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <Header
        stylesOverWrite={{fontSize: '30px'}}
        headerType="h1"
        title="This is a title"
      />
    );
  });

  it('should render the correct Header', () => {
    expect(component.find('h1')).toHaveLength(1);
  });

  it('should render the correct title', () => {
    expect(component.text()).toEqual('This is a title');
  });

  it('should add the style attribute', () => {
    expect(component.prop('style')).toEqual({fontSize: '30px'});
  });
});
