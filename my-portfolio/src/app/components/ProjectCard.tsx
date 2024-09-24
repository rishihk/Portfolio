import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import TechIcon from './TechIcon'

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack }) => (
  <Card style={{ overflow: 'hidden', backgroundColor: '#1f2937', borderColor: '#374151' }}>
    <CardContent style={{ padding: '24px' }}>
      <Typography variant="h6" style={{ fontWeight: 'semibold', marginBottom: '8px', color: '#f3f4f6' }}>{title}</Typography>
      <Typography variant="body1" style={{ marginBottom: '16px', color: '#d1d5db' }}>{description}</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {techStack.map((tech, index) => (
          <TechIcon key={index} name={tech} horizontal={true} />
        ))}
      </div>
    </CardContent>
  </Card>
)

export default ProjectCard