import {Typography,Box,Button,Paper} from "@mui/material"
import IMAGE from "../assets/myimage.png"
export default function Home(){
    return(
        <Box  sx={{display:"flex",gap:4, justifyContent:"center",alignItems:"flex-start"}}>
        <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
         <Paper sx={{
            width:1000,
            p:"2rem 3rem",
            display:"flex",
            alignItems:"flex-start",
            justifyContent:"flex-start",
            flexDirection:"column",
        }}>
         <Typography variant="h4" sx={{fontSize:"45", color:"blueviolet"}}>
           Trust me, I’m a software engineer in the making.
         </Typography>
         <Typography variant="h4" fontSize={20} sx={{mt:2}}>
            Meet Vineet Melavanki, a B.Tech Computer Science student, full-stack web developer, and lifelong 
         </Typography>
         <Typography variant="h4" fontSize={20} sx={{mt : 1}}>
            learner. I specialize in the MERN stack, focusing on building clean, scalable applications. I 
         </Typography>
         <Typography  variant="h4" fontSize={20} sx={{mt : 1}}>
              continuously sharpen my problem-solving skills through DSA, explore emerging technologies, and 
         </Typography>
         <Typography variant="h4" fontSize={20} sx={{mt : 1}}>
            turn ideas into real-world projects that add value.
         </Typography>
        </Paper>
        <Paper
        elevation={2}
        sx={{
            mt:2,
          
          width: 1000,
          p: "2rem 3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, color: "darkslateblue" }}
        >
          Education
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          🎓 B.Tech in Computer Science Engineering — Pimpri Chinchwad University (2024 - 2028)
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          🎓 High School — Novel Jr. College  (2022 - 2024)
        </Typography>
        <Typography variant="body1">
          🎓 Secondary School — Blossom Public School
        </Typography>
       
      </Paper>
        </Box>
       <Box >
       <Box
       component="img"
       src={IMAGE}
       alt="Profile-Image"
       sx={{width:{xs:200,md:300},height:"auto"}}></Box>
       </Box>
        </Box>
    )
}