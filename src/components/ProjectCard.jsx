import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const ProjectCard = ({ project }) => {
    return (
        <Card
            sx={{ backgroundColor: 'var(--black)' }}
        >
            <CardContent 
                sx={{ 
                    color: 'var(--white)',
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <span>
                    <i className="fas fa-cube"></i> 0{project.num}
                </span>

                <Link 
                    to={`/more-project/${project.mainUsed.txt.toLowerCase().replace(/\s/g, '')}`}
                    className='link-hover'
                > 
                    {project.mainUsed.icon} 
                </Link>
            </CardContent>

            <CardActionArea>
                <Link to={`/project-detail/${project.num}`}>
                    <Box>
                        <CardMedia
                            component='img'
                            src={project.img}
                            alt={project.name}  
                        />
                    </Box>
                </Link>
            </CardActionArea>

            <CardContent
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: '16px !important'
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <a href={project.repo} target='_blank' className='icon-btn link-hover'>
                        <i className="fab fa-github"></i>
                    </a>

                    <a href={project.demo} target='_blank' className='icon-btn link-hover'>
                        <i className="fas fa-link"></i>
                    </a>
                </Box>
                
                <Link to={`/project-detail/${project.num}`} className='link-hover'>More</Link>
            </CardContent>
        </Card>
    )
}

export default ProjectCard;