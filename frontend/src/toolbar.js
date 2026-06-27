// toolbar.js
import { DraggableNode } from './draggableNode';
import { motion } from 'framer-motion';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '12px', 
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                    border: '1px solid #f1f5f9'
                }}
            >
                <DraggableNode type='customInput' label='📥Input' />
                <DraggableNode type='llm' label='🤖LLM' />
                <DraggableNode type='customOutput' label='📤Output' />
                <DraggableNode type='text' label='📝Text' />
                
                {/* New Nodes */}

                <DraggableNode type='email' label='✉️Email' />
                <DraggableNode type='database' label='💾Database' />
                <DraggableNode type='merge' label='🔗Merge' />
                <DraggableNode type='delay' label='⏱️Delay' />
                <DraggableNode type='condition' label='🔀If/Else' />
            </motion.div>
        </div>
    );
};