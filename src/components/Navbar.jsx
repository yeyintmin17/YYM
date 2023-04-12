import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { NavbarNav } from './';

const Navbar = ({ nav }) => {
    return (
        <Stack 
            direction='row' justifyContent='space-between' alignItems='center' 
            px={{ md: 5, xs: 3 }} py={2}
            sx={{ height: '10vh', backgroundColor: 'var(--body)', userSelect: 'none', position: 'sticky', left: 0, top: 0, zIndex: 50 }}
        >
            <Link to='/'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src='./assets/logo/main_logo_2.svg' alt='Main Logo' />
                </Box>
            </Link>
            
            {nav && <NavbarNav/>}
        </Stack>
    )
}

export default Navbar;