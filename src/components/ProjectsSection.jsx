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
            
            <Box width='90%' mx='auto'>
                <Grid container spacing={4}>
                    {
                        projects.map(project => (         
                            project.show && (
                                <Grid key={project.name} item xs={12} sm={6}>
                                    <ProjectCard project={project}/>
                                </Grid>
                            )   
                        ))
                    }
                </Grid>
            </Box>

            <Box mt={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to='/more-projects/all' className='btn normal-btn'>More Projects</Link>
            </Box>
        </Box>
    )
}

export default ProjectsSection;