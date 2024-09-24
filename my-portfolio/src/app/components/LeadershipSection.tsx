import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'

const LeadershipSection: React.FC = () => (
  <Box padding="2rem">
    <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '32px', color: '#f3f4f6', textAlign: 'center' }}>
      Leadership & Volunteering
    </Typography>
    <Card style={{ backgroundColor: '#1f2937', borderColor: '#374151' }}>
      <CardContent style={{ padding: '24px' }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '16px', color: '#d1d5db' }}>ISSO Orientation Leader</li>
          <li style={{ marginBottom: '16px', color: '#d1d5db' }}>Food at First Volunteer</li>
          <li style={{ marginBottom: '16px', color: '#d1d5db' }}>Asian Network Leader</li>
          <li style={{ color: '#d1d5db' }}>High School Soccer Team Captain</li>
        </ul>
      </CardContent>
    </Card>
  </Box>
)

export default LeadershipSection