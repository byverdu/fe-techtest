import React, {ReactElement} from 'react';

import Heading from 'components/atoms/Heading';
import Header from 'components/molecules/Header';
import Multiplication from 'containers/Multiplication';

const App = (): ReactElement => (
  <>
    <Header>
      <Heading content="Let's learn some Maths" level="h1" />
    </Header>
    <Multiplication />
  </>
);

export default App;
