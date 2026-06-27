// mergeNode.js

import React from 'react';
import { BaseNode } from '../BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="🔗 Merge"
      inputs={[{ name: 'part1' }, { name: 'part2' }]}
      outputs={[{ name: 'combined' }]}
    >
      <div style={{ fontSize: '11px', color: '#666' }}>
        Combines two inputs into one string.
      </div>
    </BaseNode>
  );
};