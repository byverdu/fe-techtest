import React, {ReactElement} from 'react';

import Header from 'components/atoms/Header';
import Grid from 'components/molecules/Grid';

const App = (): ReactElement => (
  <>
    <Header title="hello" headerType="h1" />
    <Grid gridLength={144} />
  </>
);

export default App;
