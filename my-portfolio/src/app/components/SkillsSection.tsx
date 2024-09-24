import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import SkillCard from './SkillCard'
import { Icon } from '@iconify/react'

const iconStyle = { fontSize: '30px'};

const SkillsSection: React.FC = () => (
  <Box padding="2rem">
    <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '32px', color: '#f3f4f6' }}>Skills & Expertise</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <SkillCard 
          icon={<Icon icon="simple-icons:lang" style={iconStyle} />}
          title="Languages"
          skills={[
            { name: "Golang", icon: <Icon icon="simple-icons:go" style={iconStyle} /> },
            { name: "TypeScript", icon: <Icon icon="simple-icons:typescript" style={iconStyle} /> },
            { name: "Java", icon: <Icon icon="simple-icons:oracle" style={iconStyle} /> },
            { name: "Python", icon: <Icon icon="simple-icons:python" style={iconStyle} /> },
            { name: "Dart", icon: <Icon icon="simple-icons:dart" style={iconStyle} /> },
            { name: "C/C++", icon: <Icon icon="simple-icons:cplusplus" style={iconStyle} /> }
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SkillCard 
          icon={<Icon icon="simple-icons:cloud" style={iconStyle} />}
          title="Cloud and DevOps"
          skills={[
            { name: "AWS", icon: <Icon icon="simple-icons:amazonaws" style={iconStyle} /> },
            { name: "GCP", icon: <Icon icon="simple-icons:googlecloud" style={iconStyle} /> },
            { name: "Jenkins", icon: <Icon icon="simple-icons:jenkins" style={iconStyle} /> },
            { name: "Terraform", icon: <Icon icon="simple-icons:terraform" style={iconStyle} /> },
            { name: "Docker", icon: <Icon icon="simple-icons:docker" style={iconStyle} /> },
            { name: "GitHub Actions", icon: <Icon icon="simple-icons:githubactions" style={iconStyle} /> },
            { name: "Kubernetes", icon: <Icon icon="simple-icons:kubernetes" style={iconStyle} /> },
            { name: "ArgoCD", icon: <Icon icon="simple-icons:argo" style={iconStyle} /> }
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SkillCard 
          icon={<Icon icon="simple-icons:frameworks" style={iconStyle} />}
          title="Development & Frameworks"
          skills={[
            { name: "NextJS", icon: <Icon icon="simple-icons:nextdotjs" style={iconStyle} /> },
            { name: "MERN", icon: <>
              {/* <Icon icon="simple-icons:mongodb" style={iconStyle} /> */}
              {/* <Icon icon="simple-icons:express" style={iconStyle} /> */}
              <Icon icon="simple-icons:react" style={iconStyle} />
              {/* <Icon icon="simple-icons:nodedotjs" style={iconStyle} /> */}
            </> },
            { name: "Android Studio", icon: <Icon icon="simple-icons:androidstudio" style={iconStyle} /> },
            { name: "Linux", icon: <Icon icon="simple-icons:linux" style={iconStyle} /> }
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SkillCard 
          icon={<Icon icon="simple-icons:database" style={iconStyle} />}
          title="Databases & ORM"
          skills={[
            { name: "SQL", icon: <Icon icon="simple-icons:mysql" style={iconStyle} /> },
            { name: "Neo4j", icon: <Icon icon="simple-icons:neo4j" style={iconStyle} /> },
            { name: "MongoDB", icon: <Icon icon="simple-icons:mongodb" style={iconStyle} /> },
            { name: "Prisma", icon: <Icon icon="simple-icons:prisma" style={iconStyle} /> },
            { name: "GORM", icon: <Icon icon="simple-icons:go" style={iconStyle} /> }
          ]}
        />
      </Grid>
    </Grid>
  </Box>
)

export default SkillsSection