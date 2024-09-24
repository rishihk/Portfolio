import React, { ReactNode } from 'react'
import { 
  Language, Javascript, Coffee, Terminal, Memory, Cloud, DataObject, 
  Monitor, Code, AutoAwesome, Storage, Inventory, Layers
} from '@mui/icons-material'

interface TechIconProps {
  name: string;
  horizontal?: boolean;
}

const TechIcon: React.FC<TechIconProps> = ({ name, horizontal = false }) => {
  const iconMap: { [key: string]: ReactNode } = {
    "Golang": <Language />,
    "TypeScript": <Javascript />,
    "Java": <Coffee />,
    "Python": <Terminal />,
    "Dart": <Language />,
    "C/C++": <Memory />,
    "AWS": <Cloud />,
    "GCP": <Cloud />,
    "Jenkins": <AutoAwesome />,
    "Terraform": <Layers />,
    "Docker": <Inventory />,
    "Kubernetes": <Layers />,
    "ArgoCD": <AutoAwesome />,
    "SQL": <DataObject />,
    "Neo4j": <DataObject />,
    "MongoDB": <DataObject />,
    "Prisma": <DataObject />,
    "GORM": <DataObject />,
    "NextJS": <Monitor />,
    "React": <Code />,
    "GitHub Actions": <AutoAwesome />,
    "HCVault": <Storage />,
    "Android Studio": <Monitor />,
    "Linux": <Terminal />,
    "MERN": <DataObject />,
  }

  return (
    <span style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      backgroundColor: '#374151', 
      color: '#f3f4f6', 
      padding: '4px 8px', 
      borderRadius: '9999px', 
      fontSize: '0.875rem',
      width: horizontal ? 'auto' : '100%',
      marginBottom: horizontal ? '0' : '8px'
    }}>
      {iconMap[name] || <Code />}
      <span style={{ marginLeft: '4px' }}>{name}</span>
    </span>
  )
}

export default TechIcon