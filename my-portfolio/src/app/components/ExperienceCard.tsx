import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  techStack: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, achievements, techStack }) => (
  <Card style={{ overflow: 'hidden', backgroundColor: '#1f2937', borderColor: '#374151', marginBottom: '24px' }}>
    <CardContent style={{ padding: '24px' }}>
      <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '8px', color: '#f3f4f6' }}>{company}</Typography>
      <Typography variant="h6" style={{ fontWeight: 'semibold', marginBottom: '4px', color: '#d1d5db' }}>{role}</Typography>
      <Typography variant="body2" style={{ marginBottom: '16px', color: '#9ca3af' }}>{period}</Typography>
      <Box component="ul" style={{ paddingLeft: '20px', color: '#d1d5db', margin: 0 }}>
        {achievements.map((achievement, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            <Typography variant="body2" style={{ color: '#d1d5db' }}>{achievement}</Typography>
          </li>
        ))}
      </Box>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
        {techStack.map((tech, index) => (
          <span key={index} style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            backgroundColor: '#374151', 
            color: '#f3f4f6', 
            padding: '4px 8px', 
            borderRadius: '9999px', 
            fontSize: '0.875rem'
          }}>
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
)

export default ExperienceCard