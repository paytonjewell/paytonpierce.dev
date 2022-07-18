import React from 'react';
import mock1 from '../../img/mock1.png';
import mock2 from '../../img/mock2.png';
import mock3 from '../../img/mock3.png';
import mock4 from '../../img/mock4.png';
import mock5 from "../../img/mock5.png";
import mock6 from "../../img/mock6.png"
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";

const projects = [
    {
        image: mock5,
        live: "https://paytonjewell.github.io/moviepedia/",
        source: "https://github.com/paytonjewell/moviepedia",
        title: "MoviePedia"
    },
    {
        image: mock1,
        live: "https://paytonjewell.github.io/ReactPortfolioTemplate/",
        source: "https://github.com/paytonjewell/ReactPortfolioTemplate",
        title: "React Portfolio Template"
    },
    {
        image: mock2,
        live: "https://paytonjewell.github.io/Analog-Clock-With-Darkmode-Toggle/",
        source: "https://github.com/paytonjewell/Analog-Clock-With-Darkmode-Toggle",
        title: "Clock w/ Dark Mode"
    },
    {
        image: mock3,
        live: "https://paytonjewell.github.io/To-Do-List/",
        source: "https://github.com/paytonjewell/To-Do-List",
        title: "To-Do List"
    },
    {
        image: mock4,
        live: "https://paytonjewell.github.io/gradient-generator/",
        source: "https://github.com/paytonjewell/gradient-generator",
        title: "Gradient Generator"
    },
    {
        image: mock6,
        live: "https://ztm-smart-brain-frontend.herokuapp.com/",
        title: "SmartBrain"
    }
]

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {projects.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};