// emailNode.js

import React from 'react';
import { BaseNode } from '../BaseNode';

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="✉️ Send Email"
      inputs={[{ name: 'body' }, { name: 'recipient' }]}
      outputs={[{ name: 'status' }]}
    >
      <div style={{ fontSize: '11px', color: '#666' }}>
        Sends the generated text as an email.
      </div>
    </BaseNode>
  );
};