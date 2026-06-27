// databaseNode.js

import React from 'react';
import { BaseNode } from '../BaseNode';

export const DatabaseNode = ({ id }) => {
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
    marginTop: '4px',
    cursor: 'pointer'
  };

  return (
    <BaseNode
      id={id}
      title="💾 Database"
      inputs={[{ name: 'query' }]}
      outputs={[{ name: 'results' }]}
    >
      <div style={{ width: '100%' }}>
        <select style={fieldStyle}>
          <option>Users_Table</option>
          <option>Logs_Table</option>
        </select>
      </div>
    </BaseNode>
  );
};