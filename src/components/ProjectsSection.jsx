import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

import { SectionTitle, ProjectCard } from './';
import { projects } from '../utils/constants';

const ProjectsSection = ({ num, backgroundColor, py }) => {
    return (
        <Box id='projects-section' className='section' py={py} sx={{ backgroundColor }}>
            <SectionTitle 
                title='projects' 
                num={num} 
                top={py * 8 / 2}
                numColor='var(--primary)' 
                titleColor='var(--white-non-active)'
                subtitleColor='var(--white)'
            />
            
            <Grid container width='90%' mx='auto' gap={4}>
                {
                    projects.map(project => (
                        <Grid key={project.name} item xs={12} md={6}>
                            <ProjectCard project={project}/>
                        </Grid>
                    ))
                }
            </Grid>

            <Box mt={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to='/more-projects/all' className='btn normal-btn'>More Projects</Link>
            </Box>
        </Box>
    )
}

export default ProjectsSection;