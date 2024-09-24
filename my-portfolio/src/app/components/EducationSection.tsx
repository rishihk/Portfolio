import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { School } from '@mui/icons-material'
import IconWrapper from './IconWrapper'

const EducationSection: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <Card style={{ width: '100%', maxWidth: '600px', backgroundColor: '#1f2937', borderColor: '#374151' }}>
      <CardContent style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <IconWrapper><School /></IconWrapper>
          <Typography variant="h5" style={{ fontWeight: 'bold', marginLeft: '12px', color: '#f3f4f6' }}>Iowa State University</Typography>
        </div>
        <Typography variant="h6" style={{ fontWeight: 'semibold', color: '#d1d5db' }}>Bachelor's in Computer Science</Typography>
        
        <Typography variant="body2" style={{ marginBottom: '16px', color: '#9ca3af' }}>Expected Graduation: December 2024</Typography>
        <div style={{ color: '#d1d5db' }}>
          <Typography variant="body1"><strong>Honors:</strong> Phi Beta Kappa Honor Society, Dean's List 2021-2024</Typography>
          <Typography variant="body1"><strong>Class Ranking:</strong> Top 2% of class</Typography>
          <Typography variant="body1"><strong>GPA:</strong> 4.00</Typography>
          <Typography variant="body1"><strong>Relevant Coursework:</strong> OOP, DSA, UI, DBMS, Software Development, Cloud Computing, OS, AI</Typography>
        </div>
      </CardContent>
    </Card>
  </div>
)

export default EducationSection