import React, { useEffect } from 'react';
import { Box } from '@mui/material';

import { Navbar, HomeSection, AboutSection, SkillsSection, ProjectsSection, ContactSection } from './';

const MainPage = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if(hash.includes('#')){
            // document.querySelector(hash).scrollIntoView(true);
            window.location.href = window.location.href;
        }
    }, []);

    return (
        <Box>
            <Navbar nav={true} mainBtn={false}/>
            <HomeSection num={1} backgroundColor='var(--body)' py={12.5}/>
            <AboutSection num={2} backgroundColor='var(--body-non-active)' py={12.5}/>
            <SkillsSection num={3} backgroundColor='var(--body)' py={12.5}/>
            <ProjectsSection num={4} backgroundColor='var(--body-non-active)' py={12.5}/>
            <ContactSection num={5} backgroundColor='var(--primary)' py={12.5}/>
        </Box>
    )
}

export default MainPage;