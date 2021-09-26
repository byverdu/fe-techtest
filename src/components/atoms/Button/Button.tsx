import React, {useRef, useState, useEffect, ReactElement} from 'react';
import {useButton} from '@react-aria/button';

import styles from './styles.scss';

type Props = {
  activeNumber: number;
  text: number;
  onPress: () => void;
  children?: ReactElement | ReactElement[];
};

export default function Button(props: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const {text, onPress, children, activeNumber} = props;
  const ref = useRef();
  const {buttonProps} = useButton(props, ref);

  useEffect(() => {
    setIsActive(text % activeNumber === 0);
  }, [isActive]);

  return (
    <button
      className={`${styles.button} ${isActive && styles.active}`}
      onPress={onPress}
      {...buttonProps}
      ref={ref}>
      {text}
      {children}
    </button>
  );
}
