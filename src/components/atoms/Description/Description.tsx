import React from 'react';

import {ArithmeticOperations} from '../../../../typings/app.types';

type Props = {operation: ArithmeticOperations};

const textArithmeticOperationMap = new Map<ArithmeticOperations, string>([
  [
    'multiplication',
    'Multiplication also combines multiple quantities into a single quantity, called the product. In fact, multiplication can be thought of as a consolidation of many additions. Specifically, the product of x and y is the result of x added together y times.',
  ],
]);

const activityDescriptionMap = new Map<ArithmeticOperations, string>([
  [
    'multiplication',
    'Click on a number to discover which are a multiple of that number!',
  ],
]);

export default function Description({operation}: Props) {
  const arithmeticOperationText = textArithmeticOperationMap.get(operation);
  const activityDescriptionText = activityDescriptionMap.get(operation);

  return (
    <main role="main">
      <p>{arithmeticOperationText}</p>
      <p>{activityDescriptionText}</p>
    </main>
  );
}
