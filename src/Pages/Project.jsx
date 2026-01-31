import React from "react";
import {Box,Paper,Typography,Button} from "@mui/material"
import image from "../assets/github.png";
export default function Projects(){
    return(
        <Box sx={{
            display:"flex",
            alignItems:"flex-start",
            justifyContent:"flex-start",
            gap:3
            }}>
         <Paper sx={{
            width:400,
            p:"1rem 1rem",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            flexDirection:"column"
         }}>
         <Typography variant="h6"
         fontSize={20}
         sx={{fontWeight:"bold",mb:2, color:"darkslateblue"}}>
        Project 1 : TASK MANAGER
         </Typography>
         <Typography  variant="body"  fontSize={20}>
           Description  :
         </Typography>
         <Typography variant="body1"  mb={2} fontSize={17} mt={2} sx={{lineHeight:1.8}}>
          The purpose of this Taskmanager project is to help users organize and manage tasks efficiently. With features like user roles, controllers, and middlewares, it’s designed for easy task assignment, role-based access, and streamlined workflow. Think of it as a simple backend for handling to-dos in a structured way ,great for teams or personal productivity! 
         </Typography>
         <Box sx={{display:"flex", gap:2 , mb:2}}>
          <img src={image}  alt="Profile" width={50} height={50} />
         <Button variant="outlined"
         href="https://github.com/VineetMelavanki/Taskmanager"
         target="_blank"
         s>
          Github Link
         </Button>
         </Box>
        
            
         </Paper>
         <Paper sx={{
            gap:2,
            p:"1rem 1rem",
            width:400,
            alignItems:"flex-start"
         }}>
          <Typography variant="h6"
         fontSize={20}
         sx={{fontWeight:"bold",mb:2, color:"darkslateblue"}}>
        Project 2 : QueueForge
         </Typography>
          <Typography  variant="body"  fontSize={20}>
           Description  :
         </Typography>
          <Typography variant="body1"  mb={2} fontSize={17} mt={2} sx={{lineHeight:1.8}}>
           QueueForge is a full-stack web app designed to help you manage and visualize queues efficiently. With a modern frontend (built using Vite) and a Node.js backend, it lets users interact with queue data in real time. Whether you’re learning data structures or need a tool for queue management, QueueForge offers a clean, intuitive experience for both beginners and pros.
         </Typography>
         <Box sx={{display:"flex",gap:2, mb:2}}>
         <img src={image} alt="logo" width={50} height={50}></img>
        <Button variant="outlined" href="https://github.com/VineetMelavanki/QueueForge"
        target="_blank">Github Link</Button>
         </Box>
         </Paper>
        </Box>
    )
}