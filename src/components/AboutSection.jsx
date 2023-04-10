import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { SectionTitle } from './';

import { aboutMe } from '../utils/constants';
import profile from '../assets/img/profile/pro2.jpg';

const AboutSection = ({ num, backgroundColor, py }) => {
    return (
        <Box id='about-section' className='section' py={py} sx={{ backgroundColor }}>
            <SectionTitle 
                title='about'  
                num={num} 
                top={py * 8 / 2}
                numColor='var(--primary)'
                titleColor='var(--white-non-active)'
                subtitleColor='var(--white)'
            />

            <Stack spacing={5} justifyContent='center' alignItems='center'>
                <Box
                    sx={{
                        width: { xs: 200, md: 250 },
                        height: { xs: 200, md: 250 },
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            width: '100%',
                            height: '100%',
                            border: '3px solid var(--white-non-active)',

                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                        }
                    }}
                >
                    <img 
                        src={profile} alt='Profile' 
                        width='100%' height='100%' 
                        style={{
                            objectFit: 'cover',
                            position: 'relative',
                            zIndex: 1
                        }}
                    />
                </Box>

                <Typography
                    variant='h5'
                    dangerouslySetInnerHTML={{ __html: aboutMe.txt }}
                    sx={{ 
                        width: { xs: '90%', sm: '70%', lg: '50%' }, 
                        color: 'var(--white)', 
                        textAlign: 'center', 
                        lineHeight: 1.5,
                        letterSpacing: 1.5
                    }}
                />
            </Stack>
        </Box>
    )
}

export default AboutSection