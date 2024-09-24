import React, { ReactNode } from 'react'

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <div style={{ backgroundColor: '#1e293b', color: '#f1f5f9', padding: '8px', borderRadius: '50%' }}>
    {children}
  </div>
)

export default IconWrapper