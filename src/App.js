import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box, IconButton, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Navbar, MainPage, MoreProjects, ProjectDetail } from './components';

const theme = createTheme({
    palette: {
        primary: {
            main: '#B9ED64',
        }
    },

    typography: {
        fontFamily: [
            'Kanit',
            'sans-serif'
        ].join(','),
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none !important'
                }
            }
        },

        MuiIconButton: {
            styleOverrides: {
                root: {
                    width: '40px',
                    height: '40px',
                    fontSize: '20px',
                    backgroundColor: '#252525',
                }
            }
        }
    }
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <BrowserRouter>
                <Box>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/more-projects/:categories' element={<MoreProjects/>}/>
                        <Route path='/project-detail/:id' element={<ProjectDetail/>}/>
                    </Routes>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;