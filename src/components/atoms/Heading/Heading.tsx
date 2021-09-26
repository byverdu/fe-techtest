import React, { CSSProperties, ReactElement } from 'react';

import styles from './styles.scss';

type SectionLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props = {
  level: SectionLevels;
  content: string | ReactElement | ReactElement[];
  stylesOverWrite?: CSSProperties;
};

export default function Heading({
  content,
  stylesOverWrite,
  level,
}: Props): ReactElement {
  const componentAttr = {
    className: styles[`heading-${level}`],
    ...(stylesOverWrite && { style: stylesOverWrite }),
  };

  return React.createElement(level, componentAttr, content);
}
