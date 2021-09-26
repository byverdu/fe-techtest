import React, {ReactElement} from 'react';

import Heading from 'components/atoms/Heading';
import Header from 'components/molecules/Header';
import Multiplication from 'containers/Multiplication';

import styles from './styles.scss';

const App = (): ReactElement => (
  <section className={styles.wrapper}>
    <Header>
      <Heading content="Let's learn some Maths" level="h1" />
    </Header>
    <Multiplication />
  </section>
);

export default App;
