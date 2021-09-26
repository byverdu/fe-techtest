import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Heading from '../../src/components/atoms/Heading';

describe('List Component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <Heading
        stylesOverWrite={{ fontSize: '30px' }}
        level="h1"
        content="This is a title"
      />,
    );
  });

  it('should render the correct Header', () => {
    expect(component.find('h1')).toHaveLength(1);
  });

  it('should render the correct title', () => {
    expect(component.text()).toEqual('This is a title');
  });

  it('should add the style attribute', () => {
    expect(component.prop('style')).toEqual({ fontSize: '30px' });
  });

  it('should allow nested content', () => {
    component = shallow(
      <Heading
        stylesOverWrite={{ fontSize: '30px' }}
        level="h1"
        content={<span>Nested Content</span>}
      />,
    );
    expect(component.find('h1 > span')).toHaveLength(1);
  });
});
