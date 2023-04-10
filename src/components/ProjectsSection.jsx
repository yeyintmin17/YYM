import React from 'react';
import { Box } from '@mui/material';

import { SectionTitle } from './';

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
            
        </Box>
    )
}

export default ProjectsSection;