import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'

const AboutSection: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="calc(100vh - 200px)"
    padding="2rem"
  >
    <Card
      style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: '#1f2937',
        borderColor: '#374151',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent style={{ padding: '32px' }}>
        <Typography
          variant="h4"
          style={{
            fontWeight: 'bold',
            marginBottom: '24px',
            color: '#f3f4f6',
            textAlign: 'center',
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: '16px', color: '#d1d5db', lineHeight: 1.6 }}
        >
          I&apos;m a passionate software engineer with a strong foundation in computer science and
          a track record of successful internships. My expertise spans full-stack development,
          cloud technologies, and DevOps practices.
        </Typography>
        <Typography variant="body1" style={{ color: '#d1d5db', lineHeight: 1.6 }}>
          I'm constantly seeking new challenges and opportunities to innovate in the tech
          world. I make sure to stay upto date with all the new innovations in the field. When I'm not coding, you can find
          me playing soccer, basketball, tennis, pickleball, table tennis, or just about any sport.
        </Typography>
      </CardContent>
    </Card>
  </Box>
)

export default AboutSection
