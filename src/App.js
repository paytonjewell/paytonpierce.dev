import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import {Box, createTheme, Link, Stack, Switch, ThemeProvider, Typography} from "@mui/material";
import CurvedText from "./components/CurvedText";
import {GitHub, LinkedIn} from "@mui/icons-material";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
       if (localStorage.darkMode === 'true') {
           setDarkMode(true)
       } else {
           setDarkMode(false)
       }
    }, [localStorage.darkMode])

    const onToggleDarkMode = () => {
        let internalDarkMode = !darkMode;
        setDarkMode(!darkMode)
        localStorage.setItem('darkMode', `${internalDarkMode}`)
    }

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        }
    })

    return (
       <ThemeProvider theme={theme}>
           <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} minHeight={'100vh'}>
               <CssBaseline/>
               <CurvedText text={"Hi there, I'm Payton Pierce."} objectSize={300} overlap={true} spacing={20} offset={50} />
               <img src={'/img/behindComputer.png'} width={300}/>
               <Stack gap={2} mt={2} textAlign={'center'}>
                   <Typography fontWeight={'bold'}>💼 react dev @ <Link href={'https://mathisonprojectsinc.com'} target={'blank'} color={theme.palette.mode === 'dark' ? '#fff' : '#000'}>mathison projects</Link></Typography>
                   <Typography fontWeight={'bold'}>🧀 wisconsin</Typography>
                   <Link href={'/img/Resume.pdf'} target={'blank'} color={theme.palette.mode === 'dark' ? '#fff' : '#000'}><Typography fontWeight={'bold'}>👩🏻‍💻 résumé</Typography></Link>
                   <Stack direction={'row'} justifyContent={'center'} gap={2}>
                       <Link href={'https://github.com/paytonjewell'} target={'_blank'}><GitHub fontSize={'large'} color={'action'} /></Link>
                       <Link href={'https://www.linkedin.com/in/payton-pierce/'} target={'_blank'}><LinkedIn color={'action'} fontSize={'large'} /></Link>
                   </Stack>
               </Stack>
               <Box position={'absolute'} top={5} right={10} display={'flex'} alignItems={'center'}>
                   <Switch checked={darkMode} color={'secondary'} onChange={onToggleDarkMode} />{!darkMode ? '🌞' : '🌚'}
               </Box>
           </Stack>
       </ThemeProvider>
    );
}


export default App;
