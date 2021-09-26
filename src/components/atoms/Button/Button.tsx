import React, {useRef, useState, useEffect, ReactElement} from 'react';
import {useButton} from '@react-aria/button';

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
      style={{background: isActive ? 'red' : undefined}}
      onPress={onPress}
      {...buttonProps}
      ref={ref}>
      {text}
      {children}
    </button>
  );
}
