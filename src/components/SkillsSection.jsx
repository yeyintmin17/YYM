import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Grid, Typography } from '@mui/material';

import { SectionTitle } from './';
import { skills } from '../utils/constants';

const SkillsSection = ({ num, backgroundColor, py }) => {
    return (
        <Box id='skills-section' className='section' py={py} sx={{ backgroundColor }}>
            <SectionTitle 
                title='skills' 
                num={num} 
                top={py * 8 / 2}
                numColor='var(--primary)' 
                titleColor='var(--white-non-active)'
                subtitleColor='var(--white)'
            /> 
            
            <Box width={{ xs: '95%', md: '70%', lg: '50%' }} mx='auto' sx={{ textAlign: 'center' }}>
                <Grid container rowGap={3}>
                    {
                        skills.map(skill => {
                            let fixedSkill = skill.name.toLowerCase().replace(/\s/g, '');
                            fixedSkill = (fixedSkill === 'html' || fixedSkill === 'css') ? 'all' : fixedSkill;

                            return (
                                <Grid key={skill.name} item xs={3}>
                                    <Link 
                                        to={skill.link && `/more-projects/${fixedSkill}`}
                                        style={{ 
                                            textDecoration: 'none', 
                                            cursor: !skill.link && 'default' 
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: 'var(--white)',
                                                display: 'flex', flexDirection: 'column',
                                                justifyContent: 'center', alignItems: 'center',
                                                '&:hover': { color: skill.link && 'var(--primary)' }
                                            }}
                                        >
                                            <span style={{ fontSize: 40 }}>{skill.icon}</span>
                                            <span style={{ fontSize: 10, letterSpacing: 1.5 }}>{skill.name}</span> 
                                        </Typography>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default SkillsSection;