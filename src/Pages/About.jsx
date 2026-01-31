import React from "react";
import {Box,Typography,Paper} from "@mui/material"
export default function About(){
  return(
    <Box sx={{display:"flex",minHeight:"100vh",justifyContent:"flex-start",alignItems:"flex-start"}}>
     <Paper sx={{
        width:1000,
        p:"2rem 2rem",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        flexDirection:"column",
     }}>
       <Typography variant="h6"  fontSize={20} sx={{fontWeight:"bold", mb:2,color:"darkslateblue"}}>ABOUT : </Typography>
       <Typography variant="body1" fontSize={20}>
        Hey! I’m Vineet Melavanki, a passionate computer science student and aspiring full-stack developer. My journey in tech began with curiosity and fascination for problem-solving, and over time, I’ve dived deep into C++, data structures, and web development, building projects that help me learn and grow.

Coding, for me, is more than just writing programs—it’s a way to create solutions, explore ideas, and bring concepts to life. I love tackling challenges, experimenting with new technologies, and continuously pushing the boundaries of what I can build.

Through this portfolio, I aim to showcase not only my projects but also my journey as a developer—highlighting the problems I’ve solved, the lessons I’ve learned, and the skills I’ve honed along the way. My goal is to keep learning, keep building, and make meaningful contributions to the tech community.
       </Typography>
     </Paper>
    </Box>
  );
}