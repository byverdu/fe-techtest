import React, {ReactElement} from 'react';

import Heading from 'components/atoms/Heading';
import Grid from 'components/molecules/Grid';

const App = (): ReactElement => (
  <>
    <Heading content="Let's learn some Maths" level="h1" />
    <Grid gridLength={144} />
  </>
);

export default App;
