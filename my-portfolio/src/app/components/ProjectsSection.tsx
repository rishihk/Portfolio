import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ProjectCard from './ProjectCard'

const ProjectsSection: React.FC = () => (
  <Box padding="2rem">
    <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '32px', color: '#f3f4f6' }}>Featured Projects</Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={4}>
        <ProjectCard 
          title="SwipeHire"
          description="Led the front-end development of a swipe-based job portal app which reduces job application time by ~80%. Implemented swipe algorithms, chat WebSocket's and a CI/CD Pipeline on GitLab."
          techStack={["Java", "Kotlin", "Android Studio"]}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProjectCard 
          title="Image Forum Application"
          description="Developed an image forum website where users can upload/download/search/categorize images. Hosted app on EC2, used RDS for data storage, S3 for image storage, and then migrated the site to GCP."
          techStack={["Python", "Flask", "AWS", "GCP"]}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProjectCard 
          title="StyleQuest"
          description="Developed an e-commerce website featuring a unique UI of avatar-based navigations. Added payment, delivery, and cart features, and a REST API for admin product management."
          techStack={["MERN"]}
        />
      </Grid>
    </Grid>
  </Box>
)

export default ProjectsSection