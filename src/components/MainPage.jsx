import React from 'react';
import { Box } from '@mui/material';

import { HomeSection, AboutSection, SkillsSection, ProjectsSection, ContactSection } from './';

const MainPage = () => {
    return (
        <Box>
            <HomeSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </Box>
    )
}

export default MainPage;