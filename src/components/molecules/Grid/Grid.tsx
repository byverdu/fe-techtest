import React, {useState, useCallback, ReactElement} from 'react';
import Button from 'components/atoms/Button';
import gridBuilder from 'utils/gridBuilder.util';
import getRandomNumber from '../../../utils/getRandomNumber.util';

type Props = {gridLength: number};

export default function Grid({gridLength}: Props): ReactElement {
  const [activeNumber, setActiveNumber] = useState<number | undefined>(
    undefined
  );
  const buttonClickHandler = useCallback(
    (nextActiveNumber: number) => {
      setActiveNumber(nextActiveNumber);
    },
    [activeNumber]
  );
  const grid = gridBuilder(gridLength).map((item) => (
    <Button
      key={getRandomNumber()}
      activeNumber={activeNumber}
      text={item}
      onPress={() => buttonClickHandler(item)}
    />
  ));

  return <>{grid}</>;
}
