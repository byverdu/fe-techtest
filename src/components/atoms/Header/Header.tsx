import React, {CSSProperties, ReactElement} from 'react';

import styles from './styles.scss';

type HeaderTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props = {
  headerType: HeaderTypes;
  title: string;
  stylesOverWrite?: CSSProperties;
};

export default function Header({
  title,
  stylesOverWrite,
  headerType,
}: Props): ReactElement {
  const componentAttr = {
    className: styles[`heading-${headerType}`],
    ...(stylesOverWrite && {style: stylesOverWrite}),
  };
  console.log(styles);
  return React.createElement(headerType, componentAttr, title);
}
