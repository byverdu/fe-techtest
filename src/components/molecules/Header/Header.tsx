import React, {ReactElement} from 'react';

type Props = {children: ReactElement | ReactElement[]};

export default function Header({children}: Props) {
  return <header>{children}</header>;
}
