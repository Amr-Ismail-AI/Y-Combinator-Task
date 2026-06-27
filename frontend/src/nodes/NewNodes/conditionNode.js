// conditionNode.js

import React from 'react';
import { BaseNode } from '../BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="🔀 If / Else"
      inputs={[{ name: 'input' }]}
      outputs={[{ name: 'true' }, { name: 'false' }]}
    >
      <div style={{ fontSize: '11px', color: '#666' }}>
        Routes data based on a condition.
      </div>
    </BaseNode>
  );
};