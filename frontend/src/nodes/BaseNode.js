// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import { motion } from 'framer-motion';

export const BaseNode = ({ id, title, inputs = [], outputs = [], children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2, boxShadow: '0 12px 20px -5px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.2 }}
      style={{ 
        minWidth: '220px', 
        width: 'max-content',
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        position: 'relative',
        borderTop: '6px solid #64748b'
      }}
    >
      <div style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '6px' }}>
        {title}
      </div>

      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.name}`}
          style={{ 
            top: `${(index + 1) * (100 / (inputs.length + 1))}%`, 
            background: '#ffffff', 
            width: '10px', 
            height: '10px', 
            border: '2px solid #64748b',
            left: '-6px'
          }}
        />
      ))}

      <div style={{ width: '100%' }}>
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.name}`}
          style={{ 
            top: `${(index + 1) * (100 / (outputs.length + 1))}%`, 
            background: '#ffffff', 
            width: '10px', 
            height: '10px', 
            border: '2px solid #64748b',
            right: '-6px'
          }}
        />
      ))}
    </motion.div>
  );
};