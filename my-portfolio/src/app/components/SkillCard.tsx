import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <Card style={{ height: '100%', backgroundColor: '#1f2937' }}>
    <CardContent>
      <Typography variant="h6" component="div" style={{ marginBottom: '16px', color: '#f3f4f6', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px', fontSize: '24px', display: 'flex' }}>{icon}</span>
        {title}
      </Typography>
      <List dense>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemIcon style={{ minWidth: '30px', display: 'flex', alignItems: 'center' }}>
              {skill.icon}
            </ListItemIcon>
            <ListItemText primary={skill.name} style={{ color: '#d1d5db', fontSize: '1.1rem', paddingLeft: '8px' }} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default SkillCard;