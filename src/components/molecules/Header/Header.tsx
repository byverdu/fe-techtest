import React, { ReactElement } from 'react';

type Props = { children: ReactElement | ReactElement[] };

export default function Header({ children }: Props): ReactElement {
  return <header>{children}</header>;
}
