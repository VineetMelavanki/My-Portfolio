import { Typography, Box, Paper, Link } from "@mui/material";
import IMAGE from "../assets/myimage.png";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: { xs: 2, md: 4 },
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        px: { xs: 1, md: 4 },
      }}
    >
      {/* CONTENT */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
        <Paper
          sx={{
            width: "100%",
            maxWidth: 1000,
            minWidth: 0,
            p: { xs: 1.5, md: 4 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 22, md: 45 },
              color: "blueviolet",
              fontWeight: "bold",
            }}
          >
            Trust me, I’m a software engineer in the making.
          </Typography>

          <Typography sx={{ fontSize: { xs: 12, md: 18 }, mt: 1 }}>
            Meet Vineet Melavanki, a B.Tech Computer Science student and MERN
            stack developer focused on scalable applications.
          </Typography>
        </Paper>

        <Paper
          sx={{
            width: "100%",
            maxWidth: 1000,
            minWidth: 0,
            p: { xs: 1.5, md: 4 },
          }}
        >
          <Typography sx={{ fontSize: { xs: 14, md: 20 }, fontWeight: "bold", color: "blueviolet" }}>
            Education
          </Typography>

          <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
            🎓 B.Tech CSE — Pimpri Chinchwad University
          </Typography>
        </Paper>

        <Paper
          sx={{
            width: "100%",
            maxWidth: 1000,
            minWidth: 0,
            p: { xs: 1.5, md: 4 },
          }}
        >
          <Typography sx={{ fontSize: { xs: 14, md: 20 }, fontWeight: "bold", color: "blueviolet" }}>
            Contact
          </Typography>

          <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
            📞 +91 7820905944
          </Typography>

          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vineetmelavanki06@gmail.com"
            target="_blank"
            sx={{ fontSize: { xs: 12, md: 16 } }}
          >
            📧 Email Me
          </Link>
        </Paper>
      </Box>

      {/* IMAGE */}
      <Box
        component="img"
        src={IMAGE}
        alt="Profile"
        sx={{
          width: { xs: 90, sm: 140, md: 300 },
          height: "auto",
          flexShrink: 0,
        }}
      />
    </Box>
  );
}
