import {Typography,Button,AppBar,Toolbar,Box,Drawer,List,ListItemText,ListItemButton,IconButton} from "@mui/material";
import {Notifications} from "@mui/icons-material"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom";
export default function Navbar({children}){
    const navigate=useNavigate();
    return(
      
     <Box sx={{flexGrow:1}}>
        <AppBar position="sticky" color="primary">
            <Toolbar sx={{gap:2}}>
                <Button variant="outlined" onClick={()=>navigate("/")}>
                    Home
                </Button>
               <Button variant="outlined" onClick={()=>navigate("/About")}>
                About Me
               </Button>
               <Button variant="outlined" onClick={()=>navigate("/My-Projects")}>
                View My projects
               </Button>
               <Button
               variant="outlined"
               href="https://github.com/VineetMelavanki"
               target="_blank"
               rel="noopener noreferrer">
                MY Git-hub
               </Button >
               <Button variant="outlined"
               href="https://www.linkedin.com/in/vineet-melavanki-a91677324/"
               target="_blank">
                LinkedIn
               </Button>
            </Toolbar>
        </AppBar>
        <Box sx={{mt:"64px", p:2,minHeight:'calc(100vh-64px)'}}>
            {children}
        </Box>
     </Box>
    
    )
    
}