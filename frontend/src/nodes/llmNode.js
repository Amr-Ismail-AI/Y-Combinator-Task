// llmNode.js

import React from 'react';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="🤖 LLM"
      inputs={[
        { name: 'system' },
        { name: 'prompt' }
      ]}
      outputs={[
        { name: 'response' }
      ]}
    >
      <div style={{ fontSize: '12px', color: '#555' }}>
        This is a standard LLM node.
      </div>
    </BaseNode>
  );
};