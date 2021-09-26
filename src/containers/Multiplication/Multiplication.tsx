import React, { ReactElement } from 'react';

import Heading from 'components/atoms/Heading';
import Description from 'components/atoms/Description';
import Grid from 'components/molecules/Grid';

export default function Multiplication(): ReactElement {
  return (
    <section>
      <Heading content="Multiplication"
level="h2" />
      <Description operation="multiplication" />
      <Grid length={144} />
    </section>
  );
}
