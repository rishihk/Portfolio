import React from 'react';
import { motion } from 'framer-motion';
import { Button, Typography } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import ParticleBackground from './ParticleBackground'; // Make sure this path is correct

const Header: React.FC = () => (
  <header style={{ 
    padding: '24px 48px', 
    position: 'sticky', 
    top: 0, 
    zIndex: 10,
    overflow: 'hidden' // To ensure particles don't overflow
  }}>
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      zIndex: -1 // Place particles behind the content
    }}>
      <ParticleBackground />
    </div>
    <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" style={{ fontWeight: 'bold', marginBottom: '8px', color: '#f3f4f6' }}>
            Hrishikesha Kyathsandra
          </Typography>
          <Typography variant="h5" style={{ color: '#9ca3af' }}>
            Software Engineer
          </Typography>
        </motion.div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button 
            variant="outlined" 
            style={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', color: '#f3f4f6', borderColor: '#374151' }}
            onClick={() => window.location.href = 'mailto:hk.hrishi30@gmail.com'}
          >
            <Mail style={{ width: '16px', height: '16px' }} />
            <span className="sr-only">Email</span>
          </Button>
          <Button 
            variant="outlined" 
            style={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', color: '#f3f4f6', borderColor: '#374151' }}
            onClick={() => window.open('https://www.linkedin.com/in/hrishikesha-kyathsandra-1510ab21a/', '_blank')}
          >
            <LinkedIn style={{ width: '16px', height: '16px' }} />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button 
            variant="outlined" 
            style={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', color: '#f3f4f6', borderColor: '#374151' }}
            onClick={() => window.open('https://github.com/rishihk', '_blank')}
          >
            <GitHub style={{ width: '16px', height: '16px' }} />
            <span className="sr-only">GitHub</span>
          </Button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;