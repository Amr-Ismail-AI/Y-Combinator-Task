// submit.js
import React from 'react';
import { motion } from 'framer-motion';

export const SubmitButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '12px 32px',
          fontSize: '15px',
          fontWeight: '700',
          color: '#ffffff',
          backgroundColor: '#4f46e5',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          boxShadow: '0 8px 15px rgba(79, 70, 229, 0.3)',
          transition: 'background-color 0.2s',
        }}
      >
        Submit
      </motion.button>
    </div>
  );
};