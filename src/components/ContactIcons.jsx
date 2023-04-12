import React from 'react';
import { Box, Stack } from '@mui/material';

import { contacts } from '../utils/constants'

const ContactIcons = () => {
    return (
        <Stack
            alignItems='center'
            sx={{
                backgroundColor: 'var(--btn)',
                p: '13px',
                borderRadius: '13px',
                position: 'fixed',
                right: '13px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 200
            }}
        >
            {
                contacts.map((contact, idx) => (
                    contact.show && (
                        <Box 
                            key={contact.txt}
                            style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center'
                            }}
                        >
                            <a href={contact.link} target='_blank' className='btn link-hover' style={{ fontSize: '13px' }}>
                                {contact.icon}
                            </a>
    
                            {
                                contacts[idx + 1] && contacts[idx + 1].show && (
                                    <span
                                        style={{
                                            width: '2px', height: '10px',
                                            backgroundColor: 'var(--white-non-active)',
                                            borderRadius: '1.5px',
                                            margin: '5px 0'
                                        }}
                                    />
                                )
                            }
                        </Box>
                    )
                ))
            }
        </Stack>
    )
}

export default ContactIcons