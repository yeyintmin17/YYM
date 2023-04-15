import React from 'react';
import { Box, Stack } from '@mui/material';

const CarouselControls = ({ carIdx, setCarIdx, carLength }) => {
    const chCarIdx = (sign) => {
        if(sign === +1) carIdx++;
        if(sign === -1) carIdx--;
        setCarIdx(carIdx);
    }

    const carNums = [];
    for(let i = 0; i < 6; i++){
        carNums.push(
            <button 
                key={i} className='btn icon-btn link-hover' 
                onClick={() => setCarIdx(i)}
                style={{ color: i === carIdx ? 'var(--primary)' : 'var(--white-non-active)' }}
            > 
                {i + 1} 
            </button>
        );
    }

    let tsIsPressed = false, tsStartX = 0;
    const tsStart = (e) => {
        tsIsPressed = true;
        tsStartX = e.clientX;
        e.currentTarget.style.cursor = 'grabbing';
    }

    const tsEnd = (e) => {
        tsIsPressed = false;
        e.currentTarget.style.cursor = 'grab';
    }

    const tsMove = (e) => {
        if(tsIsPressed){
            e.currentTarget.scrollLeft = tsStartX - e.clientX;
        }
    }

    return (
        <Stack direction='row' gap='5px' justifyContent='center'>
            <button className='btn icon-btn link-hover' onClick={() => chCarIdx(-1)} style={{ visibility: carIdx <= 0 ? 'hidden' : 'visible' }}>
                <i className="fa-solid fa-arrow-left-long"></i>
            </button>

            <Stack 
                direction='row' gap='5px' 
                className='car-nums-con' sx={{ width: '115px' }} 
                onMouseDown={tsStart}
                onMouseUp={tsEnd}
                onMouseLeave={tsEnd}
                onMouseMove={tsMove}
            >
                {carNums}
            </Stack>

            <button className='btn icon-btn link-hover' onClick={() => chCarIdx(+1)} style={{ visibility: carIdx >= carLength - 1 ? 'hidden' : 'visible' }}>
                <i className="fa-solid fa-arrow-right-long"></i>
            </button>
        </Stack>
    )
}

export default CarouselControls;