import React from 'react';

import { Box, Stack, Typography, Divider } from '@mui/material';

import { SectionTitle } from './';
import { contacts } from '../utils/constants';

const ContactSection = ({ num, backgroundColor, py }) => {
    return (
        <Box id='contact-section' className='section' py={py} sx={{ backgroundColor }}>
            <SectionTitle 
                title='contact'  
                num={num} 
                top={py * 8 / 2}
                numColor='var(--body)'
                titleColor='var(--black-non-active)'
                subtitleColor='var(--black)'
            />

            <Stack alignItems='center'>
                <Box sx={{ color: 'var(--black)' }}>
                    <Stack alignItems='center' gap={2} >
                        {
                            contacts.map(contact => (
                                contact.show && (
                                    <Typography 
                                        key={contact.txt} 
                                        sx={{ transition: 'letter-spacing 0.15s linear', '&:hover': {letterSpacing: '1px'} }} 
                                    >
                                        <a 
                                            href={contact.link} target='_blank'
                                            style={{ 
                                                color: 'inherit', 
                                                fontSize: '18px', fontWeight: 700, textDecoration: 'none',
                                                display: 'flex', alignItems: 'center', gap: '8px'
                                            }}
                                        >
                                            {contact.icon} <span> {contact.txt} </span>
                                        </a>
                                    </Typography>
                                )
                            ))
                        }
                    </Stack>

                    <Divider sx={{ backgroundColor: 'var(--body)', my: 4 }}/>

                    <Typography sx={{ textAlign: 'center', fontWeight: 600 }} >
                        <i className="fas fa-copyright"></i> {new Date().getUTCFullYear()} Copyright, Inc. All rights reserved.
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default ContactSection;