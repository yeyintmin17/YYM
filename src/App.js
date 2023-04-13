import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Navbar, MainPage, MoreProjects, ProjectDetail } from './components';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Kanit',
            'sans-serif'
        ].join(','),
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <BrowserRouter>
                <Box>
                    <Navbar nav={true} mainBtn={false}/>

                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/more-projects/:category' element={<MoreProjects/>}/>
                        <Route path='/project-detail/:id' element={<ProjectDetail/>}/>
                    </Routes>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;