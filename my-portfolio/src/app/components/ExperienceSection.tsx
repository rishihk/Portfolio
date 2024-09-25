import React from 'react'
import { Typography, Box } from '@mui/material'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    company: "John Deere Financial",
    role: "Software Engineer Intern + Part Time",
    period: "May 2023 – Present",
    achievements: [
      "Developed full-stack features and resolved bugs for an app used by 470+ managers to manage 2000+ employees.",
      "Created GitHub Actions and workflows to automate resetting employee statuses for auditing.",
      "Designed a Jenkins pipeline to deploy AWS infrastructure and log S3 bucket changes to CloudWatch.",
      "Migrated several functions from the application to a serverless architecture using AWS Lambda and API Gateway.",
      "Automated S3 data cleanup and AWS Lambda function deployment processes.",
      "Interacted with databases, worked on code migrations, refactored React components, and practiced TDD."
    ],
    techStack: ["NextJS", "TypeScript", "React", "SQL", "Prisma", "Terraform", "Jenkins", "Docker", "AWS"]
  },
  {
    company: "General Mills",
    role: "Platform Engineering Intern",
    period: "May 2024 – August 2024",
    achievements: [
      "Built an application for centralized domain management saving the business up to $32-64k/year.",
      "Automated domain auditing via API integrations reducing a month's long process to a week.",
      "Designed a database and implemented a system to identify and decommission unused domains.",
      "Enhanced domain security protecting the company from domain hijacks.",
      "Deployed application to Kubernetes cluster."
    ],
    techStack: ["Golang", "React", "TypeScript", "Terraform", "Docker", "SQL", "GORM", "GitHub Actions", "GCP", "Kubernetes", "HCVault", "ArgoCD"]
  },
  {
    company: "Iowa State University - Department of CS",
    role: "Computer Science and Math Tutor",
    period: "Jan 2022 – May 2023",
    achievements: [
      "Tutored college students in Python, OOP, DSA, DBMS and Advanced Calculus.",
      "Led multiple batches and helped increase grade average by 10-15%."
    ],
    techStack: ["Python", "OOP", "DSA", "DBMS"]
  }
]

const ExperienceSection: React.FC = () => (
  <Box padding="2rem">
    <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '32px', color: '#f3f4f6', textAlign: 'center' }}>Professional Experience</Typography>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {experiences.map((exp, index) => (
        <ExperienceCard 
          key={index}
          company={exp.company}
          role={exp.role}
          period={exp.period}
          achievements={exp.achievements}
          techStack={exp.techStack}
        />
      ))}
    </div>
  </Box>
)

export default ExperienceSection