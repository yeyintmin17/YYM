import React, { useState, useEffect } from 'react';
import { Box, Stack, IconButton } from '@mui/material';

import { navLinks } from '../utils/constants';

const NavbarNav = () => {
    const [ navTxt, setNavTxt ] = useState('home');
    const [ collapsed, setCollapsed ] = useState(true);

    const handleCollapsed = () => {
        window.innerWidth < 900 ? setCollapsed(true) : setCollapsed(false);
    }
    window.addEventListener('resize', handleCollapsed);

    const chNavLink = () => {
        const navTxts = document.querySelectorAll('.nav-txt');
        const targetTxt = [...navTxts].find(val => val.innerText.toLowerCase() === navTxt);

        const targetEle = targetTxt.parentElement;
        const targetEleHeight = targetEle.getBoundingClientRect().height;
        const targetEleLeft =  targetEle.offsetLeft;
        const targetEleTop =  targetEle.offsetTop;

        const fixedTop = targetEleTop + ( targetEleHeight / 2);

        const navPointer = document.querySelector('.nav-pointer');
        Object.assign(navPointer.style, {
            left: targetEleLeft + 'px',
            top: fixedTop + 'px'
        });
    }

    useEffect(() => {
        handleCollapsed();

        const hash = window.location.hash;
        if(hash.includes('#')){
            setNavTxt(hash.substring(1, hash.indexOf('-')))
        }
    }, []);

    useEffect(() => chNavLink(), [navTxt, collapsed]);

    return (
        <Box>
            <IconButton 
                sx={{ 
                    width: 40, height: 40,
                    backgroundColor: 'var(--btn)', color: 'var(--primary)', 
                    fontSize: 20,
                    display: { sx: 'block', md: 'none' },

                    position: 'relative', zIndex: 300
                }}
                onClick={() => setCollapsed(!collapsed)}
            >
                { 
                    collapsed 
                        ? <i className="fas fa-hamburger"></i>
                        : <i className="fa-solid fa-xmark"></i>         
                }
            </IconButton>

            <Box 
                className='navbar-nav'
                sx={{ display: collapsed ? 'none' : 'block' }}
            >
                <Stack direction={{ md: 'row', xs: 'column'}} spacing={2}>
                    {
                        navLinks.map(val => (
                            <a
                                href={"/#" + val.title + "-section"} 
                                key={val.title} 

                                className='nav-link' 
                                style={{ 
                                    color: val.title === navTxt ? 'var(--primary)' : 'var(--white-non-active)',
                                    opacity: val.title === navTxt ? 1 : 0.8
                                }}

                                onClick={() => setNavTxt(val.title)}
                            >
                                {val.icon} <span className='nav-txt'>{val.title}</span>
                            </a>
                        ))
                    }
                </Stack>

                <span className='nav-pointer'/>
            </Box>
        </Box>
    )
}

export default NavbarNav;