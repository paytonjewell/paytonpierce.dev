import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import {Link, Stack, Typography} from "@mui/material";
import CurvedText from "./components/CurvedText";
import {GitHub, LinkedIn} from "@mui/icons-material";

function App() {
    return (
        <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} minHeight={'100vh'}>
            <CssBaseline/>
            <CurvedText text={"Hi there, I'm Payton Pierce."} objectSize={300} overlap={true} spacing={20} offset={50} />
            <img src={'/img/behindComputer.png'} width={300}/>
            <Stack gap={2} mt={2} textAlign={'center'}>
                <Typography fontWeight={'bold'}>💼 react dev @ <Link href={'https://mathisonprojectsinc.com'} target={'blank'}>mathison projects</Link></Typography>
                <Typography fontWeight={'bold'}>🧀 wisconsin</Typography>
                <Typography fontWeight={'bold'}>👩🏻‍💻 jamstack &hearts;</Typography>
                <Stack direction={'row'} justifyContent={'center'} gap={2}>
                    <Link href={'https://github.com/paytonjewell'} target={'_blank'}><GitHub fontSize={'large'} color={'secondary'} /></Link>
                    <Link href={'https://www.linkedin.com/in/payton-pierce/'} target={'_blank'}><LinkedIn fontSize={'large'} color={'secondary'} /></Link>
                </Stack>
            </Stack>
        </Stack>
    );
}


export default App;
