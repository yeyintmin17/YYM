import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, MainPage, MorePjs, PjDetail } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <Box>
                <Navbar/>

                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/more-pjs' element={<MorePjs/>}/>
                    <Route path='/pj-detail/:id' element={<PjDetail/>}/>
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App;