import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { Box, Stack, Typography } from '@mui/material';

import { projects } from '../utils/constants';

const styles = {
    linkBtn: {
        backgroundColor: 'var(--btn)',
        fontSize: '15px',

        padding: '5px 10px',
        borderRadius: '5px',
    },

    chBtn: {
        width: '120px',
        height: '40px',

        backgroundColor: 'var(--primary)',
        color: 'var(--black)',

        fontSize: '18px',
        fontWeight: 700,
    }
}

const ProjectDetail = () => {
    const { id } = useParams();
    let numId = Number(id);

    const navigate = useNavigate();
    const location = useLocation();
    
    const [ filterProject ] = projects.filter(project => ( project.num === numId ));
    const curIdx = projects.findIndex(project => ( project.num === numId ));

    const chUrl = () => {
        const url = location.state?.url;
        navigate(url ? url : '/');
    }

    const chId = (sign) => {
        if(sign === +1) numId++;
        if(sign === -1) numId--;
        navigate(`/project-detail/${numId}`, { state: {url: location.state?.url} });
    }

    return (
        <Box>
            <Stack 
                px={{ xs: 3, md: 5 }} py='10px'
                direction='row' justifyContent='space-between' alignItems='center'
                sx={{ position: 'fixed', left: 0, right: 0, top: '10vh' }}
            >
                <button className='btn link-hover' style={{ fontSize: '15px', padding: '5px' }} onClick={chUrl}>
                    <i className="fa-solid fa-chevron-left"></i> <span>Back</span>
                </button>

                <span
                    style={{
                        backgroundColor: 'var(--body-non-active)', color: 'var(--primary)', 
                        fontSize: '15px', fontWeight: 700,
                        letterSpacing: 1.5, whiteSpace: 'nowrap',

                        padding: '3px',
                        border: 'solid var(--primary)', borderWidth: '2px 0'
                    }}
                >
                    {id.padStart(2, '0')}
                </span>
            </Stack>

            <Box px='20px' py='80px' sx={{ backgroundColor: 'var(--body-non-active)', minHeight: '90vh' }}>
                <Stack gap={6}>
                    <Stack alignItems='center' gap={2}>
                        <Box width={{ xs: '90%', sm: '400px' }}>
                            <img src={filterProject.img} width='100%' style={{ borderRadius: '5px' }}/>
                        </Box>

                        <Stack direction='row' gap={1}>
                            {
                                Object.keys(filterProject.links).map(linkName => {
                                    const linkObj = filterProject.links[linkName];

                                    return (
                                        <a key={linkName} href={linkObj.link} className='btn link-hover' style={{ ...styles.linkBtn }}>
                                            {linkName} {linkObj.icon}
                                        </a>
                                    )
                                })
                            }
                        </Stack>
                    </Stack>
                    
                    <Stack 
                        gap='30px' mx='auto'
                        sx={{ width: { xs: '100%', sm: '70%', md: '50%' }}}
                    >
                        {
                            Object.keys(filterProject.details).map(key => (
                                <Stack key={key} gap='2.5px'>
                                    <Typography sx={{ color: 'var(--primary)', textTransform: 'capitalize' }}>{key}:</Typography>

                                    <Typography
                                        variant='h6' 
                                        sx={{ color: 'var(--white)', textAlign: 'justify', lineHeight: 2 }}
                                        dangerouslySetInnerHTML={{ __html: filterProject.details[key] }}
                                    />
                                </Stack>
                            ))
                        }
                    </Stack> 
                </Stack>
            </Box>

            <Stack direction='row' gap='5px' sx={{ position: 'fixed', right: 0, bottom: 0 }}>
                <button 
                    className='btn' 
                    style={{ 
                        ...styles.chBtn,
                        display: curIdx <= 0 ? 'none' : 'flex'
                    }} 
                    onClick={() => chId(-1)}
                > 
                    <i className='bx bx-arrow-to-left'></i> <span>Prev PJ</span>
                </button>

                <button 
                    className='btn' 
                    style={{ 
                        ...styles.chBtn,
                        display: curIdx >= projects.length - 1 ? 'none' : 'flex'
                    }} 
                    onClick={() => chId(+1)}
                > 
                    <span>Next PJ</span> <i className='bx bx-arrow-to-right'></i> 
                </button>
            </Stack>
        </Box>
    )
}

export default ProjectDetail;