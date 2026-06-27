// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { motion } from 'framer-motion';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

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
        borderTop: '6px solid #64748b',
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{ 
          top: '50%', 
          background: '#ffffff', 
          width: '10px', 
          height: '10px', 
          border: '2px solid #64748b',
          left: '-6px'
        }}
      />
      
      <div style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '6px' }}>
        📤 Output
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            style={fieldStyle}
          />
        </label>
        <label style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>
          Type:
          <select value={outputType} onChange={handleTypeChange} style={{ ...fieldStyle, cursor: 'pointer' }}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </motion.div>
  );
}