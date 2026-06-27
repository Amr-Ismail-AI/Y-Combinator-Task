// textNode.js

import { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { motion } from 'framer-motion';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2, boxShadow: '0 12px 20px -5px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.2 }}
      style={{ 
        minWidth: '220px', 
        width: '240px',
        height: 'auto',
        minHeight: '100px',
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
        📝 Text
      </div>

      <textarea 
        ref={textareaRef}
        value={currText} 
        onChange={(e) => setCurrText(e.target.value)} 
        style={{
          width: '100%', 
          height: 'auto',
          boxSizing: 'border-box',
          resize: 'none',
          overflowY: 'hidden',
          padding: '8px 10px',        
          fontSize: '12px',           
          fontFamily: 'inherit',
          color: '#334155',          
          backgroundColor: '#f8fafc',
          border: '1px solid #cbd5e1',
          borderRadius: '6px',        
          outline: 'none',
          marginTop: '4px',
          transition: 'border-color 0.2s',
        }}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ 
          top: '24px',
          transform: 'translateY(-50%)',
          background: '#ffffff', 
          width: '10px', 
          height: '10px', 
          border: '2px solid #64748b',
          right: '-6px'
        }} 
      />
    </motion.div>
  );
}