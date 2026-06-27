// delayNode.js

import React from 'react';
import { BaseNode } from '../BaseNode';

export const DelayNode = ({ id }) => {
  const fieldStyle = {
    width: '100%',
    padding: '6px 8px',
    fontSize: '12px',
    color: '#334155',
    backgroundColor: '#f8fafc',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    marginTop: '4px'
  };

  return (
    <BaseNode
      id={id}
      title="⏱️ Time Delay"
      inputs={[{ name: 'input' }]}
      outputs={[{ name: 'output' }]}
    >
      <div style={{ width: '100%' }}>
        <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>
          Seconds:
          <input 
            type="number" 
            defaultValue={5} 
            style={fieldStyle} 
          />
        </label>
      </div>
    </BaseNode>
  );
};