import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const ProjectCard = ({ project, url }) => {
    return (
        <Card sx={{ backgroundColor: 'var(--black)' }} >
            <CardContent 
                sx={{ 
                    color: 'var(--white)',
                    fontSize: '20px', fontWeight: 600, letterSpacing: 1.5,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}
            >
                <span>
                    <i className="fa-solid fa-cube"></i> {project.num.toString().padStart(2, '0')}
                </span>

                <Link 
                    to={`/more-projects/${project.mainUsed.txt.toLowerCase().replace(/\s/g, '')}`}
                    className='link-hover'
                > 
                    {project.mainUsed.icon} 
                </Link>
            </CardContent>

            <CardActionArea>
                <Link to={`/project-detail/${project.num}`} state={{ url }}>
                    <Box>
                        <CardMedia component='img' src={project.img} alt={project.details.name}/>
                    </Box>
                </Link>
            </CardActionArea>

            <CardContent
                sx={{ 
                    p: '16px !important',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}
            >
                <Box 
                    sx={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                    }}
                >
                    {
                        Object.keys(project.links).map(linkName => {
                            const linkObj = project.links[linkName];
                            
                            return(
                                <a key={linkName} href={linkObj.link} target='_blank' className='btn icon-btn link-hover'>
                                    {linkObj.icon}
                                </a>
                            )
                        })
                    }
                </Box>
                
                <Link to={`/project-detail/${project.num}`} state={{ url }} className='link-hover'>More</Link>
            </CardContent>
        </Card>
    )
}

export default ProjectCard;