import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { RocketLaunch, Code, Work, Storage, School, EmojiEvents } from '@mui/icons-material'

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const menuItems: { id: string; icon: ReactNode; label: string }[] = [
    { id: 'about', icon: <RocketLaunch />, label: 'About' },
    { id: 'skills', icon: <Code />, label: 'Skills' },
    { id: 'experience', icon: <Work />, label: 'Experience' },
    { id: 'projects', icon: <Storage />, label: 'Projects' },
    { id: 'education', icon: <School />, label: 'Education' },
    { id: 'leadership', icon: <EmojiEvents />, label: 'Leadership' },
  ]

  return (
    <nav style={{ 
      position: 'sticky', 
      top: '96px', 
      backgroundColor: 'rgba(17, 24, 39, 0.8)', 
      backdropFilter: 'blur(8px)', 
      zIndex: 10, 
      padding: '16px 0',
      marginBottom: '20px'  // Add some margin to separate from content
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '16px', listStyle: 'none', padding: 0 }}>
          {menuItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant={activeSection === item.id ? "contained" : "text"}
                onClick={() => setActiveSection(item.id)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  backgroundColor: activeSection === item.id ? '#3b82f6' : 'transparent',
                  color: activeSection === item.id ? '#f3f4f6' : '#9ca3af'
                }}
              >
                {item.icon}
                <span style={{ marginLeft: '8px' }}>{item.label}</span>
              </Button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation