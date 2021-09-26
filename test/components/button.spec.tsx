import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Button from '../../src/components/atoms/Button';

describe('List Component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <Button activeNumber={2} text={4} onPress={() => {}} />
    );
  });

  it('should render a button', () => {
    expect(component.find('button')).toHaveLength(1);
  });

  it('should render the correct text', () => {
    expect(component.text()).toEqual('4');
  });
});
